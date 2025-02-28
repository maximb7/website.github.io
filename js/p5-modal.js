document.addEventListener("DOMContentLoaded", function () {
    const p5Project = document.querySelector(".p5-project"); // Select the p5.js project card
    const p5Modal = document.getElementById("p5-modal");
    const p5SketchContainer = document.getElementById("p5-sketch-container");
    const closeP5Modal = document.getElementById("close-p5-modal");
    const p5ModalTitle = document.getElementById("p5-modal-title");
    const p5ModalDescription = document.getElementById("p5-modal-description");

    let originalCanvasParent = null;
    let activeCanvas = null;

    if (p5Project) {
        p5Project.addEventListener("click", function () {
            console.log("p5.js project clicked!"); // Debugging

            // Clear any existing content in the modal
            p5SketchContainer.innerHTML = "";

            // Get project title & description from the card
            const title = this.querySelector("h3").innerText;
            const description = this.querySelector("p").innerText;
            p5ModalTitle.innerText = title;
            p5ModalDescription.innerText = description;

            // Move the existing p5.js sketch to the modal
            const canvasElement = document.querySelector("#sketch-container canvas");
            if (canvasElement) {
                if (!originalCanvasParent) {
                    originalCanvasParent = canvasElement.parentElement;
                }
                p5SketchContainer.appendChild(canvasElement);
                activeCanvas = canvasElement;
            } else {
                console.log("No p5.js canvas found.");
            }

            p5Modal.style.display = "flex";
        });
    } else {
        console.log("p5.js project not found!");
    }

    closeP5Modal.addEventListener("click", function () {
        p5Modal.style.display = "none";
        if (activeCanvas && originalCanvasParent) {
            originalCanvasParent.appendChild(activeCanvas);
            activeCanvas = null;
        }
    });

    window.addEventListener("click", function (event) {
        if (event.target === p5Modal) {
            p5Modal.style.display = "none";
            if (activeCanvas && originalCanvasParent) {
                originalCanvasParent.appendChild(activeCanvas);
                activeCanvas = null;
            }
        }
    });
});
