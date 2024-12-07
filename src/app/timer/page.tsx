import '/src/styles/globals.css';
import Timer from './timer';
import dynamic from 'next/dynamic';

const EditModal = dynamic(() => import('./modal'), { ssr: false });

export default function TimerMain() {
  return (
    <div className="container">
      <div className="flex flex-row justify-center font-serif text-5xl">
        <Timer />
      </div>
      <EditModal />
    </div>
  );
}
