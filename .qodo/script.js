function loadSessions() {
    const saved = localStorage.getItem("studylog-sessions");
    if (saved === null) {
        return [];
    }
    return JSON.parse(saved);
}

function saveSessions(sessions) {
    localStorage.setItem("studylog-sessions", JSON.stringify(sessions));
}

const form = document.getElementById("session-form");

if (form !== null) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const session = {
            id: Date.now(),
            subject: document.getElementById("subject").value,
            minutes: Number(document.getElementById("minutes").value),
            date: document.getElementById("date").value,
            note: document.getElementById("note").value
        };

        const sessions = loadSessions();
        sessions.push(session);
        saveSessions(sessions);

        form.reset();
        alert("Session saved!");
    });
}

const totalMinutes = document.getElementById("total-minutes");
const sessionCount = document.getElementById("session-count");

if (totalMinutes !== null) {
    const sessions = loadSessions();
    let total = 0;

    for (const session of sessions) {
        total = total + session.minutes;
    }

    totalMinutes.textContent = total;
    sessionCount.textContent = sessions.length;

    const tableBody = document.getElementById("sessions-body");
    const recent = sessions.slice().reverse().slice(0, 10);

    for (const session of recent) {
        const row = document.createElement("tr");
        const values = [session.date, session.subject, session.minutes, session.note];

        for (const value of values) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }
}