function eventSample(event) {
    console.log("✅ Custom event triggered successfully!");
    alert("Event Triggered Successfully!");
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const sampleButton = document.getElementById("sample");

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const newobj = Object.fromEntries(formData.entries()); // Create user object

        console.clear();
        console.log("📋 Form Data Received:", newobj);

        // Username existence check
        if (newobj.username === "Nithishkumar") {
            console.log("⚠️ Username already exists!");
            alert("This username already exists! Please choose another one.");
        } 
        else {
            // Example password validation
            if (newobj.password.length < 6) {
                alert("Password must be at least 6 characters long!");
                return;
            }

            console.log("✅ Registration successful:", newobj);
            alert(`Welcome, ${newobj.username}! Registration completed successfully.`);
        }
    });

    // Handle the sample button event
    sampleButton.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("⚡ Sample button clicked!");
        eventSample(event);
    });
});
