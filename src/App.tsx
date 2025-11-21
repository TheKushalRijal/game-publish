import GameUI from './components/GameUI';
import ControlsPanel from './components/ControlsPanel';
import usePhaser from './hooks/usePhaser';

function App() {
  const { gameState, message } = usePhaser();

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="flex gap-8 items-start">
          <div className="flex-shrink-0">
            <ControlsPanel />
          </div>

          <div className="flex-grow relative">
            <div
              id="game-container"
              className="border-4 border-gray-700 rounded-lg overflow-hidden shadow-2xl"
            />
            <GameUI
              balloons={gameState.balloons}
              arrows={gameState.arrows}
              level={gameState.level}
              message={message}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
