// script.js
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    const message = messageInput.value;
    if (message.trim() !== '') {
        appendMessage('You', message);
        messageInput.value = '';
        // You would send this message to the server for processing and broadcasting to other users
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);
}
