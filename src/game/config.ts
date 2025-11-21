import Phaser from 'phaser';
import MainScene from './scenes/MainScene';

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  backgroundColor: '#1a1a2e',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: false,
    },
  },
  scene: [MainScene],
};

export const PLATFORM_POSITIONS = [
 { x: 150, y: 150 },
      { x: 650, y: 150 },
      { x: 250, y: 300 },
      { x: 550, y: 300 },
      { x: 150, y: 450 },
      { x: 650, y: 450 }
];

export interface LevelConfig {
  level: number;
  balloonCount: number;
  arrowCount: number;
  sonarRadius: number;
}

export const LEVEL_CONFIGS: LevelConfig[] = [
  { level: 1, balloonCount: 3, arrowCount: 500, sonarRadius: 200 },
  { level: 2, balloonCount: 5, arrowCount: 7, sonarRadius: 180 },
  { level: 3, balloonCount: 7, arrowCount: 9, sonarRadius: 160 },
  { level: 4, balloonCount: 10, arrowCount: 12, sonarRadius: 150 },
  { level: 5, balloonCount: 12, arrowCount: 15, sonarRadius: 140 },
];





export const COLORS = {
  PLAYER: 0xffd700,
  PLATFORM: 0x4a5568,
  BALLOON: 0xff6b9d,
  ARROW: 0xf59e0b,
  SONAR: 0x3b82f6,
  FLARE: 0xfbbf24,
};
