import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";

const NotFound = () => {
  const router = useRouter();
  // useEffect(() => {
  //     setTimeout(() => {
  //         // router.go(-1) -----this method is used to send the user back to the previous page
  //         router.push('/');
  //     }, 5000)
  // }, [])

  const PageHeader = {
    title: "Oops...",
  };

  return (
    <section className="not-found page-header">
      <Navbar />
      <Header data={PageHeader} />
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the <Link href="/">Homepage</Link>
      </p>
    </section>
  );
};

export default NotFound;
