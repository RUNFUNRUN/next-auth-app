'use client';

import { signIn } from 'next-auth/react';

const Page = () => {
  const handleClick = () => {
    signIn('github', {
      callbackUrl: '/',
    });
  };
  return (
    <div className='text-center'>
      <h1>Login</h1>
      <button type='button' onClick={handleClick}>
        Login with GitHub
      </button>
    </div>
  );
};

export default Page;
