$(document).ready(function() {
    

    
    $("#contactForm").submit(function(event) {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Required");
            event.preventDefault();
        }
    });
});
