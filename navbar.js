document.addEventListener('DOMContentLoaded', function() {
    // Fetch and insert the navigation bar
    fetch('navbar.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
        });
});


    function toggleMenu() {
        const menu = document.querySelector('nav ul');
        menu.classList.toggle('show');
    }

