document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("Ci4lLMA12MIn1Hfmd"); // Replace with your EmailJS User ID

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Collect form data
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            query: document.getElementById("query").value
        };

        // Send email using EmailJS
        emailjs.send("service_8kl1o3f", "template_cae42uv", formData)
            .then(function(response) {
                alert("Message sent successfully!");
                document.getElementById("contact-form").reset(); // Clear the form
            }, function(error) {
                alert("Failed to send message. Please try again.");
                console.log("EmailJS Error:", error);
            });
    });
});
