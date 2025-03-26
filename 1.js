document.getElementById('start-btn').addEventListener('click', function() {
    // Call the backend voice assistant
    fetch('http://127.0.0.1:5000/start-listening')
        .then(response => response.json())
        .then(data => {
            document.getElementById('status').textContent = "Listening...";
            document.getElementById('response').textContent = data.response;
        })
        .catch(error => console.error('Error:', error));
});
