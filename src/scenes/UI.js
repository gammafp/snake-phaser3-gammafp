
class UI extends Phaser.Scene {
    constructor() {
        super({key: 'UI'});
    }
    
    create() {
        this.add.image(0, 0, 'tablero').setOrigin(0);
        this.add.dynamicBitmapText(10, 7, 'pixel', 'POINTS: ', 8, 1);
        this.points = this.add.dynamicBitmapText(this.sys.game.config.width - 60, 7, 'pixel', Phaser.Utils.String.Pad('0', 6, '0', 1), 8, 1);
    }

    addPoint() {
        this.points.setText(
            Phaser.Utils.String.Pad(parseInt(this.points.text)+10, 6, '0', 1));
    }

}

export default UI;
