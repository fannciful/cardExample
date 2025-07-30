import React from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import { PaymentCard } from '../../lib/types';
import { CardTableRow } from './card-table-row';

interface CardTableProps {
  cards: PaymentCard[];
  onDelete: (id: string) => void;
  onSetDefault: (id: string) => void;
}

export const CardTable: React.FC<CardTableProps> = ({
  cards,
  onDelete,
  onSetDefault
}) => {
  return (
    <div className="hidden md:block rounded-md border bg-card overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-b bg-muted/50">
            <TableHead className="font-semibold text-foreground">Brand</TableHead>
            <TableHead className="font-semibold text-foreground">Last 4</TableHead>
            <TableHead className="font-semibold text-foreground">Default</TableHead>
            <TableHead className="w-[100px] font-semibold text-foreground">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cards.map((card) => (
            <CardTableRow
              key={card.id}
              card={card}
              onDelete={onDelete}
              onSetDefault={onSetDefault}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};