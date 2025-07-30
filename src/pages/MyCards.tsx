import React, { useState } from 'react';
import { CreditCard, Plus } from 'lucide-react';

import { PageHeader } from '../components/layout/page-header';
import { LoadingSpinner } from '../common/loading-spinner';
import { EmptyState } from '../common/empty-state';

import { Button } from '../components/ui/button';

import { CardFilter } from '../features/cards/card-filter';
import { CardSort } from '../features/cards/card-sort';
import { CardTable } from '../features/cards/card-table';
import { MobileCardItem } from '../features/cards/mobile-card-item';
import { AddCardDialog } from '../features/cards/add-card-dialog';

import { useCards } from '../hooks/use-cards';

export const MyCards: React.FC = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const {
    cards,
    loading,
    filter,
    sortBy,
    setFilter,
    setSortBy,
    handleDeleteCard,
    handleSetDefault,
    handleAddCard,
  } = useCards();

  const handleAddNewCard = () => {
    setIsAddDialogOpen(true);
  };

  const onAddCard = (newCard: any) => {
    handleAddCard(newCard);
    setIsAddDialogOpen(false);
  };

  if (loading) {
    return <LoadingSpinner text="Loading your cards..." />;
  }

  return (
    <div className="min-h-screen bg-background transition-colors">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <PageHeader
          title="My Cards"
          description="Manage your payment cards and set default preferences"
          icon={<CreditCard className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />}
        />
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full lg:w-auto">
            <CardFilter 
              value={filter} 
              onChange={setFilter}
              placeholder="Search by brand or last 4 digits..."
            />
            <CardSort value={sortBy} onChange={setSortBy} />
          </div>
          
          <Button 
            onClick={handleAddNewCard}
            className="flex items-center gap-2 w-full sm:w-auto"
          >
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Create New</span>
            <span className="sm:hidden">Add Card</span>
          </Button>
        </div>

        {cards.length === 0 ? (
          <EmptyState
            icon={<CreditCard className="h-12 w-12 text-muted-foreground" />}
            title="No cards found"
            description={
              filter 
                ? 'No cards match your search criteria. Try adjusting your search terms.' 
                : 'You haven\'t added any payment cards yet. Add your first card to get started.'
            }
            action={
              !filter ? {
                label: 'Add your first card',
                onClick: handleAddNewCard,
                variant: 'default'
              } : undefined
            }
          />
        ) : (
          <>
            <CardTable
              cards={cards}
              onDelete={handleDeleteCard}
              onSetDefault={handleSetDefault}
            />

            <div className="md:hidden rounded-md border bg-card overflow-hidden">
              <div className="grid grid-cols-4 gap-2 px-4 py-3 border-b bg-muted/50">
                <div className="col-span-1 font-semibold text-sm text-foreground">Brand</div>
                <div className="col-span-1 font-semibold text-sm text-foreground text-center">Last 4</div>
                <div className="col-span-1 font-semibold text-sm text-foreground text-center">Default</div>
                <div className="col-span-1 font-semibold text-sm text-foreground text-right">Actions</div>
              </div>
              
              {cards.map((card) => (
                <MobileCardItem
                  key={card.id}
                  card={card}
                  onDelete={handleDeleteCard}
                  onSetDefault={handleSetDefault}
                />
              ))}
            </div>
          </>
        )}

        <AddCardDialog
          open={isAddDialogOpen}
          onOpenChange={setIsAddDialogOpen}
          onAddCard={onAddCard}
        />
      </div>
    </div>
  );
};