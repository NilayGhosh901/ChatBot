# WhatsApp-like Chatbot

## Description
This project is a simple yet powerful chatbot application that mimics a WhatsApp-like user interface and leverages Google's Generative AI (`gemini-1.5-flash`) to provide intelligent responses to user queries.

## Features
- **Real-Time Messaging**: Interact with the chatbot in a seamless conversational manner.
- **AI-Powered Responses**: Uses Google's Generative AI for accurate and relevant replies.
- **User-Friendly Interface**: Clean and intuitive design for enhanced user experience.

## Technologies Used
### Frontend
- HTML5, CSS3, JavaScript
### Backend
- Node.js, Express.js
- Google Generative AI SDK (`@google/generative-ai`)
### Other
- Axios for API calls
- CORS for cross-origin support

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine
- A valid API key for Google's Generative AI

### Installation Steps
1. Clone the repository.
    ```bash
    git clone https://github.com/your-username/whatsapp-like-chatbot.git
    cd WhatsApp-like-chatbot
    ```
2. Install dependencies.
    ```bash
    npm install
    ```
3. Create a `.env` file in the root directory and add your API key.
    ```
    API_KEY=your_google_api_key
    ```
4. Start the server.
    ```bash
    node main.js
    ```
5. Open `index.html` in your browser to start using the chatbot.

## Usage
1. Type a message in the input field.
2. Press Enter or click the Send button to submit your message.
3. Wait for the chatbot to respond.

## File Structure
- **main.js**: Backend server and API integration with Google's Generative AI.
- **index.html**: Frontend layout of the chatbot.
- **script.js**: Handles chat functionalities and communication with the backend.

## Screenshots
![Chatbot UI](screenshot_UI.png)

## License
This open-source project is available under the [MIT License](LICENSE).
