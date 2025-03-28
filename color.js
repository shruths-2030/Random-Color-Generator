let randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

let randomColorButton = document.getElementById("click");
let colorBox = document.getElementById("color");
let colorName = document.getElementById("colorName");
let colorWheel = document.getElementById("colorWheel");

randomColorButton.onclick = () => {
    let generatedColor = randomColor();
    colorBox.style.backgroundColor = generatedColor;
    colorName.textContent = `Color: ${generatedColor.toUpperCase()}`;

    colorWheel.classList.add("spin");

    colorWheel.addEventListener("animationend", () => {
        colorWheel.classList.remove("spin");
    }, { once: true });
};
