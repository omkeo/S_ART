import { PenTool, Sparkles } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg transform rotate-45"></div>
        <div className="absolute inset-1 bg-white rounded-lg transform rotate-45 flex items-center justify-center">
          <PenTool size={16} className="text-amber-600" />
        </div>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-serif font-bold text-gray-900">Art by</span>
        <span className="text-lg font-serif font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
          Shivani
        </span>
      </div>
      <Sparkles size={14} className="text-amber-500 -ml-1" />
    </div>
  );
}
