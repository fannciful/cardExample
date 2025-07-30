import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../../components/ui/dialog';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { PaymentCard, CardFormData } from '../../lib/types';
import { CreditCard } from 'lucide-react';
import { CardBrandDisplay } from './card-brand-display';

interface AddCardDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddCard: (card: PaymentCard) => void;
}

export const AddCardDialog: React.FC<AddCardDialogProps> = ({
  open,
  onOpenChange,
  onAddCard
}) => {
  const [formData, setFormData] = useState<CardFormData>({
    cardNumber: '',
    expirationDate: '',
    cvc: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const detectCardBrand = (number: string): 'visa' | 'mastercard' | 'amex' => {
    const cleaned = number.replace(/\s/g, '');
    if (cleaned.startsWith('4')) return 'visa';
    if (cleaned.startsWith('5') || cleaned.startsWith('2')) return 'mastercard';
    if (cleaned.startsWith('3')) return 'amex';
    return 'visa'; // default
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpirationDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      cardNumber: formatted
    }));
  };

  const handleExpirationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpirationDate(e.target.value);
    setFormData(prev => ({
      ...prev,
      expirationDate: formatted
    }));
  };

  const validateForm = () => {
    const cleaned = formData.cardNumber.replace(/\s/g, '');
    return (
      cleaned.length >= 13 &&
      formData.expirationDate.length === 5 &&
      formData.cvc.length >= 3
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const cleaned = formData.cardNumber.replace(/\s/g, '');
      const last4 = cleaned.slice(-4);
      const brand = detectCardBrand(cleaned);

      const newCard: PaymentCard = {
        id: Date.now().toString(),
        brand,
        last4,
        isDefault: false
      };

      onAddCard(newCard);
      handleClose();
    } catch (error) {
      console.error('Error adding card:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getBrandPreview = () => {
    const cleaned = formData.cardNumber.replace(/\s/g, '');
    if (cleaned.length >= 1) {
      const brand = detectCardBrand(cleaned);
      return <CardBrandDisplay brand={brand} size="sm" />;
    }
    return null;
  };

  const handleClose = () => {
    setFormData({ cardNumber: '', expirationDate: '', cvc: '' });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            Add New Card
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <div className="relative">
              <Input
                id="cardNumber"
                value={formData.cardNumber}
                onChange={handleCardNumberChange}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                required
                className="pr-16"
              />
              {getBrandPreview() && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  {getBrandPreview()}
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiration">Expiration Date</Label>
              <Input
                id="expiration"
                value={formData.expirationDate}
                onChange={handleExpirationChange}
                placeholder="MM/YY"
                maxLength={5}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input
                id="cvc"
                type="password"
                value={formData.cvc}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  cvc: e.target.value.replace(/[^0-9]/g, '').substring(0, 4)
                }))}
                placeholder="123"
                maxLength={4}
                required
              />
            </div>
          </div>
          
          <div className="flex justify-end gap-2 pt-4">
            <Button 
              type="button" 
              variant="outline"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={!validateForm() || isSubmitting}
            >
              {isSubmitting ? 'Adding...' : 'Add Card'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};