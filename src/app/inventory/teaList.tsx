'use client';

import { getInventoryList } from './requestHandler';
import { useInventoryStore } from './inventoryStore';

import { Stack, Table } from '@chakra-ui/react';
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

  // const [inventoryList, setInventoryList] = useState<InventoryItem[]>([]);

  useEffect(() => {
    async function getList() {
      const list = await getInventoryList();
      // setInventoryList(list);
      inventoryStore.initial(list);
    }
    getList();
  }, []);

  return (
    <Stack gap="10">
      <Table.ScrollArea rounded="md" height="70vh">
        <Table.Root size="lg" variant="outline">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>브랜드</Table.ColumnHeader>
              <Table.ColumnHeader>제품명</Table.ColumnHeader>
              <Table.ColumnHeader>잎차/티백</Table.ColumnHeader>
              <Table.ColumnHeader>재고</Table.ColumnHeader>
              <Table.ColumnHeader>유통기한</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {inventoryStore.items.map((item, index) => (
              <Table.Row key={index}>
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
  );

  
}
