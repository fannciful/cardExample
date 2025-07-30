import React from 'react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { PaymentCard } from '../../lib/types';
import { Star, Trash2, MoreHorizontal } from 'lucide-react';
import { CardBrandDisplay } from './card-brand-display';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';

interface MobileCardItemProps {
  card: PaymentCard;
  onDelete: (id: string) => void;
  onSetDefault: (id: string) => void;
}

export const MobileCardItem: React.FC<MobileCardItemProps> = ({
  card,
  onDelete,
  onSetDefault
}) => {
  return (
    <div className="bg-card border-b last:border-b-0 transition-all hover:bg-muted/50">
      <div className="grid grid-cols-4 gap-2 px-4 py-3 items-center">
        <div className="col-span-1">
          <CardBrandDisplay brand={card.brand} size="sm" showText={true} />
        </div>
        
        <div className="col-span-1 text-center">
          <span className="font-mono text-sm">••••{card.last4}</span>
        </div>
        
        <div className="col-span-1 flex justify-center">
          {card.isDefault && (
            <Badge variant="default" className="text-xs flex items-center gap-1">
              <Star className="h-3 w-3" />
              Default
            </Badge>
          )}
        </div>
        
        <div className="col-span-1 flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {!card.isDefault && (
                <DropdownMenuItem 
                  onClick={() => onSetDefault(card.id)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Star className="h-4 w-4" />
                  Set as default
                </DropdownMenuItem>
              )}
              <DropdownMenuItem 
                onClick={() => onDelete(card.id)}
                className="text-red-600 flex items-center gap-2 cursor-pointer"
              >
                <Trash2 className="h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};