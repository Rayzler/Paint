const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

// Distancia entre el borde de la página y los bordes del elemento
const dif = canvas.getBoundingClientRect();

const color = document.querySelector("[type = color]");

const width = document.querySelector("[type = range]");

width.addEventListener("change", () => {
    ctx.lineWidth = width.value;
});

color.addEventListener("change", () => {
    ctx.strokeStyle = color.value;
});

let painting = false;

canvas.addEventListener("mousedown", () => {
    painting = true;
    ctx.beginPath();
});
document.body.addEventListener("mouseup", () => painting = false);
canvas.addEventListener("mouseleave", () => ctx.beginPath());
canvas.addEventListener("mousemove", (evt) => {
    if (painting) {
        let x = evt.clientX - dif.left;
        let y = evt.clientY - dif.top;
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    console.log("mving");
});