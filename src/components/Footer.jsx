import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-slate-900 text-slate-300 py-8'>
      <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6'>
        <div>
          <div className='font-semibold text-white'>WakaDigital</div>
          <div className='text-sm'>Building meaningful digital products</div>
        </div>
        <div className='text-sm'>© {new Date().getFullYear()} WakaDigital — All rights reserved</div>
      </div>
    </footer>
  );
}

