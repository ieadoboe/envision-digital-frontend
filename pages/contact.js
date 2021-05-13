import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";

const Contact = () => {
  const PageHeader = {
    title: "In augue erat placerat cursus sit pulvinar.",
  };

  return (
    <>
      <Head>
        <title>Envision Digital | Contact</title>
        <meta name="keywords" content="digital" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <section className="page-header">
        <Navbar />
        <Header data={PageHeader} />
      </section>
      <section className={`container`}>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.7026955177538!2d-1.5735657172306823!3d6.670394089756333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb947193f66f6f%3A0x92d4640770981ea4!2sNew%20Brunei%2C%20GUSSS%20Hostel!5e0!3m2!1sen!2sgh!4v1620907151489!5m2!1sen!2sgh"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
