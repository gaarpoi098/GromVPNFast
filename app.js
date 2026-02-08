const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const flakes = Array.from({length: 120}).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3,
    s: Math.random() * 2 + 1
}));

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "white";

    flakes.forEach(f => {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI*2);
        ctx.fill();

        f.y += f.s;
        if(f.y > canvas.height) f.y = 0;
    });

    requestAnimationFrame(draw);
}

draw();
