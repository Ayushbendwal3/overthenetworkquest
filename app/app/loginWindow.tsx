'use client';

import { useState } from 'react';

export default function LoginWindow({
  setUpProfile,
}: {
  setUpProfile: (form: FormData) => Promise<void>;
}) {
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (form: FormData) => {
    setErrorMsg('');
    try {
      setUpProfile(form);
    } catch (error: any) {
      setErrorMsg(error.message);
    }
  };

  return (
    <form action={onSubmit}>
      <div className='flex flex-col space-y-3'>
        <p className='text-xs font-bold uppercase text-neutral-100'>
          Create Account
        </p>
        <input
          id='username'
          type='text'
          name='username'
          className='rounded border border-neutral-200 bg-neutral-300 px-3 py-2 text-sm'
          placeholder='Username'
          required
        />
        <input
          id='name'
          type='text'
          name='name'
          className='rounded border border-neutral-200 bg-neutral-300 px-3 py-2 text-sm'
          placeholder='Name'
          required
        />
        <div className='w-full'>
          <button
            type='submit'
            className='flex w-full flex-row items-center justify-center space-x-2 rounded bg-blue-500 py-2.5 text-sm font-medium hover:bg-blue-400'
          >
            Create Account
          </button>
          <p className='text-red-500'>{errorMsg && errorMsg}</p>
        </div>
      </div>
    </form>
  );
}
