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
                heart.style.animation = "heartbeat 2s forwards"; 
            } 
        }); 
    });

    // Video otomatik oynatma (Mobil uyumlu)
    const video = document.getElementById("autoPlayVideo");
    if (video) { 
        video.muted = true; 
        video.setAttribute("playsinline", ""); 
        new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting ? video.play().catch(console.log) : video.pause()), { threshold: 0.5 }).observe(video); 
    } 
});
