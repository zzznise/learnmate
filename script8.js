document.addEventListener("DOMContentLoaded", function () {
    const calendarBody = document.getElementById("calendar-body");
    calendarBody.innerHTML = ""; // Clear previous content to prevent duplication
    
    let date = 1;
    for (let i = 0; i < 5; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            let cell = document.createElement("td");
            if (date <= 31) {
                cell.textContent = date;
                date++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
});