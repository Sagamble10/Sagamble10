document.getElementById('joinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const messageDiv = document.getElementById('message');
    if (name) {
        messageDiv.innerHTML = `Thank you for joining, ${name}!`;
    } else {
        messageDiv.innerHTML = 'Please enter your name.';
    }
});

document.getElementById('subscribe').addEventListener('change', function() {
    alert('Thank you for subscribing!');
});

document.getElementById('playerInfo').addEventListener('click', function() {
    this.innerHTML = '<p>More information about the players will be available soon!</p>';
});