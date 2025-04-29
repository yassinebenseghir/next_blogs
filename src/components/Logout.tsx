'use client';

import { signOut } from 'next-auth/react';

const Logout = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Log Out
    </button>
  );
};

export default Logout;
