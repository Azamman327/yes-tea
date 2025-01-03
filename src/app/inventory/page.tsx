'use client';

import '/src/styles/globals.css';
import Sidebar from './sidebar';
import TeaList from './teaList';

export default function inventory(): JSX.Element {
  return (
    <>
      <Sidebar />
      <div className="main-container">
        <TeaList />
      </div>
    </>
  );
}
