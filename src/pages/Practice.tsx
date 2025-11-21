import React, { useState, useEffect, useRef } from 'react';
import { getRandomCharacters, getWubiCode } from '../data/wubiDict';

export default function Practice() {
  const [queue, setQueue] = useState<string[]>(() => getRandomCharacters(20));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState('');
  
  const [completed, setCompleted] = useState<number>(() => {
    const saved = localStorage.getItem('wubi_stats');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.completed || 0;
      } catch {
        return 0;
      }
    }
    return 0;
  });

  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Save stats
  useEffect(() => {
    localStorage.setItem('wubi_stats', JSON.stringify({ completed }));
  }, [completed]);

  // Initialize focus
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const currentChar = queue[currentIndex];
  const targetCode = currentChar ? getWubiCode(currentChar) : '';

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toLowerCase();
    setInput(val);

    if (!currentChar || !targetCode) return;

    // Check for match
    if (val === targetCode) {
      // Correct
      setCompleted(c => c + 1);
      setInput('');
      setShowHint(false);
      
      // Move next
      if (currentIndex < queue.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        // Refill queue
        setQueue(getRandomCharacters(20));
        setCurrentIndex(0);
      }
    } else {
      // Check if it's a valid prefix
      if (!targetCode.startsWith(val)) {
         // It's a mistake (but we don't increment mistake on every keystroke if they are just backspacing? 
         // Simple approach: if len increases and not prefix -> mistake)
         // For now, let's just count it if they type something blatantly wrong? 
         // Or just rely on user realizing it's red.
         // Let's simplisticly increment mistakes only if we want strict tracking.
         // I'll just leave visual feedback for now.
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
       // Show hint on Enter
       setShowHint(true);
    }
  };

  const isError = input && targetCode && !targetCode.startsWith(input);

  return (
    <div className="max-w-2xl mx-auto text-center space-y-12 py-12">
        <div className="flex justify-between items-center text-gray-500 font-medium">
            <div>Completed: <span className="text-blue-600 font-bold">{completed}</span></div>
            {/* <div>Accuracy: 100%</div> */}
        </div>

        <div className="bg-white p-12 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300">
            <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">Type the code for</div>
            <div className="text-9xl font-serif font-bold text-gray-800 mb-8">
                {currentChar}
            </div>
            
            <div className="relative max-w-xs mx-auto">
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    className={`w-full text-center text-4xl border-b-2 focus:outline-none py-2 bg-transparent transition-colors font-mono
                        ${isError ? 'border-red-500 text-red-500' : 'border-gray-300 focus:border-blue-600 text-gray-800'}
                    `}
                    placeholder=""
                    autoFocus
                />
            </div>
             
             <div className="mt-8 h-8">
                {(showHint || isError) && (
                    <div className="text-gray-500 animate-pulse">
                        Code: <span className="font-bold font-mono text-lg">{targetCode}</span>
                    </div>
                )}
                {!showHint && !isError && (
                    <div className="text-xs text-gray-300">Press Enter for Hint</div>
                )}
             </div>
        </div>
    </div>
  );
}
