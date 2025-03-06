document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const currentMonth = document.getElementById("currentMonth");
    const prevMonthBtn = document.getElementById("prevMonth");
    const nextMonthBtn = document.getElementById("nextMonth");

    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();

    const events = {
        "2025-03-10": "Math Tutor Session",
        "2025-03-13": "Study Group"
    };

    function renderCalendar() {
        calendar.innerHTML = "";
        currentMonth.textContent = ${date.toLocaleString("default", { month: "long" })} ${year};

        let firstDay = new Date(year, month, 1).getDay();
        let daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            calendar.innerHTML += <div></div>;
        }

        for (let day = 1; day <= daysInMonth; day++) {
            let dateStr = ${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")};
            let className = events[dateStr] ? "event-day" : "";
            calendar.innerHTML += <div class="${className}">${day}</div>;
        }
    }

    prevMonthBtn.addEventListener("click", () => {
        month--;
        renderCalendar();
    });

    nextMonthBtn.addEventListener("click", () => {
        month++;
        renderCalendar();
    });

    renderCalendar();
});