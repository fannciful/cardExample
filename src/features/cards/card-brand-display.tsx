import React from 'react';

interface CardBrandDisplayProps {
  brand: 'visa' | 'mastercard' | 'amex';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const CardBrandDisplay: React.FC<CardBrandDisplayProps> = ({
  brand,
  size = 'md',
  showText = false
}) => {
  const sizeClasses = {
    sm: 'px-1.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm', 
    lg: 'text-base'
  };

  const getBrandContent = () => {
    switch (brand) {
      case 'visa':
        return {
          badge: (
            <div className={`bg-blue-600 text-white rounded font-bold brand-badge ${sizeClasses[size]}`}>
              VISA
            </div>
          ),
          text: 'Visa'
        };
      case 'mastercard':
        return {
          badge: (
            <div className={`bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded font-bold brand-badge ${sizeClasses[size]}`}>
              MC
            </div>
          ),
          text: 'Mastercard'
        };
      case 'amex':
        return {
          badge: (
            <div className={`bg-blue-500 text-white rounded font-bold brand-badge ${sizeClasses[size]}`}>
              AMEX
            </div>
          ),
          text: 'Amex'
        };
      default:
        return {
          badge: <div className={`bg-gray-500 text-white rounded font-bold brand-badge ${sizeClasses[size]}`}>CARD</div>,
          text: 'Unknown Card'
        };
    }
  };

  const { badge, text } = getBrandContent();

  return (
    <div className="flex items-center gap-1.5">
      {badge}
      {showText && <span className={`${textSizeClasses[size]}`}>{text}</span>}
    </div>
  );
};