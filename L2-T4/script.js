document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Clear previous errors
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    // Get field values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let isValid = true;

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        isValid = false;
    }

    // Password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerText = "Password must be 8+ chars with uppercase, number, special char";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        // Here, you could add dynamic routing or form handling logic
    }
});
