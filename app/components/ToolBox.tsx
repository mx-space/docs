'use client'

import { useState } from 'react';
import { Type } from 'lucide-react';
import { cn } from '@/utils/cn';

const FONT_OPTIONS = [
  { name: '默认', value: '' },
  { name: '无衬线', value: 'font-sans' },
  { name: '衬线', value: 'font-serif' },
  { name: '等宽', value: 'font-mono' }
];

export default function ToolBox() {
  const [showFontSelect, setShowFontSelect] = useState(false);
  const [currentFont, setCurrentFont] = useState('');

  const handleFontChange = (fontValue: string) => {
    setCurrentFont(fontValue);
    document.body.className = fontValue;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      <div 
        className={cn(
          "absolute bottom-16 right-0 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm",
          "rounded-2xl p-3 shadow-lg transition-all duration-300 origin-bottom-right",
          showFontSelect ? "scale-100 opacity-100" : "scale-75 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-3">
          {FONT_OPTIONS.map((font, index) => (
            <button
              key={font.value}
              onClick={() => handleFontChange(font.value)}
              className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                "bg-white dark:bg-zinc-800 shadow hover:shadow-md",
                "hover:scale-105 active:scale-95",
                font.value,
                currentFont === font.value && 'ring-2 ring-blue-500'
              )}
              style={{
                transform: `translateY(${showFontSelect ? 0 : 20}px)`,
                opacity: showFontSelect ? 1 : 0,
                transitionDelay: `${index * 50}ms`
              }}
            >
              <span className="text-lg select-none">T</span>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => setShowFontSelect(!showFontSelect)}
        className={cn(
          "w-12 h-12 rounded-xl shadow-lg",
          "bg-white dark:bg-zinc-800",
          "flex items-center justify-center",
          "hover:shadow-xl transition-all",
          "hover:scale-105 active:scale-95",
          "focus:outline-none focus:ring-2 focus:ring-blue-500",
          showFontSelect && "bg-blue-50 dark:bg-blue-950"
        )}
      >
        <Type className="h-5 w-5" />
      </button>
    </div>
  );
} 