function nextPage(page) {
    window.location.href = page;
}

// Make "No" button impossible to click
document.addEventListener("DOMContentLoaded", () => {
    let noBtn = document.getElementById("no-btn");
    if (noBtn) {
        noBtn.style.position = "absolute"; // Ensures movement works
        document.addEventListener("mousemove", (e) => {
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        });
    }
});

// Heart Animation
setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.getElementById("heart-container").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}, 300);

// Random Love Emojis
const emojis = ["❤️", "😍", "💖", "😘", "💞"];
setInterval(() => {
    let emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.top = Math.random() * 100 + "vh";
    document.getElementById("emoji-container").appendChild(emoji);
    setTimeout(() => emoji.remove(), 5000);
}, 700);
