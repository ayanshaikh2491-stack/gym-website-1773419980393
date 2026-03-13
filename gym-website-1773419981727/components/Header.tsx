import Image from 'next/image';

function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <h1 className="text-4xl font-bold text-white">
        FitZone Gym: Your Premier Fitness Destination
      </h1>
      <p className="text-2xl text-gray-300">
        Where fitness meets community and support
      </p>
      <Image
        src="/fitness-person.png"
        alt="Fitness Person"
        width={200}
        height={200}
      />
    </header>
  );
}

export default Header;