// Hamburger menü toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
        document.querySelector('.nav-menu').classList.remove('active'); // Menüyü kapat
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

// Kalp animasyonları, Video ve Şarkı otomatik oynatma
window.addEventListener('scroll', () => {
    document.querySelectorAll('.small-heart').forEach(heart => {
        const heartPos = heart.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (heartPos < windowHeight - 50) {
            heart.style.opacity = '1';
            heart.style.animation = 'heartbeat 2s infinite';
        }
    });

    const video = document.getElementById('autoPlayVideo');
    const videoPos = video.getBoundingClientRect().top;
    if (videoPos < windowHeight && videoPos >= 0) {
        if (!video.playing) {
            video.play();
        }
    } else {
        video.pause();
    }

    const audio = document.getElementById('autoPlayAudio');
    const audioPos = audio.getBoundingClientRect().top;
    if (audioPos < windowHeight && audioPos >= 0) {
        if (!audio.playing) {
            audio.volume = 0.5;
            audio.play().catch(error => {
                console.log("Otomatik oynatma engellendi:", error);
                document.body.addEventListener('click', () => {
                    audio.play();
                }, { once: true });
            });
        }
    } else {
        audio.pause();
    }
});
