import Image from 'next/image';

export default function sidebar() {
  return (
    <div className="w-1/3 hidden md:block">
      <Image
        src="/images/logo_text.png"
        width={180}
        height={180}
        alt="Picture of the author"
        className="mx-auto my-10"
      />
      <div className="w-48 mx-auto text-center">username 님의 차 보관함</div>
    </div>
  );
}
