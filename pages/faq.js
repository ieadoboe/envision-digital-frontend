import Head from "next/head";

//COMPONENTS
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import CtaSection from "../components/sections/CtaSection";

//FAQ PAGE CSS
import styles from "./../styles/Faq.module.scss";

const Faq = () => {
  const PageHeader = {
    title: "Answers to your most frequent questions",
  };

  return (
    <>
      <Head>
        <title>Envision Digital - FAQs</title>
        <meta name="keywords" content="digital" />
        {/* <html lang="en"></html> */}
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
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js"></script>
      </Head>

      <section className={`${styles["questions-section"]}`}>
        <section className="page-header">
          <Navbar />
          <Header data={PageHeader} />
        </section>

        <section className="container-5">
          <h2 className={`center ${styles["accordion-section-title"]}`}>
            Frequently asked questions
          </h2>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h3 className="accordion-header">
                <div
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What is Envision Digital?
                </div>
              </h3>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
              >
                <div className="accordion-body">
                  <strong>
                    Envision Digital is a student-run campus-based advertising
                    organization.
                  </strong>{" "}
                  It is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingTwo">
                <div
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Where can I find Envision Digital offices?
                </div>
              </h3>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
              >
                <div className="accordion-body">
                  <strong>
                    Envision Digital does not currently have an official office
                    space but you can contact as <a href="/contact">here</a>.
                  </strong>{" "}
                  It is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingThree">
                <div
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How are the pricing for advertising with Envision Digital?
                </div>
              </h3>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
              >
                <div className="accordion-body">
                  <strong>
                    Pricing for advertisement varies based on various factors
                    such as period of run for instance.
                  </strong>{" "}
                  It is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance. overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingFour">
                <div
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Is advertising with Envision Digital difficult?
                </div>
              </h3>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
              >
                <div className="accordion-body">
                  <strong>
                    Pricing for advertisement varies based on various factors
                    such as period of run for instance.
                  </strong>{" "}
                  It is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance. overflow.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h3 className="accordion-header" id="headingFive">
                <div
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Are you a student and want to work for Envision Digital?
                </div>
              </h3>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
              >
                <div className="accordion-body">
                  <strong>
                    Pricing for advertisement varies based on various factors
                    such as period of run for instance.
                  </strong>{" "}
                  It is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance. overflow.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles["cta-section"]}`}>
        <CtaSection />
      </section>
      </section>
    </>
  );
};

export default Faq;
