import '/src/styles/globals.css';
import Image from 'next/image'

export default function Home() {
  return (
    <div className='container'>
      <div className=' flex flex-col gap-20 items-center'>
      <Image
        src="/images/logo.png"
        width={250}
        height={250}
        alt="Picture of the author"
      />
      <p className='text-lg'>보다 간편한 차 생활</p>
      <button className="bg-pointgreen rounded-full text-slate-50 w-full py-2">
        회원가입
      </button>
      <p className='text-slate-400'>혹시 계정이 있으신가요? <a className='cursor-pointer'>로그인하기</a></p>
      </div>
    </div>
  );
}
