import '/src/styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <div className=" flex flex-col gap-14 items-center">
        <Image src="/images/logo.png" width={250} height={250} alt="Picture of the author" />
        <p className="text-lg">보다 간편한 차 생활</p>
        <Link href="/signup" className="w-full">
          <button
            className="mt-4 w-full rounded-md bg-green-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-600 focus:shadow-none active:bg-green-600 hover:bg-green-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            회원가입
          </button>
        </Link>
        <p className="text-slate-400">
          혹시 계정이 있으신가요?
          <Link href="/login" className="cursor-pointer">
            로그인하기
          </Link>
        </p>
      </div>
    </div>
  );
}
