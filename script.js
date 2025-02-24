document.addEventListener("DOMContentLoaded", () => {
    // Navbar bağlantıları için yumuşak kaydırma
    document.querySelectorAll(".navbar a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Galeri resimlerini büyütme/küçültme
    document.querySelectorAll(".gallery-img").forEach(img => {
        img.addEventListener("click", () => {
            img.classList.toggle("enlarged");
        });
    });

    // Sayfa yüklendiğinde hoş geldin mesajı
    setTimeout(() => {
        alert("Sevgilim, senin için hazırladığım bu özel dünyaya hoş geldin! 💕");
    }, 500);

    // Küçük kalplerin görünürlüğünü kontrol etme
    window.addEventListener("scroll", () => {
        document.querySelectorAll(".small-heart").forEach(heart => {
            const heartPos = heart.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (heartPos < windowHeight - 50) {
                heart.style.opacity = "1";
                heart.style.animation = "heartbeat 2s infinite";
            }
        });
    });

    // Video otomatik oynatma (Mobil uyumlu)
    const video = document.getElementById("autoPlayVideo");

    if (video) {
        video.muted = true; // Mobilde otomatik oynatma için sesi kapat
        video.setAttribute("playsinline", ""); // iOS için

        const playVideo = () => {
            video.play().catch(error => console.log("Video otomatik oynatılamadı:", error));
        };

        const checkVisibility = () => {
            const rect = video.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight && rect.bottom > 0) {
                playVideo();
            } else {
                video.pause();
            }
        };

        window.addEventListener("scroll", checkVisibility);
        playVideo();
    }
});
