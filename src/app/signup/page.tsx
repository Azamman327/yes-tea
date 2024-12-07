import '/src/styles/globals.css';
import Image from 'next/image';

export default function () {
  return (
    <div className="container">
      <div className=" flex flex-col gap-14 items-center">
        <Image src="/images/logo_text.png" width={250} height={90} alt="Picture of the author" />
        <div className="w-full max-w-sm min-w-[200px]">
          <input
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow mt-4"
            placeholder="이메일"
            type="email"
          />
          <input
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow mt-4"
            placeholder="유저 이름"
            type="text"
          />
          <input
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow mt-4"
            placeholder="비밀번호"
            type="password"
          />
        </div>
        <button
          className="mt-4 w-full rounded-md bg-green-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-600 focus:shadow-none active:bg-green-600 hover:bg-green-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-10"
          type="button"
        >
          회원가입
        </button>
      </div>
    </div>
  );
}
