import { useState } from 'react';
import productList from './configs';
import './styles.css';

export default function Autocomplete() {
  return (
    <div>
      <div class='relative'>
        <div class='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none '>
          <svg
            class='w-5 h-5 text-gray-500 dark:text-gray-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            ></path>
          </svg>
        </div>
        <input
          type='search'
          id='default-search'
          class='block p-4 pl-10 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-transparent'
          placeholder='Search for any software ...'
          required
        />
      </div>
      <ul className='absolute my-2 rounded-md shadow-xl bg-white dropdown-width'>
        {productList.map((product) => (
          <li
            className='p-2 w-full text-sm font-medium text-zinc-500 cursor-pointer'
            key={product.id}
          >
            <div className='flex p-1 bg hover:bg-blue-600 hover:text-white rounded-md'>
              <img
                src={product.image}
                alt={product.id}
                className='product-image-autocomplete'
              ></img>
              <div className='pl-2'>{product.name}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}