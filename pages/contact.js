import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import ContactForm from "../components/elements/ContactForm";
import styles from "../styles/Contact.module.scss";
import Link from "next/link";
import Button from "./../components/elements/Button";

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
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
        />
      </Head>

      <section className="page-header">
        <Navbar />
        <Header data={PageHeader} />
      </section>
      <section className={`container`}>
        <section className={`${styles["contact-section"]}`}>
          <div className={`${styles["contact-form"]}`}>
            <h2>Let's talk</h2>
            <div >
              <ContactForm />
            </div>
          </div>

          <div className={`${styles["contact-info"]}`}>
            <div className={`${styles["contact-info-buttons"]}`}>
              <Link href="#">
                <Button blue={true}>
                  <i
                    className={`fa fa-phone fa-flip-horizontal fa-lg ${styles["phone-icon"]}`}
                    aria-hidden="true"
                  ></i>
                  0 (233) 500 000 000
                </Button>
              </Link>
              <Link href="#">
                <Button blue={true}>
                  <i
                    className={`fa fa-envelope fa-lg ${styles["email-icon"]}`}
                    aria-hidden="true"
                  ></i>
                  info@envisiondigitals.com
                </Button>
              </Link>
            </div>
            <div className={`${styles["contact-info-address"]}`}>
              <p>4545 East McKinley Street</p>
              <br />
              <p>Accra, Greater Accra 85008</p>
            </div>
            <article className={`${styles["map"]}`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.81036456992!2d-1.57543838573297!3d6.670405223289915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb947193f66f6f%3A0x92d4640770981ea4!2sNew%20Brunei%2C%20GUSSS%20Hostel!5e0!3m2!1sen!2sgh!4v1621018733012!5m2!1sen!2sgh"
                width="400"
                height="300"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </article>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
