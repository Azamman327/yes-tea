import '/src/styles/globals.css';
import Timer from './timer';

export default function TimerMain() {
  return (
    <div className="container">
      <div className="flex flexrow justify-center font-serif text-5xl">
        <Timer />
      </div>
    </div>
  );
}
