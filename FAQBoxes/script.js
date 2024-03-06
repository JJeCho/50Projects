const toggle = document.querySelectorAll('.faq-toggle');
const faq = document.querySelectorAll('.faq');

toggle.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
})

