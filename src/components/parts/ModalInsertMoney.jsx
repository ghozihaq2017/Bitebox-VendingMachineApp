/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import CardMoney from './CardMoney';

function ModalInsertMoney({ money, onInsertMoney }) {
  const [selectedMoney, setSelectedMoney] = useState(0);

  const handleSelectMoney = (value) => {
    setSelectedMoney(value);
  };

  const handleInsertMoney = () => {
    onInsertMoney(selectedMoney);
    setSelectedMoney(0);
  };

  if (!money) {
    return null;
  }
  return (
    <Dialog>
      <DialogTrigger asChild className="p-2">
        <div>
          <Button variant="outline" className="w-full">
            Insert Money
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-slate-800 w-full">
        <DialogHeader>
          <DialogTitle>Insert Money</DialogTitle>
          <DialogDescription>Make changes to your profile here.</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          {money.map((mny) => (
            <CardMoney
              key={mny.id}
              mny={mny}
              onSelect={handleSelectMoney}
              selectedMoney={selectedMoney}
            />
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              className="btn-insert"
              type="button"
              onClick={() => handleInsertMoney()}
            >
              Insert
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalInsertMoney;
