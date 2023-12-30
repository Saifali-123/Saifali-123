document.addEventListener('DOMContentLoaded', function() {
    // Fetch and insert the navigation bar
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML += data;
        });
});