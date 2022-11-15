import { createBackgroundDark, createBackgroundLight } from "./object.js";
import { GameElement, FlashLight, Background } from "./object.js";

// import { Texture } from "./node_modules/pixi.js/dist/pixi.min.js";
// console.log(PIXI.Texture());

// #############################################
// INIT
// #############################################

let app = new PIXI.Application({
    transparent: true,
    background: "#23406B",
    width: window.innerWidth,
    height: window.innerHeight - 10,
    antialias: true,
    resolution: window.devicePixelRatio,
    autoDensity: true,
    // resizeTo: window,
});

let mainContainer = new PIXI.Container();
document.body.appendChild(app.view);
app.stage.addChild(mainContainer);
mainContainer.interactive = true;
mainContainer.buttonMode = true;

PIXI.Assets.add("flowerTop", "./images/flowerTop.png");

const texturesPromise = PIXI.Assets.load(["flowerTop"]);

texturesPromise.then((textures) => {
    console.log("loaded");
    // const flower = PIXI.Sprite.from(textures.flowerTop);
    // flower.anchor.set(0.5);
    // flower.x = app.screen.width * 0.25;
    // flower.y = app.screen.height / 2;
    // app.stage.addChild(flower);
});
// const loader =
// console.log(PIXI.loader);
// app.loader.add("sprite", "./images/sample.png").load(() => {
//     console.log("loaded");
//     // setup();
// });

/* ############################################# */
// INITIAL ASPECT
/* ############################################# */

let naturalWidth = 2920;
let naturalHeight = 1643;
let sceneRatio = naturalWidth / naturalHeight;

/* ############################################# */
// CREATE OBJECTS
/* ############################################# */

/* LIGHT */

let flashlight = new FlashLight();
app.stage.addChild(flashlight);

app.stage.on("pointermove", (e) => flashlight.updatePosition(e));

/* BACKGROUND */
let backgroundDark = createBackgroundDark(mainContainer);
let backgroundLight = createBackgroundLight(mainContainer);
backgroundLight.mask = flashlight;

// let background = new Background("./images/illustration_page_foxes_2_dark.webp");
// console.log(background);
// console.log(Texture);
// mainContainer.addChild(background);

/* OBJECTS */

let journal = new GameElement("lejournal", "./images/journal_dark.png", "./images/journal_light.png", flashlight);
let objects = [journal];

objects.forEach((object) => {
    app.stage.addChild(object);
    object.on("pointerdown", () => object.handleClick());
});

/* ############################################# */
// APP SIZES
/* ############################################# */

function calculateSizes() {
    let currentWindowRatio = window.innerWidth / window.innerHeight;
    const scaleFactor = Math.min(window.innerWidth / naturalWidth, window.innerHeight / naturalHeight);

    if (sceneRatio >= currentWindowRatio) {
        let height = (window.innerWidth * naturalHeight) / naturalWidth;
        let width = window.innerWidth;
        return { width, height, scaleFactor };
    } else {
        let height = window.innerHeight;
        let width = (window.innerHeight * naturalWidth) / naturalHeight;
        return { width, height, scaleFactor };
    }
}
function resizeApp() {
    let newSize = calculateSizes();
    app.renderer.resize(newSize.width, newSize.height);
    mainContainer.scale.set(newSize.scaleFactor);

    flashlight.updateSize(newSize.height);
    journal.updatePositionSize(app, newSize.scaleFactor);
}
window.addEventListener("resize", (e) => {
    resizeApp();
});

const setup = () => {
    resizeApp();
};
setup();
