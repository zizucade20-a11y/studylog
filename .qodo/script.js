function loadsessions(){
    const saved = localStorage.getItem("studylog-sessions")
    if (saved === null) {
        return []
    }
    function saveSessions(sessions) {
        localStorage.setItem("studyLog-session", JSON.stringify(sessions))
    }

    const form= document.getElementById("session-form")

    if (form !== null) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const session={
                id: Date.now(),
                subject:   document.getElementById("subject").value,
                minutes: Number(document.getElementById("munites").value),
                date: document.getElementById("date").value,
                note: document.gegElementById("note").value
            };

            const sessions = loadSessions();
            sessions.push(session);
            saveSessions(sessions);
        });
    }


}

const tatalMinutes = document.getElementById("total-minutes");
const sessionCount = document.getElementById("session-count");

if (totalMinutes !== null) {
    const sessions = loadSessions();
    let total = 0;

    for (const session of sessions) {
        total = total + session.minutes;
    }

    totalMinutes.textContent = total;
    sessionCount.textContent = sessions.length;
}