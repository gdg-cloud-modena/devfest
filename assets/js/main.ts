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
