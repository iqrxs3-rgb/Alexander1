

document.addEventListener('DOMContentLoaded', () => {
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.glass').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });

    const navLinks = document.querySelector('.hidden.md\\:flex');
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    console.log("%c ACE HOST %c Secured by Alexander & Jef ", 
                "background: #2563eb; color: #fff; font-weight: bold; padding: 4px 8px; border-radius: 4px;", 
                "background: #1e293b; color: #3b82f6; padding: 4px 8px; border-radius: 4px;");
});