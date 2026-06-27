// Smooth reveal scroll behavior for interaction polish
document.addEventListener("DOMContentLoaded", () => {
    const badges = document.querySelectorAll('.light-up-badge');
    
    // Add a sequential animation trigger when cards load in
    badges.forEach((badge, index) => {
        badge.style.opacity = "0";
        badge.style.transform = "translateY(20px)";
        badge.style.transition = "all 0.5s ease";
        
        setTimeout(() => {
            badge.style.opacity = "1";
            badge.style.transform = "translateY(0)";
        }, 150 * index);
    });
});
