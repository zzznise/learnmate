document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("educatorForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const subject = document.getElementById("subject").value;
        const grade = document.getElementById("grade").value;
        const experience = document.getElementById("experience").value.trim();

        if (!subject || !grade || experience === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Form submitted successfully!");
        form.reset();
    });
});