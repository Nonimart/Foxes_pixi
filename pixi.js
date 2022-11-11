import { createLight, createBackgroundDark, createBackgroundLight } from "./object.js";

// ###############
// INIT
// ###############

let app = new PIXI.Application({
    transparent: true,
    background: "#23406B",
    width: window.innerWidth,
    height: window.innerHeight - 10,
    antialias: true,
    // resizeTo: window,
});
app.stage.interactive = true;

let container = new PIXI.Container();
container.x = 0;
container.y = 0;
container.width = app.screen.width;
container.height = app.screen.height;

let sceneInitDimensions = {
    width: 2920,
    height: 1643,
};
let sceneRatio = sceneInitDimensions.width / sceneInitDimensions.height;

document.body.appendChild(app.view);
app.stage.addChild(container);

let backgroundDark = createBackgroundDark(container);
let backgroundLight = createBackgroundLight(container);
let light = createLight(container);

// const loader = new PIXI.Loader();
// loader.add("backgroundDark", "./images/illustration_page_foxes_2_dark.webp");

// Container

const moveFlashlight = (e) => {
    // console.log(container);
    let pos = e.data.global;

    light.x = pos.x;
    light.y = pos.y;
};

// app.stage.addChild(flashlight);

backgroundLight.mask = light;
app.stage.on("pointermove", moveFlashlight);

// app.ticker.add((delta) => animate(delta));

// function animate(delta) {
//     // flashlight.y += 1;
//     console.log(app.view.height);
// }

// ###############
// INTERACTIVE
// ##############
function onClick() {
    console.log("clicked");
}

// ###############
// APP SIZES
// ###############
function resizeApp() {
    let currentWindowRatio = window.innerWidth / window.innerHeight;
    if (sceneRatio >= currentWindowRatio) {
        let newHeight = (window.innerWidth * sceneInitDimensions.height) / sceneInitDimensions.width;
        let newWidth = window.innerWidth;
        app.renderer.resize(newWidth, newHeight);

        updateElements(newWidth, newHeight);
    } else {
        let newHeight = window.innerHeight;
        let newWidth = (window.innerHeight * sceneInitDimensions.width) / sceneInitDimensions.height;
        app.renderer.resize(newWidth, newHeight);

        updateElements(newWidth, newHeight);
    }

    // container.width = app.renderer.width;
    // container.height = app.renderer.height;
}
function updateElements(newWidth, newHeight) {
    // console.log(app.renderer);
    backgroundDark.width = newWidth;
    backgroundDark.height = newHeight;
    backgroundLight.width = newWidth;
    backgroundLight.height = newHeight;
    light.width = newHeight / 4;
    light.height = newHeight / 4;
}

window.addEventListener("resize", (e) => resizeApp(e));

const init = () => {
    resizeApp();
    // updateElements();
};
init();
