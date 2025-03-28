const hexvalues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
let randomColor = () => {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(hexvalues.length * Math.random());
        let randomValue = hexvalues[randomIndex];
        hex += randomValue;
    }
    return hex;
};
let randomColorButton = document.getElementById("click");
let colorBox = document.getElementById("color");
let colorName = document.getElementById("colorName");
let colorWheel = document.getElementById("colorWheel");
randomColorButton.onclick = () => {
    let generatedColor = randomColor();
    colorBox.style.backgroundColor = generatedColor; 
    colorName.textContent = `Color: ${generatedColor}`; 
    colorWheel.classList.add("spin");
    setTimeout(() => {
        colorWheel.classList.remove("spin");
    }, 500);
};