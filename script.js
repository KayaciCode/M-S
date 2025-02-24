
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});


document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('enlarged');
    });
});


window.onload = () => {
    setTimeout(() => {
        alert("Sevgilim, senin için hazırladığım bu özel dünyaya hoş geldin! 💕");
    }, 500);
};

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
    const windowHeight = window.innerHeight;

    if (videoPos < windowHeight && videoPos >= 0) { 
        if (!video.playing) { 
            video.play();
        }
    } else { 
        video.pause();
    }
});
