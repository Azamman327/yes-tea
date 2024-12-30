import '/src/styles/globals.css';
import Sidebar from './sidebar';
import TeaList from './table';

export default function inventory() {
  return (
    <>
      <Sidebar />
      <div className="main-container">
        <TeaList />
      </div>
    </>
  );
}
