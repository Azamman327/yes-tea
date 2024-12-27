'use client';

import '/src/styles/globals.css';
import Sidebar from '../sidebar';
import Form from './form';

export default function inventoryAdd() {
  return (
    <>
      <Sidebar />
      <div className="main-container">
        <Form />
      </div>
    </>
  );
}
