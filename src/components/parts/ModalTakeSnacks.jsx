/* eslint-disable @next/next/no-img-element */
import React from 'react';

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
import formatRupiah from '@/lib/formatRupiah';

function ModalTakeSnacks({ purchasedSnacks, setPurchasedSnacks }) {
  if (!purchasedSnacks) {
    return null;
  }

  // console.log(purchasedSnacks);
  return (
    <Dialog>
      <DialogTrigger asChild className="p-2">
        <div className="flex justify-center items-center w-full h-full">
          <Button variant="outline" className="w-4/6  bg-blue-800 text-lightBg hover:bg-blue-900 hover:text-lightBg">
            Take Snacks
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-slate-800 max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Take Snacks</DialogTitle>
          <DialogDescription>Make changes to your profile here.</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          {purchasedSnacks.map((snack) => {
            return (
              <div
                className="card-snack bg-yellow-300 flex flex-col justify-center items-center  "
                key={snack.id}
              >
                <div className="images-snack w-20">
                  <img src={snack.imgUrl} alt={snack.name} />
                </div>
                <div className="info-snack text-sm">
                  <p>
                    <span>{snack.name}</span> x <span>{`${snack.total}pcs`}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={() => setPurchasedSnacks([])} type="button">
              Take Snacks
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalTakeSnacks;
