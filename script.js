// Smooth Scroll
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Fotoğraflara tıklama efekti
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('enlarged');
    });
});

// Hoş geldin mesajı
window.onload = () => {
    setTimeout(() => {
        alert("Sevgilim, senin için hazırladığım bu özel dünyaya hoş geldin! 💕");
    }, 500);
};

// Kalp animasyonları ve Video otomatik oynatma
window.addEventListener('scroll', () => {
    // Kalp animasyonları
    document.querySelectorAll('.small-heart').forEach(heart => {
        const heartPos = heart.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (heartPos < windowHeight - 50) {
            heart.style.opacity = '1';
            heart.style.animation = 'heartbeat 2s infinite';
        }
    });

    // Video otomatik oynatma
    const video = document.getElementById('autoPlayVideo');
    const videoPos = video.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (videoPos < windowHeight && videoPos >= 0) { // Video ekranda göründüğünde
        if (!video.playing) { // Daha önce oynatılmadıysa
            video.play();
        }
    } else { // Ekrandan çıkarsa duraklat
        video.pause();
    }
});