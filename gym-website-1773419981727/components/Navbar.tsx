import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  return (
    <nav className="flex justify-between py-4 bg-gray-800">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="FitZone Gym Logo"
          width={100}
          height={100}
        />
      </Link>
      <ul className="flex items-center space-x-4">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/membership">Membership</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;