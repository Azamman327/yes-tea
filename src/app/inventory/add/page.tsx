'use client'

import '/src/styles/globals.css';
import Sidebar from '../sidebar';

import { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

import { addTeaAndInventoryInfo } from "./requestHandler"

import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

type FormValues = {
  brand: string
  name: string
  packagingtype: string
  amount: number
  year: string
  month: string
  day: string
  type: string
  minute: number
  second: number
  temperature: number
  quantity: number
  watervolume: number
}

export default function inventoryAdd() {

  const [selectedValue, setSelectedValue] = useState('teabag'); // 선택된 값을 관리하는 상태

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedValue(event.target.value);
  };
  const [type, setType] = useState('');

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  useForm({
    defaultValues: {
      brand: "",
      name: "",
      packagingtype: "",
      amount: 0,
      year: "",
      month: "",
      day: "",
      type: "",
      minute: 0,
      second: 0,
      temperature: 0,
      quantity: 0,
      watervolume:0
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const onSubmit = handleSubmit(
    (data) => {
      // addTeaAndInventoryInfo(data);
      console.log(data.packagingtype);
    }
  )

  return (
    <>
      <Sidebar />
      <div className="main-container">
        <div className='mb-5 text-2xl font-medium'>추가할 차 정보를 입력해 주세요.</div>
        <form onSubmit={onSubmit}>
          <div className='flex gap-40'>
            <div className='w-1/2 flex flex-col gap-8'>
              <TextField {...register('brand')} label="브랜드" defaultValue="" variant="standard" />
              <TextField {...register('name')} label="제품명" defaultValue="" variant="standard" />
              <div>
                {/* <label>
                  <input type="radio" {...register('packagingtype')} value="teabag" checked={selectedValue === "teabag"} onChange={handleChange}/>
                  티백
                </label>
                <label>
                  <input type="radio" {...register('packagingtype')} value="looseleaf" checked={selectedValue === "looseleaf"} onChange={handleChange}/>
                  잎차
                </label> */}
                <Radio {...register('packagingtype')} checked={selectedValue === 'teabag'} onChange={handleChange} value="teabag" />
                <Radio {...register('packagingtype')} checked={selectedValue === 'looseleaf'} onChange={handleChange} value="looseleaf" />
              </div>
              <div>
                <span>개수 : </span>
                <TextField {...register('amount')} defaultValue={0} variant='standard' size='small' className='w-10 text-right' />
                <span>개</span>
              </div>
              <div className='flex flex-col'>
                <span>유통기한</span>
                <div>
                  <TextField {...register('year')} defaultValue="" variant='standard' size='small' className='w-12' />
                  <span className='mr-5'>년</span>
                  <TextField {...register('month')} defaultValue="" variant='standard' size='small' className='w-10' />
                  <span className='mr-5'>월</span>
                  <TextField {...register('day')} defaultValue="" variant='standard' size='small' className='w-10' />
                  <span className='mr-5'>일</span>
                </div>
              </div>
              <div>
                <span>차 종류 : </span>
                <Select {...register('type')} defaultValue="" onChange={handleTypeChange} size='small' className='w-20'>
                  <MenuItem value="greentea">녹차</MenuItem>
                  <MenuItem value="blacktea">홍차</MenuItem>
                  <MenuItem value="herbtea">허브티</MenuItem>
                  <MenuItem value="whitetea">백차</MenuItem>
                  <MenuItem value="oolongtea">청차(우롱)</MenuItem>
                  <MenuItem value="yellowtea">황차</MenuItem>
                  <MenuItem value="darktea">흑차</MenuItem>
                  <MenuItem value="none">그 외(모름)</MenuItem>
                </Select>
              </div>
            </div>
            <div className='w-1/2 flex flex-col gap-8'>
              <div className='mb-10 text-lg font-medium'>
                아래 항목부터는 필수 입력 사항이 아니지만, <br/>입력시 티 타이머와 재고 관리를 연동할 수 있어요.
              </div>
              <div>
                <span>우림 시간 : </span>
                <TextField {...register('minute')} defaultValue={0} variant='standard' size='small' className='w-10' />
                <span className='mr-5'>분</span>
                <TextField {...register('second')} defaultValue={0} variant='standard' size='small' className='w-10' />
                <span>초</span>
              </div>
              <div>
                <span>권장 물 온도 : </span>
                <TextField {...register('temperature')} defaultValue={0} variant='standard' size='small' className='w-12' />
                <span>C</span>
              </div>
              <div>
                <span>1잔당 찻잎 권장량 : </span>
                <TextField {...register('quantity')} defaultValue={0} variant='standard' size='small' className='w-12' />
                <span>g</span>
              </div>
              <div>
                <span>1잔당 권장 물 양 : </span>
                <TextField {...register('watervolume')} defaultValue={0} variant='standard' size='small' className='w-12' />
                <span>ml</span>
              </div>
            </div>
          </div>

          <div className='flex flex-row justify-evenly mt-10'>
            <button
              className="mt-4 w-1/4 rounded-md bg-green-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-600 focus:shadow-none active:bg-green-700 hover:bg-green-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-10"
              type="submit"
              onSubmit={() => {handleSubmit}}
            >
              추가하기
            </button>
            <button
              className="mt-4 w-1/4 rounded-md bg-slate-300 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-400 focus:shadow-none active:bg-slate-500 hover:bg-slate-400 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-10" 
              type='reset'
            >취소</button>
          </div>
        </form>
      </div>
    </>
  );
}