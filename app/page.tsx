'use client'
import Image from 'next/image';
import { useState } from 'react';
export default function Home() {
  const [language, setLanguage] = useState('')
  
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
    console.log('Language: ' + language)
    setLanguage(event.target.value)
    console.log(event.target.value)
  }

  return (
    <main>
      <div className='navbar bg-green-100'>
        <div className='flex-1'>
          <Image
            src='https://papago.naver.com/97ec80a681e94540414daf2fb855ba3b.svg'
            height={26}
            width={99}
            alt='Logo'
          />
        </div>
        <div className='flex-none'>
          <button className='btn btn-square btn-ghost'>
            {' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-5 h-5 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className='md:container md:mx-auto'>
      <h1>{language}</h1>
        <select className='select select-ghost w-full max-w-xs' defaultValue='tagbanwa' onChange={handleChange}>
         
          <option disabled>
            Select Language
          </option>
          <option value={'baybayin'}>Tagalog to Baybayin</option>
          <option value={'buhid'}>Tagalog to Buhid</option>
          <option value={'tagbanwa'}>Tagalog to Tagbanwa</option>

        </select>
        <div className='flex flex-col md:flex-row'>
          <div className='basis-full bg-red-300'>
            <textarea
              className='textarea textarea-bordered w-full'
              placeholder='Type'
            ></textarea>
          </div>
          <div className='basis-full bg-blue-300'>
            <textarea
              className='textarea textarea-bordered w-full'
              placeholder='Tra'
            ></textarea>
          </div>
        </div>
      </div>
    </main>
  );
}
