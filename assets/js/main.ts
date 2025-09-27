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
