// Change Navbar Background Color on Scroll
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 50) {
        navbar.style.backgroundColor = "#4b0082"; // Indigo
    } else {
        navbar.style.backgroundColor = "#ff6347"; // Tomato
    }
};

// Change Font Color on Hover (Optional JS Enhancement)
var links = document.querySelectorAll('#navbar ul li a');
links.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = '#ffff00'; // Yellow
    });
    link.addEventListener('mouseout', function() {
        this.style.color = '#ffffff'; // White
    });
});
