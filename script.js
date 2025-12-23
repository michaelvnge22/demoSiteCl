
// Animation au scroll
const fades = document.querySelectorAll('.fade');

const showOnScroll = () => {
    fades.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
};

window.addEventListener('scroll', showOnScroll);
showOnScroll();

// Commande WhatsApp
function order(product) {
    const phone = "225764416775";
    const message = `Bonjour, je suis intéressé par ${product}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
