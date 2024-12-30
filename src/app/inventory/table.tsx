'use client';

import { Stack, Table } from '@chakra-ui/react';

export default function Demo() {
  return (
    <Stack gap="10">
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
          {items.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.brand}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.packagingtype}</Table.Cell>
              <Table.Cell>{item.stock}</Table.Cell>
              <Table.Cell>{item.expired}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Stack>
  );
}

const items = [
  //id === inventoryId
  { id: 1, brand: 4, name: 'Smartphone', packagingtype: 'Electronics', stock: 799.99, expired: '2024/12/12' },
  { id: 2, brand: 4, name: 'Smartphone', packagingtype: 'Electronics', stock: 799.99, expired: '2024/12/12' },
  { id: 3, brand: 4, name: 'Smartphone', packagingtype: 'Electronics', stock: 799.99, expired: '2024/12/12' },
  { id: 4, brand: 4, name: 'Smartphone', packagingtype: 'Electronics', stock: 799.99, expired: '2024/12/12' },
  { id: 5, brand: 4, name: 'Smartphone', packagingtype: 'Electronics', stock: 799.99, expired: '2024/12/12' },
];
