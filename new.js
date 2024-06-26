let modeBtn = document.querySelector('#mode');
let currMode = "light";

modeBtn.addEventListener('click', () => {
    if (currMode === "light") {
        document.body.style.backgroundColor = "#333";
        currMode = "dark";
    } else {
        document.body.style.backgroundColor = "#fff";
        currMode = "light";
    }
});