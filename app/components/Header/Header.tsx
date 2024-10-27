
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#151515', color: "#ffffff" }}>
      <Link href="/Home">Home</Link>
      <Link href="/About">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/contact">Contact Us</Link>

    </nav>
  );
};

export default Header;
