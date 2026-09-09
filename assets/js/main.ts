const SESSION_CHECK_INTERVAL = 60 * 1000
// Start several minutes before the session
const SESSION_START_OFFSET = 15 * 60 * 1000

/**
 * Highlight current sessions in the agenda page. Dehighlight past sessions.
 * @param checkInterval Interval to check for current sessions, in milliseconds
 * @param startOffset How much before the session start to highlight it, in
 * milliseconds
 */
function highlightCurrentSessions(checkInterval: number, startOffset: number) {
    // Decomment for testing purposes
    //const currentDate = new Date("2025-10-04T11:46:00")
    const currentDate = new Date()

    const sessions = document.querySelectorAll(".sessions-item")

    if (!sessions.length) return

    sessions.forEach(session => {
        const starts = session.getAttribute("data-starts")
        const ends = session.getAttribute("data-ends")

        if (!starts || !ends) return

        const start = new Date(new Date(starts).getTime() - startOffset)
        const end = new Date(ends)
        if (end > currentDate && currentDate > start) {
            session.classList.add("sessions-item--current")
            session.classList.remove("sessions-item--past")
        } else if (currentDate > end) {
            session.classList.add("sessions-item--past")
            session.classList.remove("sessions-item--current")
        }
    })

    setTimeout(() => highlightCurrentSessions(
        checkInterval, startOffset), checkInterval
    )
}

highlightCurrentSessions(SESSION_CHECK_INTERVAL, SESSION_START_OFFSET)

/**
 * Keep the agenda's room header row in view while scrolling down a long day.
 *
 * `position: sticky` cannot do this: the timetable wrapper scrolls the rooms
 * sideways, so it is the scrollport a `top` offset resolves against, and that
 * scrollport never moves vertically. Instead we publish how far the wrapper has
 * scrolled past the top of the viewport as a custom property, and the header
 * cells shift by it. Only the vertical axis is scripted, so the columns stay
 * aligned with the horizontal scroll for free.
 */
function pinAgendaTableHeads() {
    const wrappers = Array.from(
        document.querySelectorAll<HTMLElement>(".agenda-tableWrapper")
    )

    if (!wrappers.length) return

    let queued = false

    const update = () => {
        queued = false

        wrappers.forEach(wrapper => {
            // The inactive day panels are display:none
            if (!wrapper.offsetParent) return

            const head = wrapper.querySelector<HTMLElement>("thead")

            if (!head) return

            const box = wrapper.getBoundingClientRect()
            // clientTop is the wrapper's own border: without it the header
            // lands a pixel low and the row underneath shows through the gap.
            // Ceil so a fractional scroll position can't reopen that seam.
            const travelled = Math.ceil(-box.top - wrapper.clientTop)
            // Stop before the header would leave the bottom of its own table
            const limit = Math.max(box.height - head.offsetHeight, 0)
            const offset = Math.min(Math.max(travelled, 0), limit)

            wrapper.style.setProperty("--agenda-headOffset", `${offset}px`)
            wrapper.classList.toggle(
                "agenda-tableWrapper--headPinned", offset > 0
            )
        })
    }

    const schedule = () => {
        if (queued) return
        queued = true
        requestAnimationFrame(update)
    }

    update()
    addEventListener("scroll", schedule, { passive: true })
    addEventListener("resize", schedule, { passive: true })
    // Switching day swaps which panel is laid out
    document.querySelectorAll(".agenda-toggleInput").forEach(input =>
        input.addEventListener("change", schedule)
    )
}

pinAgendaTableHeads()

/**
 * Enables smooth horizontal scrolling controls (toolbar + floating buttons)
 * and mouse drag-to-scroll on agenda timetables.
 */
function setupAgendaHorizontalScroll() {
    const panels = Array.from(
        document.querySelectorAll<HTMLElement>(".agenda-dayPanel")
    )
    if (!panels.length) return

    const toolbarPrev = document.querySelector<HTMLButtonElement>(".agenda-scrollBar-btn--prev")
    const toolbarNext = document.querySelector<HTMLButtonElement>(".agenda-scrollBar-btn--next")

    const getActiveWrapper = (): HTMLElement | null => {
        const activePanel = panels.find(p => p.offsetParent !== null) || panels[0]
        return activePanel ? activePanel.querySelector<HTMLElement>(".agenda-tableWrapper") : null
    }

    const updateControlsForWrapper = (wrapper: HTMLElement) => {
        const container = wrapper.closest(".agenda-tableContainer")
        const floatPrev = container?.querySelector<HTMLButtonElement>(".agenda-floatingNav--prev")
        const floatNext = container?.querySelector<HTMLButtonElement>(".agenda-floatingNav--next")

        const maxScroll = wrapper.scrollWidth - wrapper.clientWidth
        const hasOverflow = maxScroll > 8

        const canScrollLeft = hasOverflow && wrapper.scrollLeft > 4
        const canScrollRight = hasOverflow && wrapper.scrollLeft < maxScroll - 4

        if (floatPrev) {
            floatPrev.disabled = !canScrollLeft
            floatPrev.classList.toggle("agenda-floatingNav--disabled", !canScrollLeft)
            floatPrev.style.display = hasOverflow ? "" : "none"
        }
        if (floatNext) {
            floatNext.disabled = !canScrollRight
            floatNext.classList.toggle("agenda-floatingNav--disabled", !canScrollRight)
            floatNext.style.display = hasOverflow ? "" : "none"
        }

        // If this wrapper belongs to the active panel, update toolbar buttons too
        if (wrapper.offsetParent !== null) {
            if (toolbarPrev) {
                toolbarPrev.disabled = !canScrollLeft
                toolbarPrev.classList.toggle("agenda-scrollBar-btn--disabled", !canScrollLeft)
            }
            if (toolbarNext) {
                toolbarNext.disabled = !canScrollRight
                toolbarNext.classList.toggle("agenda-scrollBar-btn--disabled", !canScrollRight)
            }
        }
    }

    const updateActiveControls = () => {
        const activeWrapper = getActiveWrapper()
        if (activeWrapper) {
            updateControlsForWrapper(activeWrapper)
        }
    }

    const scrollStep = 320

    panels.forEach(panel => {
        const wrapper = panel.querySelector<HTMLElement>(".agenda-tableWrapper")
        if (!wrapper) return

        const container = panel.querySelector<HTMLElement>(".agenda-tableContainer")
        const floatPrev = container?.querySelector<HTMLButtonElement>(".agenda-floatingNav--prev")
        const floatNext = container?.querySelector<HTMLButtonElement>(".agenda-floatingNav--next")

        floatPrev?.addEventListener("click", () => {
            wrapper.scrollBy({ left: -scrollStep, behavior: "smooth" })
        })

        floatNext?.addEventListener("click", () => {
            wrapper.scrollBy({ left: scrollStep, behavior: "smooth" })
        })

        wrapper.addEventListener("scroll", () => {
            updateControlsForWrapper(wrapper)
        }, { passive: true })

        // Mouse Drag to Scroll
        let isDown = false
        let startX = 0
        let scrollStartLeft = 0
        let dragged = false

        wrapper.addEventListener("mousedown", (e: MouseEvent) => {
            if (e.button !== 0) return
            // Don't drag if clicked an interactive element directly
            const target = e.target as HTMLElement | null
            if (target?.closest("a, button, input, label")) return

            isDown = true
            dragged = false
            startX = e.pageX - wrapper.offsetLeft
            scrollStartLeft = wrapper.scrollLeft
            wrapper.classList.add("agenda-tableWrapper--isDragging")
        })

        const onMouseMove = (e: MouseEvent) => {
            if (!isDown) return
            e.preventDefault()
            const x = e.pageX - wrapper.offsetLeft
            const walk = x - startX
            if (Math.abs(walk) > 4) {
                dragged = true
            }
            wrapper.scrollLeft = scrollStartLeft - walk
        }

        const onMouseUp = () => {
            if (!isDown) return
            isDown = false
            wrapper.classList.remove("agenda-tableWrapper--isDragging")
        }

        window.addEventListener("mousemove", onMouseMove)
        window.addEventListener("mouseup", onMouseUp)

        wrapper.addEventListener("click", (e: MouseEvent) => {
            if (dragged) {
                e.preventDefault()
                e.stopPropagation()
                dragged = false
            }
        }, true)
    })

    // Toolbar buttons click
    toolbarPrev?.addEventListener("click", () => {
        const wrapper = getActiveWrapper()
        if (wrapper) {
            wrapper.scrollBy({ left: -scrollStep, behavior: "smooth" })
        }
    })

    toolbarNext?.addEventListener("click", () => {
        const wrapper = getActiveWrapper()
        if (wrapper) {
            wrapper.scrollBy({ left: scrollStep, behavior: "smooth" })
        }
    })

    // Listen to day toggle switches and resize
    document.querySelectorAll(".agenda-toggleInput").forEach(input => {
        input.addEventListener("change", () => {
            requestAnimationFrame(updateActiveControls)
        })
    })

    window.addEventListener("resize", updateActiveControls, { passive: true })

    updateActiveControls()
}

setupAgendaHorizontalScroll()
