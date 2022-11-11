let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let image = new Image();
image.src = "./image/illustration_page_foxes_2_dark.webp";

let rect = {
    position: {
        x: 200,
        y: 200,
    },
    size: 50,
};

image.onload = () => {
    animate();
};
function animate() {
    requestAnimationFrame(animate);
    ctx.restore();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();

    ctx.beginPath();
    ctx.arc(rect.position.x, rect.position.y, 100, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // ctx.fillStyle = "red";
    // ctx.fillRect(rect.position.x, rect.position.y, rect.size, rect.size);
    ctx.clip();
    // ctx.clip();
    // ctx.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
    // ctx.clip();

    window.addEventListener("mousemove", (e) => {
        console.log(e);
        rect.position.x = e.offsetX;
        rect.position.y = e.offsetY;
    });
}
