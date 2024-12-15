'use client';
import '/src/styles/globals.css';

import { useState } from 'react';
import { createUser } from "./requestHandler"

export default function () {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`${name}, ${password}, ${email}`);
    createUser(name, password, email);
  };

  return (
    <div className="container">
      <div className=" flex flex-col gap-24 items-center">
        <div className="font-mono mt-10">enter your information for sign up</div>
        <form name="signup" onSubmit={handleSubmit}>
          <div className="w-full max-w-sm min-w-[200px]">
            <input
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow mt-4"
              placeholder="이메일"
              type="email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              className="mt-10 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow mt-4"
              placeholder="유저 이름"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="mt-10 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow mt-4"
              placeholder="비밀번호"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            className="mt-24 w-full rounded-md bg-green-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-600 focus:shadow-none active:bg-green-600 hover:bg-green-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-10"
            type="submit"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}
