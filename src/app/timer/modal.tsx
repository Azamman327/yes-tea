'use client';

import { useState } from 'react';

import { Button } from "@/components/ui/button"
import { Input } from "@chakra-ui/react";

import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useTimeStore } from './timeStore';

const EditModal: React.FC = () => {
  const timeStore = useTimeStore();
  
  return (
    <>

      <DialogRoot>
        <DialogTrigger asChild>
          <Button size="xs" className='mt-4 w-full rounded-md bg-slate-300 py-2 px-4 border border-transparent text-center text-sm text-black transition-all shadow-md hover:shadow-lg active:bg-slate-400 hover:bg-slate-400 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-10'>
            edit
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>타이머 시간 설정하기</DialogTitle>
          </DialogHeader>

          <DialogBody>
            <Input placeholder="Outline" variant="outline" onChange={(e) => timeStore.updateMinutesState(Number(e.target.value))}/>분
            <Input placeholder="Outline" variant="outline" onChange={(e) => timeStore.updateSecondsState(Number(e.target.value))}/>초
          </DialogBody>

          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button variant="outline">닫기</Button>
            </DialogActionTrigger>
          </DialogFooter>

          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </>
  );
};

export default function Component() {
  return <EditModal />;
}
