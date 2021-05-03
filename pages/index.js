import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./../components/Navbar";
import styles from "./../styles/Home.module.scss";
import SectionHeader from "./../components/SectionHeader";

const Home = () => {
  const sectionHeader = {
    title: "CAMPUSES",
    paragraph: "Present on these Campuses",
  };
  return (
    <>
      <Head>
        <title>Envision Digital | Home</title>
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

      <section className={`page-header ${styles["hero-section"]}`}>
        <Navbar />
        <div className={`container ${styles["hero-section-inner"]}`}>
          <h1>Reach your most important customers with ease</h1>
          <p>We help businesses reach a more targeted audience.</p>
          <div>
            <Link href="/contact">
              <a className="btn-primary-long">Contact</a>
            </Link>
          </div>
        </div>
      </section>
      <section className={`container section-basics`}>
        <SectionHeader data={sectionHeader} />
        <ul className={`list-reset ${styles["campuses"]}`}>
          <li>
            <div>
              <Image
                src="/knust_logo.png"
                width={95}
                height={120}
                alt="knust logo"
                layout="fixed"
              />
            </div>

            <p>KNUST</p>
          </li>
          <li>
            <div>
              <Image
                src="/ucc_logo.png"
                width={110}
                height={120}
                alt="ucc logo"
                layout="fixed"
              />
            </div>

            <p>UCC</p>
          </li>
          <li>
            <div>
              <Image
                src="/ug_logo.png"
                width={105}
                height={120}
                alt="ug legon logo"
                layout="fixed"
              />
            </div>

            <p>UG, Legon</p>
          </li>
          <li>
            <div>
              <Image
                src="/upsa_logo.png"
                width={100}
                height={120}
                alt="upsa logo"
                layout="fixed"
              />
            </div>

            <p>UPSA</p>
          </li>
          <li>
            <div>
              <Image
                src="/ashesi_logo.png"
                width={130}
                height={120}
                alt="ashesi logo"
                layout="fixed"
              />
            </div>
            <p>Ashesi</p>
          </li>
        </ul>
      </section>
      <section>
      <SectionHeader data={sectionHeader} />

      </section>
    </>
  );
};

export default Home;
