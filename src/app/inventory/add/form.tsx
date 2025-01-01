'use client';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { addTeaAndInventoryInfo } from './requestHandler';
import { Input } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@/components/ui/radio';
import { HStack } from '@chakra-ui/react';
import { createListCollection } from '@chakra-ui/react';
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '@/components/ui/select';
import { Flex } from '@chakra-ui/react';

type FormValues = {
  brand: string;
  name: string;
  packagingtype: string;
  amount: number;
  year: string;
  month: string;
  day: string;
  type: string;
  minute: number;
  second: number;
  temperature: number;
  quantity: number;
  watervolume: number;
};

export default function form() {
  const [selectedPackaging, setSelectedPackaging] = useState('teabag');

  const types = createListCollection({
    items: [
      { label: '녹차', value: 'greentea' },
      { label: '홍차', value: 'blacktea' },
      { label: '허브티', value: 'herbtea' },
      { label: '백차', value: 'whitetea' },
      { label: '청차(우롱차)', value: 'oolongtea' },
      { label: '흑차(보이차)', value: 'darktea' },
      { label: '블렌드', value: 'blendtea' },
      { label: '그 외(모름)', value: 'none' },
    ],
  });

  useForm({
    defaultValues: {
      brand: '',
      name: '',
      packagingtype: '',
      amount: 0,
      year: '',
      month: '',
      day: '',
      type: '',
      minute: 0,
      second: 0,
      temperature: 0,
      quantity: 0,
      watervolume: 0,
    },
  });

  const {
    register,
    control,
    handleSubmit,
  } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => {
    addTeaAndInventoryInfo(data);
  });

  return (
    <>
      <div className="mb-5 text-sm phone:text-lg md:text-xl font-medium md:text-2xl">
        추가할 차 정보를 입력해 주세요.
      </div>
      <form onSubmit={onSubmit}>
        <div className="flex gap-10 lg:gap-40 flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col gap-6 whitespace-nowrap">
            <Flex direction="column">
              <span>브랜드</span>
              <Input {...register('brand')} placeholder="브랜드" variant="outline" borderWidth="1px" mb="5" />
              <span>제품명</span>
              <Input {...register('name')} placeholder="제품명" variant="outline" borderWidth="1px" />
            </Flex>
            <div>
              <Controller
                name="packagingtype"
                control={control}
                defaultValue="teabag" // 초기값 설정
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    value={selectedPackaging}
                    onValueChange={(e) => setSelectedPackaging(e.value)}
                    variant="subtle"
                  >
                    <HStack gap="6">
                      <Radio value="teabag">티백</Radio>
                      <Radio value="looseleaf">잎차</Radio>
                    </HStack>
                  </RadioGroup>
                )}
              />
            </div>
            {selectedPackaging == 'teabag' ? (
              <div>
                <span>개수 : </span>
                <Input {...register('amount')} variant="outline" borderWidth="1px" size="xs" className="w-10" />
                <span>개</span>
              </div>
            ) : (
              <div>
                <span>양 : </span>
                <Input {...register('amount')} variant="outline" borderWidth="1px" size="xs" className="w-10" />
                <span>(g)</span>
              </div>
            )}
            <div className="flex flex-col">
              <span>유통기한</span>
              <div className="flex flex-wrap">
                <div>
                  <Input {...register('year')} variant="outline" borderWidth="1px" size="xs" width="24" />
                  <span className="mr-5">년</span>
                </div>
                <div>
                  <Input {...register('month')} variant="outline" borderWidth="1px" size="xs" className="w-10" />
                  <span className="mr-5">월</span>
                </div>
                <div>
                  <Input {...register('day')} variant="outline" borderWidth="1px" size="xs" className="w-10" />
                  <span className="mr-5">일</span>
                </div>
              </div>
            </div>
            <div>
              <SelectRoot {...register('type')} collection={types} size="sm" className="w-25">
                <SelectLabel>차 종류 : </SelectLabel>
                <SelectTrigger>
                  <SelectValueText placeholder="Select tea type" />
                </SelectTrigger>
                <SelectContent>
                  {types.items.map((type) => (
                    <SelectItem item={type} key={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectRoot>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-8">
              <div className="mb-10 text-sm phone:text-lg font-medium whitespace-nowrap">
                <span className="hidden phone:inline-block">아래 항목부터는</span> 필수 입력 사항이 아니지만, <wbr />
                입력시 티 타이머와 재고 관리를 <wbr />
                연동할 수 있어요.
              </div>
              <div>
                <span>우림 시간 : </span>
                <div className="inline-block">
                  <Input {...register('minute')} variant="outline" borderWidth="1px" size="xs" className="w-10" />
                  <span className="mr-5">분</span>
                </div>
                <div className="inline-block">
                  <Input {...register('second')} variant="outline" borderWidth="1px" size="xs" className="w-10" />
                  <span>초</span>
                </div>
              </div>
              <div>
                <div>
                  <span>권장 물 온도 : </span>
                  <Input {...register('temperature')} variant="outline" borderWidth="1px" size="xs" className="w-12" />
                  <span>C</span>
                </div>
              </div>
              {selectedPackaging === 'looseleaf' ? (
                <div>
                  <span>1잔당 찻잎 권장량 : </span>
                  <Input {...register('quantity')} variant="outline" borderWidth="1px" size="xs" className="w-12" />
                  <span>g</span>
                </div>
              ) : (
                <></>
              )}

              <div>
                <span>1잔당 권장 물 양 : </span>
                <Input {...register('watervolume')} variant="outline" borderWidth="1px" size="xs" className="w-12" />
                <span>ml</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-around mt-10">
          <button
            className="mt-4 w-1/3 phone:w-1/4 rounded-md bg-green-500 py-1 px-2 sm:py-2 sm:px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-600 focus:shadow-none active:bg-green-700 hover:bg-green-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-10"
            type="submit"
          >
            추가하기
          </button>
          <button
            className="mt-4 w-1/3 phone:w-1/4 rounded-md bg-slate-300 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-400 focus:shadow-none active:bg-slate-500 hover:bg-slate-400 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-10"
            type="reset"
          >
            취소
          </button>
        </div>
      </form>
    </>
  );
}
