document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('animated-text');
    const text = "Welcome to My Technical Channel!";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            textElement.style.animation = "color-change 4s infinite";
        }
    }

    typeWriter();
});
