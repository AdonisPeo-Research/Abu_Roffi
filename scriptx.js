document.addEventListener("DOMContentLoaded", () => {
    let toggle = true; // To alternate between "Rofii" and "wifey"

    function createFloatingText() {
        let text = document.createElement("div");
        text.className = "floating-text";

        // Alternate between "Rofii" and "wifey"
        text.innerText = toggle ? "Rofii 🌹💖🎀❤️🫀" : "wifey 🌹💖🎀❤️🫀";
        toggle = !toggle;

        // Random positioning with better spacing
        let leftPos = Math.random() * 90 + 5;
        let topPos = Math.random() * 90 + 5;

        text.style.left = leftPos + "vw";
        text.style.top = topPos + "vh";

        // Random opacity for better visibility
        text.style.opacity = Math.random() * 0.5 + 0.2;

        // Dynamic font size for different screen sizes
        let screenWidth = window.innerWidth;
        text.style.fontSize = screenWidth > 768 ? `${Math.random() * 20 + 10}px` : `${Math.random() * 10 + 5}px`;

        // Random rotation for a natural effect
        text.style.transform = `rotate(${Math.random() * 360}deg)`;

        document.getElementById("floating-text-container").appendChild(text);

        setTimeout(() => text.remove(), 8000);
    }

    function intenseFloatingEffect() {
        let count = Math.floor(Math.random() * 3) + 2; // Generates 2 to 4 texts at once
        for (let i = 0; i < count; i++) {
            createFloatingText();
        }
        setTimeout(intenseFloatingEffect, Math.random() * 500 + 300); // Faster interval (300ms - 800ms)
    }

    intenseFloatingEffect();

    // Auto-play BGM (Ensures music plays on interaction)
    const bgm = document.getElementById("bgm");

    function playBGM() {
        bgm.play().catch(() => {
            console.log("Autoplay blocked. Waiting for user interaction...");
        });
    }

    // Try playing immediately
    playBGM();

    // Ensure BGM plays on user interaction
    document.addEventListener("click", playBGM, { once: true });
    document.addEventListener("touchstart", playBGM, { once: true });
});
