'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Modal from './Modal';

export default function OblivionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Only show modal on home page and if it hasn't been shown in this session
    if (pathname === '/') {
      const hasModalBeenShown = sessionStorage.getItem('oblivionModalShown');
      
      if (!hasModalBeenShown) {
        // Show modal after a short delay for better UX
        const timer = setTimeout(() => {
          setIsOpen(true);
          sessionStorage.setItem('oblivionModalShown', 'true');
        }, 1000);

        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleVisitOblivion = () => {
    window.open('https://oblivionnsut.com/', '_blank');
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="text-center space-y-4 sm:space-y-6">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Logo/Icon */}
        <div className="flex justify-center pt-2 sm:pt-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            <Image 
              src="/oblivionLogo.png" 
              alt="Oblivion Logo" 
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2 sm:space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            🚀 Exciting News!
          </h2>
          <div className="text-base sm:text-lg font-semibold text-purple-600">
            D&apos;Code is organizing
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex justify-center">
            <Image 
              src="/oblivion.svg" 
              alt="OBLIVION" 
              width={200}
              height={48}
              className="h-8 sm:h-12 object-contain"
            />
          </div>
          <div className="text-base sm:text-lg text-gray-700 font-medium">
            The Flagship Tech Summit
          </div>
          <div className="text-sm sm:text-base text-gray-600 px-2 sm:px-0">
            Join us for an incredible tech experience with cutting-edge talks, events, and networking opportunities!
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center pt-3 sm:pt-4">
          <button
            onClick={handleVisitOblivion}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm sm:text-base w-full sm:w-auto"
          >
            Check it out! 🎯
          </button>
        </div>
      </div>
    </Modal>
  );
}
