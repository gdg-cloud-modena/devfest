/**
 * Check the current state of the sessions
 */
const checkSessionTime = (time:number) => {
    //test date
    // const currentDate = new Date("2025-10-04T11:46:00")
    
    const currentDate = new Date()
    const offset = 15* 60* 1000
    const sessions = document.querySelectorAll(".sessions-item")
    if(!sessions.length) return
    sessions.forEach(session => {
        const starts = session.getAttribute("data-starts")
        const ends = session.getAttribute("data-ends")
        if(starts && ends) {
            const sessionstartDate = new Date(new Date(starts).getTime() - offset)
            const sessionEndDate = new Date(ends)
            if ( sessionEndDate > currentDate  && currentDate > sessionstartDate ) {
                session.classList.add("sessions-item--current")
            }
            else if (currentDate > sessionEndDate) {
                session.classList.add("sessions-item--past")
            }
        }
    })
    setTimeout(() => checkSessionTime(time), time)
}


checkSessionTime(60_000)
