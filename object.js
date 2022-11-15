// import { TilingSprite } from "pixi.js";

export class GameElement extends PIXI.Container {
    constructor(name, darkTextureUrl, lightTextureUrl, light) {
        super();
        this.name = name;

        this.darkTexture = PIXI.Sprite.from(darkTextureUrl);
        this.darkTexture.anchor.set(0.5);

        this.lightTexture = PIXI.Sprite.from(lightTextureUrl);
        this.lightTexture.anchor.set(0.5);
        this.lightTexture.mask = light;

        this.addChild(this.darkTexture);
        this.addChild(this.lightTexture);
        this.buttonMode = true;
        this.interactive = true;

        this.handleClick = () => {
            console.log("clicked from class");
        };
        this.updatePositionSize = (app, scaleFactor) => {
            this.scale.set(scaleFactor);
            this.x = app.screen.width / 2.7;
            this.y = app.screen.height / 1.22;
        };
    }
}

export class FlashLight extends PIXI.Graphics {
    constructor() {
        super();
        this.beginFill(0xde3249);
        this.drawCircle(0, 0, 50);
        this.endFill();

        this.updatePosition = (e) => {
            let pos = e.data.global;
            gsap.to(this, 1.2, { pixi: { x: pos.x, y: pos.y } });
        };
        this.updateSize = (currentCanvasHeight) => {
            this.width = this.height = currentCanvasHeight / 4;
        };
    }
}

// BACKGROUND
export class Background extends PIXI.Sprite {
    constructor(backgroundUrl) {
        // super(PIXI.Texture.fromImage(backgroundUrl));
        super(backgroundUrl);

        this.updateSize = (currentCanvasSize) => {
            console.log("scaled");
        };
    }
}

export const createBackgroundDark = (mainContainer) => {
    const backgroundDark = PIXI.Sprite.from("./images/illustration_page_foxes_2_dark.webp");
    backgroundDark.x = 0;
    backgroundDark.y = 0;
    mainContainer.addChild(backgroundDark);
    return backgroundDark;
};

export const createBackgroundLight = (mainContainer) => {
    const backgroundLight = PIXI.Sprite.from("./images/illustration_page_foxes_2_light.webp");
    backgroundLight.x = 0;
    backgroundLight.y = 0;
    mainContainer.addChild(backgroundLight);
    return backgroundLight;
};
