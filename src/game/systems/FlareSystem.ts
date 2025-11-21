import Phaser from 'phaser';

export default class FlareSystem {
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
  }

  createFlare(x: number, y: number): void {
    const flare = this.scene.add.circle(x, y, 30, 0xffa500, 0.8);

    this.scene.tweens.add({
      targets: flare,
      alpha: 0,
      scale: 2,
      duration: 500,
      ease: 'Power2',
      onComplete: () => {
        flare.destroy();
      },
    });

    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI * 2) / 8;
      const particle = this.scene.add.circle(x, y, 3, 0xffff00);

      this.scene.tweens.add({
        targets: particle,
        x: x + Math.cos(angle) * 50,
        y: y + Math.sin(angle) * 50,
        alpha: 0,
        duration: 600,
        ease: 'Power2',
        onComplete: () => {
          particle.destroy();
        },
      });
    }
  }
}
