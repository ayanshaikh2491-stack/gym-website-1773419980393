import Head from 'next/head';

function MembershipPage() {
  return (
    <div>
      <Head>
        <title>FitZone Gym Membership Options</title>
      </Head>
      <h1 className="text-4xl font-bold py-4">Membership Options</h1>
      <p className="text-2xl py-4">
        FitZone Gym offers a variety of membership options to suit your needs
        and budget.
      </p>
      <ul>
        <li>
          <h2 className="text-2xl font-bold py-2">Basic Membership</h2>
          <p className="text-2xl py-2">$49.99 per month</p>
          <p className="text-2xl py-2">
            Access to our state-of-the-art fitness equipment and classes
          </p>
        </li>
        <li>
          <h2 className="text-2xl font-bold py-2">Premium Membership</h2>
          <p className="text-2xl py-2">$99.99 per month</p>
          <p className="text-2xl py-2">
            All basic membership benefits plus access to our personal training
            services
          </p>
        </li>
      </ul>
    </div>
  );
}

export default MembershipPage;