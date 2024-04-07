'use client';

import { signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data } = useSession({
    required: true,
  });
  return (
    <main>
      <h1>Hello, {data?.user?.name}</h1>
      <button
        type='button'
        onClick={() => {
          signOut({ callbackUrl: '/login', redirect: true });
        }}
      >
        Sign out
      </button>
    </main>
  );
}
