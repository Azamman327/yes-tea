'use client';

import { getInventoryList } from './requestHandler';
import { useInventoryStore } from './inventoryStore';

import { Stack, Table } from '@chakra-ui/react';
import { Checkbox } from "@/components/ui/checkbox"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function TeaList(): JSX.Element {
  type InventoryItem = {
    inventory: {
      inventoryId: {
        userId: number;
        teaId: number;
      };
      amount: number;
      expired: string;
    };
    tea: {
      teaId: number;
      brand: string;
      name: string;
      packagingtype: string;
      type: string;
      minute: number;
      second: number;
      temperature: number;
      quantity: number;
      watervolume: number;
    };
  };

  const inventoryStore = useInventoryStore();
  const router = useRouter();
  const [deleteState, setDeleteState] = useState(false);
  const [deleteList, setDeleteList] = useState<InventoryItem[]>([]);

  useEffect(() => {
    async function getList() {
      const list = await getInventoryList();
      inventoryStore.initial(list);      
    }
    getList();
  }, []);

  function deleteItems() {
    inventoryStore.delete(deleteList);
    //서버 요청
    setDeleteState(false);
  }

  return (
    <>
      <Stack gap="10">
        <Table.ScrollArea rounded="md" height="70vh">
          <Table.Root size="lg" variant="outline">
            <Table.Header>
              <Table.Row>
                {
                  deleteState === true ?
                  <Table.ColumnHeader></Table.ColumnHeader>
                  :
                  <></>
                }
                <Table.ColumnHeader>브랜드</Table.ColumnHeader>
                <Table.ColumnHeader>제품명</Table.ColumnHeader>
                <Table.ColumnHeader>잎차/티백</Table.ColumnHeader>
                <Table.ColumnHeader>재고</Table.ColumnHeader>
                <Table.ColumnHeader>유통기한</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {inventoryStore.items.map((item: InventoryItem, index: number) => (
                <Table.Row key={index}>
                  {
                    deleteState === true ?
                    <Table.Cell className='text-center'>
                      <Checkbox variant='subtle' onClick={() => setDeleteList(deleteList => [...deleteList, item])}></Checkbox>
                    </Table.Cell>
                    :
                    <></>
                  }
                  <Table.Cell>{item.tea.brand}</Table.Cell>
                  <Table.Cell>{item.tea.name}</Table.Cell>
                  <Table.Cell>{item.tea.packagingtype}</Table.Cell>
                  <Table.Cell>{item.inventory.amount}</Table.Cell>
                  <Table.Cell>{item.inventory.expired}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>
      </Stack>
      <div className="mt-5 flex justify-evenly">
        {deleteState === true ? (
          <>
            <button className="mt-4 w-1/3 phone:w-1/4 rounded-md bg-red-500 py-1 px-2 sm:py-2 sm:px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg active:bg-red-700 hover:bg-red-600 active:shadow-none mt-10"
              onClick={() => deleteItems()}
            >
              삭제하기
            </button>
            <button
              className="mt-4 w-1/3 phone:w-1/4 rounded-md bg-slate-500 py-1 px-2 sm:py-2 sm:px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg active:bg-slate-700 hover:bg-slate-600 active:shadow-none mt-10"
              onClick={() => setDeleteState(false)}
            >
              취소
            </button>
          </>
        ) : (
          <>
            <button
              className="mt-4 w-1/3 phone:w-1/4 rounded-md bg-green-500 py-1 px-2 sm:py-2 sm:px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg active:bg-green-700 hover:bg-green-600 active:shadow-none mt-10"
              onClick={() => router.push('/inventory/add')}
            >
              추가하기
            </button>
            <button
              className="mt-4 w-1/3 phone:w-1/4 rounded-md bg-slate-300 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg active:bg-slate-500 hover:bg-slate-400 active:shadow-none mt-10"
              onClick={() => setDeleteState(true)}
            >
              삭제하기
            </button>
          </>
        )}
      </div>
    </>
  );
}
