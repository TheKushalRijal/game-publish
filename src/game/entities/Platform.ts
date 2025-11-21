import Phaser from 'phaser';
import { COLORS } from '../config';

export class Platform {
  private sprite: Phaser.GameObjects.Rectangle;
  public x: number;
  public y: number;

  constructor(scene: Phaser.Scene, x: number, y: number, width: number = 100, height: number = 20) {
    this.x = x;
    this.y = y;
    this.sprite = scene.add.rectangle(x, y, width, height, COLORS.PLATFORM);
    this.sprite.setStrokeStyle(2, 0x2d3748);
    this.sprite.setAlpha(0.3); // Hidden by default
  }

  show(): void {
    this.sprite.setAlpha(1);
  }

  hide(): void {
    this.sprite.setAlpha(0.3);
  }

  destroy(): void {
    this.sprite.destroy();
  }
}
