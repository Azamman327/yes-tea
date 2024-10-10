import '/src/styles/globals.css';
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='container'>
      <div className=' flex flex-col gap-14 items-center'>
      <Image
        src="/images/logo.png"
        width={250}
        height={250}
        alt="Picture of the author"
      />
      <p className='text-lg'>보다 간편한 차 생활</p>
      <button className="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        회원가입
      </button>
      <p className='text-slate-400'>혹시 계정이 있으신가요? <Link href="/login" className='cursor-pointer'>로그인하기</Link></p>
      </div>
    </div>
  );
}
