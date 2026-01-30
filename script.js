// Apply button interaction
const applyButtons = document.querySelectorAll(".apply-btn");

applyButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Application feature coming soon! Stay tuned 🚀");
    });
});

// Smooth hover effect for cards (visual polish)
const cards = document.querySelectorAll(".card, .role-card, .opportunity-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
    });
});