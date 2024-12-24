'use client';
import axios from 'axios';

type FormValues = {
  brand: string
  name: string
  packagingtype: string
  amount: number //inventory
  year: string  //inventory
  month: string //inventory
  day: string //inventory
  type: string
  minute: number
  second: number
  temperature: number
  quantity: number
}

export async function addTeaAndInventoryInfo(data: FormValues) {
  console.log('start addTeaAndInventoryInfo');
  try {
    const response = await axios.post('/api/inventory/create', {
      amount: data.amount,
      year: data.year,
      month: data.month,
      day: data.day
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }

  try {
    const response = await axios.post('/api/inventory/create', {
      brand: data.brand,
      name: data.name,
      packagingtype: data.packagingtype,
      type: data.type,
      minute: data.minute,
      second: data.second,
      temperature: data.temperature,
      quantity: data.quantity
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}