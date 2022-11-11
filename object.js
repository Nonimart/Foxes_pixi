// CONTAINER

// SQUARE TEST
export const createLight = (container) => {
    let light = new PIXI.Graphics();
    light.beginFill(0xde3249);
    light.drawCircle(0, 0, 50);
    // square.drawRect(0, 0, window.innerWidth, window.innerHeight);
    light.endFill();
    container.addChild(light);
    return light;
};
// BACKGROUND
export const createBackgroundDark = (container) => {
    const backgroundDark = PIXI.Sprite.from("./images/illustration_page_foxes_2_dark.webp");
    backgroundDark.x = 0;
    backgroundDark.y = 0;
    container.addChild(backgroundDark);
    return backgroundDark;
};

export const createBackgroundLight = (container) => {
    const backgroundLight = PIXI.Sprite.from("./images/illustration_page_foxes_2_light.webp");
    backgroundLight.x = 0;
    backgroundLight.y = 0;
    container.addChild(backgroundLight);
    return backgroundLight;
};

// FLASHLIGH

// // JOURNAL
// export const journalLight = PIXI.Sprite.from("./images/journal_light.png");
// journalLight.mask = flashlight;
// const journalDark = PIXI.Sprite.from("./images/journal_dark.png");

// const journal = new PIXI.Container();
// journal.x = 200;
// journal.y = 200;
// journal.width = 10;
// journal.height = 100;
// journal.addChild(journalDark);
// journal.addChild(journalLight);

// journalLight.interactive = true;
// journalLight.buttonMode = true;
// journalLight.on("pointerdown", onClick);
// container.addChild(journal);
