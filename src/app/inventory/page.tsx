'use client'

import '/src/styles/globals.css';
import Sidebar from './sidebar';
import TeaList from './teaList';

import { useRouter } from 'next/navigation'

export default function inventory(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <Sidebar />
      <div className="main-container">
        <TeaList />
        <div className="mt-5 flex justify-evenly">
          <button className="mt-4 w-1/3 phone:w-1/4 rounded-md bg-green-500 py-1 px-2 sm:py-2 sm:px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg active:bg-green-700 hover:bg-green-600 active:shadow-none mt-10"
            onClick={() => router.push('/inventory/add')}
          >
            추가하기
          </button>
          <button className="mt-4 w-1/3 phone:w-1/4 rounded-md bg-slate-300 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg active:bg-slate-500 hover:bg-slate-400 active:shadow-none mt-10">
            삭제하기
          </button>
        </div>
      </div>
    </>
  );
}
