import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import styles from "./../styles/Faq.module.scss";

const Faq = () => {
  const PageHeader = {
    title: "Answers to your most frequent questions",
  };

  return (
    <>
      <Head>
        <title>Envision Digital | FAQs</title>
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
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
      </Head>

      <section className="page-header">
        <Navbar />
        <Header data={PageHeader} />
      </section>

      <section className="container">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is Envision Digital?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
            >
              <div class="accordion-body">
                <strong>Envision Digital is a student-run campus-based advertising organisation.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. 
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Where can I find Envision Digital offices?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
            >
              <div class="accordion-body">
                <strong>Envision Digital does not currently have an official office space but you can contact as <a href="/contact">here</a>.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How are the pricing for advertising with Envision Digital?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
            >
              <div class="accordion-body">
                <strong>Pricing for advertisement varies based on various factors such as period of run for instance.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance.
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Is advertising with Envision Digital difficult?
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
            >
              <div class="accordion-body">
                <strong>Pricing for advertisement varies based on various factors such as period of run for instance.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance.
                overflow.
              </div>
            </div>
          </div>
          
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Are you a student and want to work for Envision Digital?
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
            >
              <div class="accordion-body">
                <strong>Pricing for advertisement varies based on various factors such as period of run for instance.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance.
                overflow.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
