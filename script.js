document.addEventListener('DOMContentLoaded', () => {
    const pseudonym = localStorage.getItem('pseudonym');
    if (pseudonym) {
        document.getElementById('welcome').classList.add('hidden');
        document.getElementById('chat').classList.remove('hidden');
        updateHeader(pseudonym);
    }
});

function setPseudonym() {
    const pseudonym = document.getElementById('pseudonym').value.trim();
    if (pseudonym) {
        localStorage.setItem('pseudonym', pseudonym);
        document.getElementById('welcome').classList.add('hidden');
        document.getElementById('chat').classList.remove('hidden');
        updateHeader(pseudonym);
    }
}

function updateHeader(pseudonym) {
    const header = document.getElementById('header');
    header.textContent = `Encrypted Chat - [${pseudonym}] & [USER2]`;
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    if (message) {
        addMessage(message, 'sent');
        input.value = '';
    }
}

function addMessage(message, type) {
    const messages = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.innerHTML = `<span>${message}</span>`;
    if (type === 'received') {
        messageElement.innerHTML += ' <span class="status">✔✔</span>';
    }
    messages.appendChild(messageElement);
    messages.scrollTop = messages.scrollHeight;
}
