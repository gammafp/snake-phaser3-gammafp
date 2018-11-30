class Food {
    constructor(scene) {
        this.scene = scene;

        this.food = this.scene.physics.add.group({
            key: 'food',
            setXY: {
                x: 100,
                y: 100
            }
        });
        this.food.getChildren()[0].setOrigin(0);
    }

    crearComida() {
        let x = Phaser.Math.Between(20, this.scene.sys.game.config.width - 10);
        let y = Phaser.Math.Between(0, this.scene.sys.game.config.height - 10);        
        x = Phaser.Math.Snap.To(x, 10);
        y = Phaser.Math.Snap.To(y, 10);

        this.food.getChildren()[0].destroy();
        
        this.food.create(x, y, 'food');
        this.food.getChildren()[0].setOrigin(0);
    }
}

export default Food;