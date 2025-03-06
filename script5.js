document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("educatorForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from default submission

        const name = document.getElementById("name").value.trim();
        const age = document.getElementById("age").value.trim();
        const grade = document.getElementById("grade").value.trim();

        if (!name || !age || !grade) {
            alert("Please fill in all fields.");
            return;
        }

        alert("Form submitted successfully!");

        // Redirect to sixth.html
        window.location.href = "sixth.html";
    });
});