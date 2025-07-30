import { useState, useMemo, useCallback } from 'react';
import { PaymentCard, mockCards } from '../lib/types';

type SortOption = 'brand' | 'last4' | 'default';

interface CardStats {
  total: number;
  defaultCard: PaymentCard | null;
  brandCounts: Record<string, number>;
  hasCards: boolean;
}

export const useCards = () => {
  const [cards, setCards] = useState<PaymentCard[]>(mockCards);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('brand');

  const filteredAndSortedCards = useMemo(() => {
    let result = cards;
    if (filter) {
      result = result.filter(card => 
        card.brand.toLowerCase().includes(filter.toLowerCase()) ||
        card.last4.includes(filter)
      );
    }
    
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case 'brand':
          return a.brand.localeCompare(b.brand);
        case 'last4':
          return a.last4.localeCompare(b.last4);
        case 'default':
          if (a.isDefault && !b.isDefault) return -1;
          if (!a.isDefault && b.isDefault) return 1;
          return a.brand.localeCompare(b.brand); 
        default:
          return 0;
      }
    });
    
    return result;
  }, [cards, filter, sortBy]);

  const handleDeleteCard = useCallback((id: string) => {
    setCards(prev => {
      const updatedCards = prev.filter(card => card.id !== id);
      
      const hasDefault = updatedCards.some(card => card.isDefault);
      if (!hasDefault && updatedCards.length > 0) {
        const firstCard = updatedCards[0];
        if (firstCard) {
          firstCard.isDefault = true;
        }
      }
      
      return updatedCards;
    });
  }, []);

  const handleSetDefault = useCallback((id: string) => {
    setCards(prev => prev.map(card => ({
      ...card,
      isDefault: card.id === id
    })));
  }, []);

  const handleAddCard = useCallback((newCard: PaymentCard) => {
    setCards(prev => {
      if (prev.length === 0) {
        return [{ ...newCard, isDefault: true }];
      }
      return [...prev, newCard];
    });
  }, []);

  const loadCards = useCallback(async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCards(mockCards);
    } catch (error) {
      console.error('Failed to load cards:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearFilter = useCallback(() => {
    setFilter('');
  }, []);

  const resetSort = useCallback(() => {
    setSortBy('brand');
  }, []);

  const cardStats = useMemo((): CardStats => {
    const total = cards.length;
    const foundDefaultCard = cards.find(card => card.isDefault);
    const defaultCard: PaymentCard | null = foundDefaultCard ?? null;
    
    const brandCounts = cards.reduce((acc, card) => {
      acc[card.brand] = (acc[card.brand] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      total,
      defaultCard,
      brandCounts,
      hasCards: total > 0
    };
  }, [cards]);

  return {
    cards: filteredAndSortedCards,
    allCards: cards,
    loading,
    filter,
    sortBy,
    cardStats,

    setFilter,
    setSortBy,
    handleDeleteCard,
    handleSetDefault,
    handleAddCard,
    loadCards,
    clearFilter,
    resetSort,
  };
};