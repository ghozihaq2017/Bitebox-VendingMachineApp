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
          <Button
            variant="outline"
            className="w-full bg-blue-800 text-lightBg hover:bg-blue-900 hover:text-lightBg rounded-md"
          >
            Insert Money
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-primaryVm dark:bg-primaryVmDark  w-11/12 md:w-full">
        <DialogHeader>
          <DialogTitle>Insert Money</DialogTitle>
          <DialogDescription>Select the money you want to insert into the vending machine</DialogDescription>
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
        <DialogFooter className="sm:justify-evenly justify-evenly">
          <DialogClose
            asChild
            className="bg-blue-800 hover:bg-blue-950 dark:bg-lightBg dark:hover:bg-primaryVm  w-1/3 "
          >
            <Button  type="button" onClick={() => handleInsertMoney()}>Insert</Button>
          </DialogClose>
          <DialogClose
            asChild
            className="bg-red-800 hover:bg-red-950 dark:bg-lightBg dark:hover:bg-primaryVm w-1/3"
          >
            <Button>Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalInsertMoney;
