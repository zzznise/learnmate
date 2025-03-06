document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("educatorForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const age = document.getElementById("age").value.trim();
        const grade = document.getElementById("grade").value.trim();

        if (!name || !age || !grade) {
            alert("Please fill in all fields.");
            return;
        }

        alert("Form submitted successfully!");
        form.reset();
    });
});