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

function ModalCollectMoney({ setBalance }) {
  return (
    <Dialog>
      <DialogTrigger asChild className="p-2">
        <div>
          <Button variant="outline" className="w-full  bg-blue-800 text-lightBg hover:bg-blue-900 hover:text-lightBg">
            Collect Money
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-slate-800 w-full">
        <DialogHeader>
          <DialogTitle>Insert Money</DialogTitle>
          <DialogDescription>Make changes to your profile here.</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <CardMoney />
          <CardMoney />
          <CardMoney />
          <CardMoney />
          <CardMoney />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={() => setBalance(0)}>
              Collect
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalCollectMoney;
