'use client';

import '/src/styles/globals.css';
import Image from 'next/image';
import { useState } from 'react';

import { login } from './requestHandler';

export default function Login() {
  const [formData, setFormData] = useState({ name: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(formData.name, formData.password);
  };

  return (
    <div className="container">
      <div className=" flex flex-col gap-14 items-center">
        <Image src="/images/logo.png" width={250} height={250} alt="Picture of the author" />
        <form onSubmit={handleSubmit} className="w-full max-w-sm min-w-[200px] mt-16">
          <input
            name="name"
            onChange={handleChange}
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="유저 이름"
            type="text"
          />
          <input
            name="password"
            onChange={handleChange}
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow mt-4"
            placeholder="비밀번호"
            type="password"
          />
          <button
            className="mt-4 w-full rounded-md bg-green-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-600 focus:shadow-none active:bg-green-600 hover:bg-green-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-10"
            type="submit"
          >
            로그인하기
          </button>
        </form>
      </div>
    </div>
  );
}
