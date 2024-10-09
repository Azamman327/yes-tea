import '/src/app/styles/globals.css';
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      hello
      <Image
        src="/images/logo.png"
        width={300}
        height={300}
        alt="Picture of the author"
      />
    </div>
  );
}
