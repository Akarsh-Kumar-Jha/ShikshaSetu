function toggleMenu() {
    document.getElementById("mobile-menu").classList.toggle("translate-x-0");
    document.getElementById("mobile-overlay").classList.toggle("hidden");
}
(function() {
    emailjs.init("chbsVgNoMOmrMglEw");
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form field values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

 
    const emailParams = {
        name: name, 
        message: message, 
        email: email
    };

    emailjs.send("service_23qc9xp", "template_j7u1ydk", emailParams)
        .then(function(response) {
            console.log("Email sent successfully:", response);
            alert("Thank you for your message! We will get back to you soon.");
        }, function(error) {
            console.error("Error sending email:", error); 
            alert("Error sending message: " + JSON.stringify(error));
        });
    document.getElementById("contact-form").reset();
});
