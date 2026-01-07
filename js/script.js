// ============================================================
// 🖱️ INTERACTION SCRIPT
// Handles: Tubes Cursor (Implemented via imported Component), Back to Top, Typing
// ============================================================

import TubesCursor from "./tubes_lib.js";

// 1. Initialize Tubes Cursor
document.addEventListener("DOMContentLoaded", function () {
    const canvasElement = document.getElementById('canvas');
    if (canvasElement) {
        const app = TubesCursor(canvasElement, {
            tubes: {
                colors: ["#f967fb", "#53bc28", "#6958d5"],
                minRadius: 0.002,
                maxRadius: 0.02,
                lights: {
                    intensity: 200,
                    colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
                }
            }
        });

        // Move camera back to reduce visual size of the cursor
        if (app.three && app.three.camera) {
            app.three.camera.position.z = 30;
        }

        // Optional interactvity: Change colors on click
        document.body.addEventListener('click', () => {
            // Helper to generate random colors
            function randomColors(count) {
                return new Array(count)
                    .fill(0)
                    .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
            }

            const colors = randomColors(3);
            const lightsColors = randomColors(4);
            // app.tubes.setColors(colors);
            // app.tubes.setLightsColors(lightsColors);
            // Uncomment above if you want random colors on click
        });
    }
});


// 2. Back to Top Button Logic
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 3. Typed.js Initialization
document.addEventListener("DOMContentLoaded", function () {
    // Check if Typed is loaded
    if (typeof Typed !== 'undefined') {
        new Typed(".typing", {
            strings: [
                "VFX Designer",
                "Video Editor",
                "Motion Graphics Artist",
                "3D Generalist",
                "Compositor",
                "Visual Storyteller"
            ],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 1200,
            loop: true,
            showCursor: true,
            cursorChar: "|"
        });
    }
});


