import Head from 'next/head';

function ContactPage() {
  return (
    <div>
      <Head>
        <title>Get in Touch with FitZone Gym</title>
      </Head>
      <h1 className="text-4xl font-bold py-4">Get in Touch</h1>
      <p className="text-2xl py-4">
        Have a question or need assistance? Contact us today!
      </p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;