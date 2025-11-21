import { LevelConfig, LEVEL_CONFIGS } from '../config';

export default class LevelManager {
  private currentLevel: number = 0;
  private balloonsRemaining: number = 0;
  private arrowsLeft: number = 0;

  getCurrentLevel(): number {
    return this.currentLevel;
  }

  getLevelConfig(): LevelConfig {
    if (this.currentLevel < LEVEL_CONFIGS.length) {
      return LEVEL_CONFIGS[this.currentLevel];
    }
    const lastConfig = LEVEL_CONFIGS[LEVEL_CONFIGS.length - 1];
    return {
      level: this.currentLevel + 1,
      balloonCount: lastConfig.balloonCount + (this.currentLevel - LEVEL_CONFIGS.length + 1) * 2,
      arrowCount: lastConfig.arrowCount + (this.currentLevel - LEVEL_CONFIGS.length + 1) * 2,
      sonarRadius: Math.max(100, lastConfig.sonarRadius - 5),
    };
  }

  startLevel(): void {
    const config = this.getLevelConfig();
    this.balloonsRemaining = config.balloonCount;
    this.arrowsLeft = config.arrowCount;
  }

  balloonPopped(): void {
    this.balloonsRemaining = Math.max(0, this.balloonsRemaining - 1);
  }

  arrowShot(): void {
    this.arrowsLeft = Math.max(0, this.arrowsLeft - 1);
  }

  getBalloonsRemaining(): number {
    return this.balloonsRemaining;
  }

  getArrowsLeft(): number {
    return this.arrowsLeft;
  }

  isLevelComplete(): boolean {
    return this.balloonsRemaining === 0;
  }

  isLevelFailed(): boolean {
    return this.arrowsLeft === 0 && this.balloonsRemaining > 0;
  }

  nextLevel(): void {
    this.currentLevel++;
    this.startLevel();
  }

  resetLevel(): void {
    this.startLevel();
  }
}
