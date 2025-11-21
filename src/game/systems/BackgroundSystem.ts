import Phaser from 'phaser';

export default class BackgroundSystem {
  private scene: Phaser.Scene;
  private currentBackground?: Phaser.GameObjects.Image;
  private readonly backgrounds: string[] = [
    'https://i.postimg.cc/zD7MGrLs/6.jpg',
    'https://i.postimg.cc/MZ54pSch/11.jpg',
    'https://i.postimg.cc/GhpfB5YM/12.jpg',
    'https://i.postimg.cc/dt0f7xdN/13.jpg',
    'https://i.postimg.cc/fTbP3rX2/14.jpg',
    'https://i.postimg.cc/Prq7LRZF/15.jpg',
    'https://i.postimg.cc/c4JzKbYz/16.jpg',
    'https://i.postimg.cc/zD7MGrLs/6.jpg'
  ];

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
  }

  preload() {
    this.backgrounds.forEach((url, index) => {
      this.scene.load.image(`background_${index}`, `${url}?auto=format&fit=crop&w=800&h=600`);
    });
  }

  setBackground(level: number) {
    if (this.currentBackground) {
      this.currentBackground.destroy();
    }

    const backgroundIndex = (level - 1) % this.backgrounds.length;

    this.currentBackground = this.scene.add.image(400, 300, `background_${backgroundIndex}`)
      .setDisplaySize(800, 600)
      .setDepth(-1)
      .setAlpha(0.1);
  }

  revealBackground(x: number, y: number, radius: number, alpha: number = 1) {
    if (!this.currentBackground) return;

    const waveWidth = 40;
    const innerRadius = radius - waveWidth / 2;
    const outerRadius = radius + waveWidth / 2;

    const mask = this.scene.add.graphics();
    mask.clear();

    mask.beginPath();
    mask.arc(x, y, outerRadius, 0, Math.PI * 2);
    mask.arc(x, y, innerRadius, 0, Math.PI * 2, true);
    mask.closePath();

    this.currentBackground.setAlpha(alpha);
    this.currentBackground.setMask(mask.createGeometryMask());

    this.scene.time.delayedCall(1000, () => {
      this.scene.tweens.add({
        targets: this.currentBackground,
        alpha: 0.1,
        duration: 500,
        onComplete: () => {
          mask.destroy();
          this.currentBackground?.clearMask();
        }
      });
    });
  }

  addCustomBackground(url: string) {
    const newIndex = this.backgrounds.length;
    this.backgrounds.push(url);

    this.scene.load.image(`background_${newIndex}`, `${url}?auto=format&fit=crop&w=800&h=600`);
    this.scene.load.once('complete', () => {
      console.log('Custom background loaded successfully');
    });
    this.scene.load.start();
  }
}
