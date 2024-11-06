const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Parse incoming JSON data
app.use(express.json());

// Chatbot API endpoint
app.post("/api/chatbot", (req, res) => {
  // TODO: Implement your chatbot logic here
  // This is where you would call your custom handler function
  const { question } = req.body;
  console.log("Received question:", question);
  const response = "This is a sample response from the chatbot.";
  res.json({ response });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// This scaffolding includes the following components:

// 1. **Server-side (Node.js):**
//    - An Express.js server that serves static files from the `public` directory.
//    - A `/api/chatbot` POST endpoint that receives questions and returns sample responses. You will need to implement your custom chatbot logic in this endpoint.

// 2. **Client-side (HTML/JavaScript):**
//    - A simple chatbot interface with a chat window, a question input field, and a send button.
//    - Event listeners on the send button that trigger the fetch call to the `/api/chatbot` endpoint.
//    - Functions to display messages in the chat window.

// To use this scaffolding, you'll need to:

// 1. Implement your custom chatbot logic in the `/api/chatbot` endpoint.
// 2. Integrate your API endpoint with the client-side code, replacing the `fetchChatbotResponse` function.
// 3. Customize the UI and styling as needed.

// Let me know if you have any questions or need further assistance!
