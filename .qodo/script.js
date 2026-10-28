function loadsessions(){
    const saved = localStorage.getItem("studylog-sessions")
    if (saved === null) {
        return []
    }
    function saveSessions(sessions) {
        localStorage.setItem("studyLog-session", JSON.stringify(sessions))
    }

    
}