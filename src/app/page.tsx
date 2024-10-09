import '/src/app/styles/globals.css';
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Image
        src="/images/logo.png"
        width={250}
        height={250}
        alt="Picture of the author"
      />
      <p>보다 간편한 차 생활</p>
      <button className="bg-pointgreen rounded-full text-slate-50 w-full py-2">
        회원가입
      </button>
    </div>
  );
}
