export interface PaymentCard {
  id: string;
  brand: 'visa' | 'mastercard' | 'amex';
  last4: string;
  isDefault: boolean;
  createdAt?: Date;
  expiryMonth?: string;
  expiryYear?: string;
  holderName?: string;
}

export interface CardFormData {
  cardNumber: string;
  expirationDate: string;
  cvc: string;
  holderName?: string;
}

export type SortOption = 'brand' | 'last4' | 'default' | 'newest' | 'oldest';

export type FilterOption = {
  value: string;
  label: string;
};

export interface CardStats {
  total: number;
  defaultCard?: PaymentCard;
  brandCounts: Record<string, number>;
  hasCards: boolean;
}

export interface CardAction {
  label: string;
  onClick: (card: PaymentCard) => void;
  icon?: React.ReactNode;
  variant?: 'default' | 'destructive';
  disabled?: boolean;
}

// mock data
export const mockCards: PaymentCard[] = [
  {
    id: '1',
    brand: 'visa',
    last4: '4242',
    isDefault: true,
    createdAt: new Date('2024-01-15'),
    expiryMonth: '12',
    expiryYear: '26',
    holderName: 'John Doe'
  },
  {
    id: '2',
    brand: 'mastercard',
    last4: '6789',
    isDefault: false,
    createdAt: new Date('2024-02-20'),
    expiryMonth: '08',
    expiryYear: '27',
    holderName: 'John Doe'
  },
  {
    id: '3',
    brand: 'amex',
    last4: '1122',
    isDefault: false,
    createdAt: new Date('2024-03-10'),
    expiryMonth: '05',
    expiryYear: '28',
    holderName: 'John Doe'
  }
];

// helper functions
export const getBrandDisplayName = (brand: PaymentCard['brand']): string => {
  const brandNames = {
    visa: 'Visa',
    mastercard: 'Mastercard',
    amex: 'American Express'
  };
  return brandNames[brand] || brand;
};

export const formatCardNumber = (number: string): string => {
  return number.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
};

export const validateCardNumber = (number: string): boolean => {
  const cleaned = number.replace(/\s/g, '');
  return cleaned.length >= 13 && cleaned.length <= 19 && /^\d+$/.test(cleaned);
};

export const detectCardBrand = (number: string): PaymentCard['brand'] => {
  const cleaned = number.replace(/\s/g, '');
  if (cleaned.startsWith('4')) return 'visa';
  if (cleaned.startsWith('5') || cleaned.startsWith('2')) return 'mastercard';
  if (cleaned.startsWith('3')) return 'amex';
  return 'visa'; 
};

export const isCardExpired = (expiryMonth: string, expiryYear: string): boolean => {
  const now = new Date();
  const currentYear = now.getFullYear() % 100; 
  const currentMonth = now.getMonth() + 1;
  
  const expYear = parseInt(expiryYear);
  const expMonth = parseInt(expiryMonth);
  
  if (expYear < currentYear) return true;
  if (expYear === currentYear && expMonth < currentMonth) return true;
  
  return false;
};