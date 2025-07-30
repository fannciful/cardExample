import React from 'react';
import { TableCell, TableRow } from '../../components/ui/table';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge'; 
import { PaymentCard } from '../../lib/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import { MoreHorizontal, Trash2, Star } from 'lucide-react';
import { CardBrandDisplay } from './card-brand-display';

interface CardTableRowProps {
  card: PaymentCard;
  onDelete: (id: string) => void;
  onSetDefault: (id: string) => void;
}

export const CardTableRow: React.FC<CardTableRowProps> = ({
  card,
  onDelete,
  onSetDefault
}) => {
  return (
    <TableRow className="hover:bg-muted/50 transition-colors">
      <TableCell>
        <CardBrandDisplay
          brand={card.brand}
          showText={true}
        />
      </TableCell>
      <TableCell className="font-mono text-sm">
        ••••{card.last4}
      </TableCell>
      <TableCell>
        {card.isDefault && (
          <Badge variant="default" className="flex items-center gap-1 w-fit">
            <Star className="h-3 w-3" />
            Default
          </Badge>
        )}
      </TableCell>
      <TableCell>
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
      </TableCell>
    </TableRow>
  );
};