import React, { useState, useEffect, useRef } from 'react';
import { RefreshCw } from 'lucide-react';

interface SimpleCaptchaProps {
  onValidate: (isValid: boolean) => void;
}

const SimpleCaptcha: React.FC<SimpleCaptchaProps> = ({ onValidate }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let text = '';
    for (let i = 0; i < 5; i++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(text);
    setUserInput('');
    onValidate(false);
  };

  useEffect(() => {
    generateCaptcha();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onValidate(userInput === captchaText && captchaText !== '');
  }, [userInput, captchaText, onValidate]);

  useEffect(() => {
    if (canvasRef.current && captchaText) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, 150, 42);
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(0, 0, 150, 42);

        // draw static noise lines to prevent OCR
        for (let i = 0; i < 6; i++) {
          ctx.beginPath();
          ctx.moveTo(Math.random() * 150, Math.random() * 42);
          ctx.lineTo(Math.random() * 150, Math.random() * 42);
          ctx.strokeStyle = '#cbd5e1';
          ctx.stroke();
        }

        ctx.font = 'bold 24px monospace';
        ctx.fillStyle = '#1e293b';
        ctx.textBaseline = 'middle';

        // draw characters with slight random rotation
        for (let i = 0; i < captchaText.length; i++) {
          ctx.save();
          ctx.translate(22 + i * 22, 21);
          ctx.rotate((Math.random() - 0.5) * 0.4);
          ctx.fillText(captchaText[i], -10, 2);
          ctx.restore();
        }
      }
    }
  }, [captchaText]);

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center gap-3">
        <canvas 
          ref={canvasRef} 
          width={150} 
          height={42} 
          className="border border-slate-300 rounded-lg shadow-sm bg-slate-50" 
        />
        <button 
          type="button" 
          onClick={generateCaptcha} 
          className="p-2 text-slate-400 hover:text-blue-600 transition-colors bg-white border border-slate-200 rounded-lg shadow-sm" 
          title="Refresh Captcha"
        >
          <RefreshCw size={18} />
        </button>
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter the code shown above"
        className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none w-full text-sm font-medium tracking-wider"
        required
      />
    </div>
  );
};

export default SimpleCaptcha;
