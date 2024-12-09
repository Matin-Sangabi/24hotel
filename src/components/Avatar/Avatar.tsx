import Image from 'next/image';
import React from 'react'

export default function Avatar() {
  return (
    <Image
      className="rounded-circle header-profile-user"
      src={"/images/users/avatar-1.jpg"}
      alt="Header Avatar"
      width={40}
      height={40}
      unoptimized
    />
  );
}
