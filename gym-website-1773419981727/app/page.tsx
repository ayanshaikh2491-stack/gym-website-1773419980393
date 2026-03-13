import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>FitZone Gym</title>
      </Head>
      <Image
        src="/logo.png"
        alt="FitZone Gym Logo"
        width={200}
        height={200}
      />
      <h1 className="text-5xl font-bold">Welcome to FitZone Gym</h1>
      <p className="text-2xl">Your premier gym for fitness and wellness</p>
      <Link href="/about">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </Link>
    </div>
  );
}

export default HomePage;