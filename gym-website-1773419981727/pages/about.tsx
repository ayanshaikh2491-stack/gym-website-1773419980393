import Head from 'next/head';

function AboutPage() {
  return (
    <div>
      <Head>
        <title>About FitZone Gym</title>
      </Head>
      <h1 className="text-4xl font-bold py-4">About Us</h1>
      <p className="text-2xl py-4">
        FitZone Gym is a premier fitness destination that offers a wide range
        of equipment and classes to help you achieve your fitness goals.
      </p>
      <p className="text-2xl py-4">
        Our friendly and knowledgeable staff are always available to assist
        you and provide guidance on your fitness journey.
      </p>
    </div>
  );
}

export default AboutPage;