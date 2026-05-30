// ضبط سنة الفوتر
document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ضبط زمن السلايدر (كل 4 ثواني)
    const sliderElement = document.querySelector("#stationSlider");
    if (sliderElement) {
        const carousel = new bootstrap.Carousel(sliderElement, {
            interval: 4000,
            ride: "carousel",
            pause: "hover",
            wrap: true,
        });
    }

    // سكرول ناعم للروابط داخل الصفحة
    const navLinks = document.querySelectorAll('a.nav-link[href^="#"]');
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                window.scrollTo({
                    top: targetEl.offsetTop - 80,
                    behavior: "smooth",
                });
            }
        });
    });
});