import { createSquare, createJournal, createLight, createBackgroundDark, createBackgroundLight } from "./object.js";
import { GameElement } from "./object.js";

// import { gsap } from "gsap";
// import { PixiPlugin } from "gsap/PixiPlugin";

// ###############
// INIT
// ###############

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

// app.loader.add("sprite", "./images/sample.png").load(() => {
//     console.log("loaded");
//     // setup();
// });

// ###############
// INITIAL ASPECT
// ###############

let naturalWidth = 2920;
let naturalHeight = 1643;
let sceneRatio = naturalWidth / naturalHeight;

// ###############
// INIT ELEMENTS
// ###############

let lejournal = new GameElement(100, 100, "lejournal");
console.log(lejournal.handleClick());
app.stage.addChild(lejournal.handleClick());

console.log(lejournal.container.scale);

let backgroundDark = createBackgroundDark(mainContainer);
let backgroundLight = createBackgroundLight(mainContainer);
let light = createLight(mainContainer, app);
light.width = 500;
light.height = 500;
// let square = createSquare(mainContainer, app);
backgroundLight.mask = light;

// const blurFilter1 = new PIXI.filters.BlurFilter(0, 1);
// backgroundDark.filters = [blurFilter1];
// backgroundDark.blur = 800;
// let journal = createJournal(mainContainer, light);
const journalLight = PIXI.Sprite.from("./images/journal_light.png");
journalLight.anchor.set(0.5);
journalLight.mask = light;
const journalDark = PIXI.Sprite.from("./images/journal_dark.png");
journalDark.anchor.set(0.5);
const journal = new PIXI.Container();

// journal.x = 100;
// journal.y = 200;
// journal.width = 10;
// journal.height = 100;
journal.addChild(journalDark);
journal.addChild(journalLight);
console.log(journal);
journalLight.interactive = true;
journalLight.buttonMode = true;
journal.on("pointerdown", () => {
    console.log("yo");
});

journal.on("pointerover", () => {
    // journal.scale.set();
    journal.initialSize = journal.scale._x;
    gsap.to(journal, { pixi: { duration: 0.2, scale: journal.scale._x * 1.05 } });
});
journal.on("pointerout", () => {
    // journal.scale.set(journal.scale._x / 1.1);
    // TweenMax.to(journal, 0.5, { pixi: { scale: journal.initialSize } });
    gsap.to(journal, { pixi: { duration: 0.5, scale: journal.initialSize } });
});
app.stage.addChild(journal);
let sprite = PIXI.Sprite.from("./images/sample.png");
mainContainer.addChild(sprite);
sprite.interactive = true;
sprite.buttonMode = true;
sprite.on("pointerdown", () => {
    console.log("yo");
});
// ###############
// HANDLE MOUSEMOVE
// ##############
function moveFlashlight(e) {
    let pos = e.data.global;
    TweenMax.to(light, 1.2, { pixi: { x: pos.x, y: pos.y } });

    // light.x = pos.x;
    // light.y = pos.y;
}

app.stage.on("pointermove", moveFlashlight);
app.stage.on("pointermove", moveFlashlight);

// const loader = new PIXI.Loader();
// loader.add("backgroundDark", "./images/illustration_page_foxes_2_dark.webp");

// ###############
// TICKER
// ##############
// app.ticker.add((delta) => animate(delta));

// function animate(delta) {
//     // flashlight.y += 1;
//     // console.log(app.view.height);
// }

// ###############
// INTERACTIVE
// ##############

function handleClick() {
    console.log("yo");
}

// ###############
// APP SIZES
// ###############

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
    light.width = light.height = newSize.height / 4;
    lejournal.container.scale.set(newSize.scaleFactor);

    journal.scale.set(newSize.scaleFactor);
    journal.x = app.screen.width / 2.7;
    journal.y = app.screen.height / 1.22;
}
window.addEventListener("resize", (e) => {
    resizeApp();
});

const setup = () => {
    resizeApp();
};
setup();
