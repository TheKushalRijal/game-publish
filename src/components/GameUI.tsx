import { Target, Zap, Trophy } from 'lucide-react';

interface GameUIProps {
  balloons: number;
  arrows: number;
  level: number;
  message: string;
}

export default function GameUI({ balloons, arrows, level, message }: GameUIProps) {
  return (
    <div className="absolute top-0 left-0 right-0 p-4 pointer-events-none">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-4 drop-shadow-lg">
          Balloon Night Castle
        </h1>

        <div className="flex justify-center gap-8 mb-4">
          <div className="bg-black bg-opacity-50 px-6 py-3 rounded-lg flex items-center gap-2">
            <Target className="text-red-400" size={24} />
            <span className="text-white text-xl font-semibold">{balloons}</span>
          </div>

          <div className="bg-black bg-opacity-50 px-6 py-3 rounded-lg flex items-center gap-2">
            <Zap className="text-yellow-400" size={24} />
            <span className="text-white text-xl font-semibold">{arrows}</span>
          </div>

          <div className="bg-black bg-opacity-50 px-6 py-3 rounded-lg flex items-center gap-2">
            <Trophy className="text-blue-400" size={24} />
            <span className="text-white text-xl font-semibold">Level {level}</span>
          </div>
        </div>

        {message && (
          <div className="text-center">
            <p className="text-2xl font-bold text-white bg-black bg-opacity-70 px-8 py-3 rounded-lg inline-block">
              {message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
