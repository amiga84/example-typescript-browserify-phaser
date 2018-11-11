export class MainScene extends Phaser.Scene {
    private phaserSprite: Phaser.GameObjects.Sprite;

    constructor() {
        super({
            key: "MainScene",
        });
    }

    private preload(): void {
        this.load.image("logo", "./assets/logo.png");
    }

    private create(): void {
        this.phaserSprite = this.add.sprite(512, 384, "logo");
    }
}
