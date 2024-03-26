document.querySelectorAll('.ancor').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});
