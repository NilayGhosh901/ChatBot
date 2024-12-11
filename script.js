var axios = require('axios')
async function sendMessage() {
    const userInput = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    if (userInput.value.trim() === "") return; // Prevent sending empty messages

    // Display user message
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = userInput.value;
    chatBox.appendChild(userMessage);

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        // Send user message to backend

        const response = await fetch("http://localhost:5500/api/content", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question: userInput.value })
        });

        const data = await response.json();
        
        // Display bot response
        const botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot-message");
        botMessage.textContent = data.result || "Sorry, I didn't understand that.";
        chatBox.appendChild(botMessage);
    } catch (error) {
        console.error("Error:", error);
        const errorMessage = document.createElement("div");
        errorMessage.classList.add("message", "bot-message");
        errorMessage.textContent = "An error occurred. Please try again.";
        chatBox.appendChild(errorMessage);
    }

    // Scroll to the bottom again
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input
    userInput.value = "";
}

// Send message on Enter key press
function handleKeyPress(event) {
    sendMessage();
    /* if (event.key === "Enter") {
        sendMessage();
    } */
}
