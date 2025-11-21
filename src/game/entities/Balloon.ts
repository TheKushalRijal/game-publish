import Phaser from 'phaser';

export default class Balloon {
  private sprite: Phaser.GameObjects.Image;
  private scene: Phaser.Scene;
  public destroyed: boolean = false;
  private floatTween?: Phaser.Tweens.Tween;

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string = 'balloon') {
  this.scene = scene;
  this.sprite = scene.add.image(x, y, texture); // use the key
  this.sprite.setScale(0.15);
  this.sprite.setAlpha(0); // hidden initially
  this.startFloating();
}


  private startFloating(): void {
    const amplitude = Phaser.Math.Between(5, 15); // pixels up and down
    const duration = Phaser.Math.Between(2000, 4000); // duration for a full bob
    this.floatTween = this.scene.tweens.add({
      targets: this.sprite,
      y: this.sprite.y - amplitude,
      duration: duration / 2,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
    });
  }

  show(): void {
    if (!this.destroyed) {
      this.sprite.setAlpha(1);
    }
  }

  hide(): void {
    if (!this.destroyed) {
      this.sprite.setAlpha(0);
    }
  }

  getPosition(): { x: number; y: number } {
    return { x: this.sprite.x, y: this.sprite.y };
  }

  destroy(): void {
    this.destroyed = true;
    this.sprite.destroy();
    if (this.floatTween) this.floatTween.stop();
  }

  isDestroyed(): boolean {
    return this.destroyed;
  }
}
