import { useEffect, useRef, useState } from 'react';
import Phaser from 'phaser';
import { gameConfig } from '../game/config';
import MainScene from '../game/scenes/MainScene';

interface GameState {
  balloons: number;
  arrows: number;
  level: number;
}

export default function usePhaser() {
  const gameRef = useRef<Phaser.Game | null>(null);
  const [gameState, setGameState] = useState<GameState>({
    balloons: 0,
    arrows: 0,
    level: 1,
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!gameRef.current) {
      gameRef.current = new Phaser.Game(gameConfig);

      gameRef.current.events.on('ready', () => {
        const scene = gameRef.current?.scene.getScene('MainScene') as MainScene;
        if (scene) {
          scene.setUIUpdateCallback((data) => {
            setGameState(data);
          });

          scene.setLevelEndCallback((success) => {
            if (success) {
              setMessage('Level Complete!');
              setTimeout(() => setMessage(''), 2000);
            } else {
              setMessage('Out of Arrows - Try Again!');
              setTimeout(() => setMessage(''), 2000);
            }
          });
        }
      });
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return { gameState, message };
}
