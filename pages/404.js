import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import styles from "../styles/404.module.scss";
import Image from "next/dist/client/image";
import Head from "next/dist/next-server/lib/head";
import Button from "../components/elements/Button";

const NotFound = () => {
  const router = useRouter();
  // useEffect(() => {
  //     setTimeout(() => {
  //         // router.go(-1) -----this method is used to send the user back to the previous page
  //         router.push('/');
  //     }, 5000)
  // }, [])

  return (
    <>
      <Head>
        <title>Page not found</title>
        <meta name="keywords" content="digital error" />
        <meta
          name="description"
          content="digital advertisement in university campuses ghana"
        />
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
        <meta name="theme-color" content="#eb5634" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
        />
      </Head>
      
      <section className="navbar not-found page-header">
        <Navbar />
      </section>

      <section className={`container-2 ${styles["error-section"]}`}>
        <div className={`container-2 ${styles["error-image"]}`}>
          <Image
            src="/error-image.png"
            width={346}
            height={300.333}
            alt="students icon"
            layout="responsive"
          />
        </div>
        <div className={`${styles["error-text"]}`}>
          <h2>That page cannot be found.</h2>
          <p>
            Go back to the{" "}
            <a href="/">
              <Button>Homepage</Button>
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default NotFound;
