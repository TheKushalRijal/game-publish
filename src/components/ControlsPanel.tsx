import { Mouse, Keyboard, Radio } from 'lucide-react';

export default function ControlsPanel() {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Controls</h2>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Keyboard className="text-blue-400 flex-shrink-0 mt-1" size={24} />
          <div>
            <p className="font-semibold">Number Keys (1-6)</p>
            <p className="text-gray-300 text-sm">Teleport to platform</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Keyboard className="text-blue-400 flex-shrink-0 mt-1" size={24} />
          <div>
            <p className="font-semibold">Arrow Keys (↑↓)</p>
            <p className="text-gray-300 text-sm">Move between platforms</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Radio className="text-green-400 flex-shrink-0 mt-1" size={24} />
          <div>
            <p className="font-semibold">Spacebar</p>
            <p className="text-gray-300 text-sm">Activate sonar to reveal balloons</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mouse className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
          <div>
            <p className="font-semibold">Left Click</p>
            <p className="text-gray-300 text-sm">Shoot arrow at cursor</p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-600">
        <p className="text-sm text-gray-300 text-center">
          Pop all balloons to advance. Run out of arrows and it's game over!
        </p>
      </div>
    </div>
  );
}
