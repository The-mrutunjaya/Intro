import React, { useState, useEffect } from 'react';
import { Search, BookOpen, Database, WifiOff, RefreshCw, AlertTriangle } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isRetrying, setIsRetrying] = useState(false);
  const [showError, setShowError] = useState(false);

  const loadingSteps = [
    { icon: Database, text: "Connecting to servers", color: "text-blue-400" },
    { icon: Search, text: "Loading research database", color: "text-green-400" },
    { icon: BookOpen, text: "Preparing knowledge base", color: "text-purple-400" }
  ];

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowError(false);
      if (isRetrying) {
        setProgress(0);
        setCurrentStep(0);
        setIsRetrying(false);
      }
    };

    const handleOffline = () => {
      setIsOnline(false);
      setTimeout(() => setShowError(true), 2000);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [isRetrying]);

  useEffect(() => {
    if (!isOnline || showError) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 100;
        }
        
        const newProgress = prev + Math.random() * 3 + 1;
        const stepIndex = Math.floor((newProgress / 100) * loadingSteps.length);
        setCurrentStep(Math.min(stepIndex, loadingSteps.length - 1));
        
        return Math.min(newProgress, 100);
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isOnline, showError, loadingSteps.length]);

  const handleRetry = () => {
    setIsRetrying(true);
    setShowError(false);
    setProgress(0);
    setCurrentStep(0);
    
    setTimeout(() => {
      if (navigator.onLine) {
        setIsOnline(true);
        setIsRetrying(false);
      } else {
        setShowError(true);
        setIsRetrying(false);
      }
    }, 1500);
  };

  if (showError && !isOnline) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center overflow-hidden">
        

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-md mx-auto px-8">
          {/* Error Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/20">
              <WifiOff className="w-8 h-8 text-red-400" />
            </div>
            <AlertTriangle className="w-5 h-5 text-yellow-400 mx-auto animate-pulse" />
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-2xl font-thin text-white mb-3">
              Connection Lost
            </h1>
            <p className="text-gray-400 text-sm mb-4">
              Unable to connect to Dr.Researcher servers
            </p>
            <p className="text-gray-600 text-xs">
              Please check your internet connection
            </p>
          </div>

          {/* Network Status */}
          <div className="mb-8 p-3 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="flex items-center justify-center gap-2 text-red-400">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-mono">OFFLINE</span>
            </div>
          </div>

          {/* Retry Button */}
          <button
            onClick={handleRetry}
            disabled={isRetrying}
            className="bg-white text-black px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-100 disabled:bg-gray-600 disabled:text-gray-400 transition-colors flex items-center gap-2 mx-auto"
          >
            <RefreshCw className={`w-4 h-4 ${isRetrying ? 'animate-spin' : ''}`} />
            {isRetrying ? 'Retrying...' : 'Try Again'}
          </button>

          {/* Troubleshooting */}
          <div className="mt-8">
            <details className="text-left">
              <summary className="text-gray-500 text-xs cursor-pointer hover:text-gray-400 transition-colors">
                Troubleshooting
              </summary>
              <div className="mt-2 text-xs text-gray-600 space-y-1 pl-4">
                <p>• Check your internet connection</p>
                <p>• Restart your router</p>
                <p>• Disable VPN if active</p>
                <p>• Clear browser cache</p>
              </div>
            </details>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
            25% { transform: translateY(-20px) rotate(90deg); opacity: 1; }
            50% { transform: translateY(-10px) rotate(180deg); opacity: 0.8; }
            75% { transform: translateY(-30px) rotate(270deg); opacity: 0.9; }
          }
          .animate-float {
            animation: float 10s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Grid */}
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-sm mx-auto px-6">
        {/* Brand */}
        <div className="mb-16">
          <h1 className="text-4xl font-thin text-white tracking-wider mb-2">
            Dr.Researcher
          </h1>
          <div className="flex items-center justify-center gap-3 text-xs text-gray-500">
            <div className="w-8 h-px bg-gray-700"></div>
            <span className="font-mono">VERSION 3.2</span>
            <div className="w-8 h-px bg-gray-700"></div>
          </div>
        </div>

        {/* Current Step */}
        <div className="mb-12 h-12 flex items-center justify-center">
          <div className="flex items-center gap-3 text-white">
            {React.createElement(loadingSteps[currentStep].icon, {
              className: `w-5 h-5 ${loadingSteps[currentStep].color} animate-pulse`
            })}
            <span className="text-sm font-light">
              {loadingSteps[currentStep].text}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-64 h-px bg-gray-800 mx-auto relative overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
            
            {/* Animated Glow */}
          

        {/* Step Indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {loadingSteps.map((_, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index <= currentStep ? 'bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg' : 'bg-gray-700'
                }`}
              >
                {index <= currentStep && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping opacity-75"></div>
                )}
              </div>
              {index < loadingSteps.length - 1 && (
                <div className={`w-4 h-px mx-1 transition-all duration-300 ${
                  index < currentStep ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gray-800'
                }`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Status */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-900/50 rounded-full border border-gray-800">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-mono text-gray-400">
            {isRetrying ? 'RECONNECTING' : 'ONLINE'}
          </span>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          25% { transform: translateY(-20px) rotate(90deg); opacity: 1; }
          50% { transform: translateY(-10px) rotate(180deg); opacity: 0.8; }
          75% { transform: translateY(-30px) rotate(270deg); opacity: 0.9; }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
