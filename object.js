export class GameElement {
    constructor(x, y, name) {
        this.container = new PIXI.Container();
        this.lightTexture = PIXI.Sprite.from("./images/journal_light.png");
        this.darkTexture = PIXI.Sprite.from("./images/journal_dark.png");
        this.container.addChild(this.lightTexture);
        this.container.addChild(this.darkTexture);
        this.x = x;
        this.y = y;
        this.name = name;
        this.handleClick = () => {
            return this.container;
        };
    }
}

// CONTAINER
export const createSquare = (mainContainer, app) => {
    let square = new PIXI.Graphics();
    square.beginFill(0xde3249);
    square.drawRect(0, 50, app.screen.width - 10, 50);
    square.endFill();
    app.stage.addChild(square);
    // var rect = new PIXI.Rectangle(100, 150, 50, 50);
    // stage.addChild(rect);
    return square;
};

// FLASHLIGH
export const createLight = (mainContainer, app) => {
    let light = new PIXI.Graphics();
    light.beginFill(0xde3249);
    light.drawCircle(0, 0, 50);
    light.endFill();
    app.stage.addChild(light);
    return light;
};
// BACKGROUND
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

// // JOURNAL
export const createJournal = (mainContainer, light) => {
    const journalLight = PIXI.Sprite.from("./images/journal_light.png");
    journalLight.mask = light;
    const journalDark = PIXI.Sprite.from("./images/journal_dark.png");

    const journal = new PIXI.Container();
    journal.x = 700;
    journal.y = 200;
    journal.width = 10;
    journal.height = 100;
    journal.addChild(journalDark);
    journal.addChild(journalLight);

    // journalLight.interactive = true;
    // journalLight.buttonMode = true;

    mainContainer.addChild(journal);
    return journal;
};
