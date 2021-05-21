import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import styles from "../styles/Contact.module.scss";
import Button from "./../components/elements/Button";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  const PageHeader = {
    title: "In augue erat placerat cursus sit pulvinar.",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contactFormSubmit`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    try {
      const response = await axios(config);
      console.log(response);
      if (response.status === 200) {
        reset();
        console.log("Success");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Head>
        <title>Envision Digital - Contact</title>
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
          <div className={`${styles["contact-info"]}`}>
            <div className={`${styles["contact-info-buttons"]}`}>
              <div href="#">
                <p>Call 0 (233) 500 000 000</p>
              </div>
              <div href="#">
                <p>info@envisiondigitals.com</p>
              </div>
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
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </article>
          </div>

          <div className={`${styles["contact-form"]}`}>
            <h2 className="center">A schedule that adapts to you!</h2>
            <div>
              {/* //////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////// */}
              <form
                className="container-3"
                onSubmit={handleSubmit(onSubmitForm)}
              >
                <div className="form-row">
                  <div className="form-row-name">
                    <label className="form-label" htmlFor="fullName">
                      Full name
                    </label>
                    <input
                      {...register("fullName", {
                        required: true,
                        pattern: /^^[a-z ,.'-]+$/i,
                      })}
                      type="text"
                      className="form-control"
                      name="fullName"
                      id="fullName"
                      placeholder="Jane Doe"
                    />

                    {errors.fullName?.type === "required" && (
                      <span className="form-error">
                        <i
                          class="fa fa-exclamation-circle"
                          aria-hidden="true"
                        ></i>
                        {" "}You must enter your name
                      </span>
                    )}
                    {errors.fullName?.type === "pattern" && (
                      <span className="form-error">
                        <i
                          class="fa fa-exclamation-circle"
                          aria-hidden="true"
                        ></i>
                        {" "}You must enter your name
                      </span>
                    )}
                  </div>
                  <div className="form-row-email">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      {...register("email", {
                        required: true,
                        minLength: 10,
                        maxLength: 120,
                      })}
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="someone@mail.com"
                    />
                    {errors.email?.type === "required" && (
                      <span className="form-error">
                        <i
                          class="fa fa-exclamation-circle"
                          aria-hidden="true"
                        ></i>
                        {" "}You need to enter a valid email address
                      </span>
                    )}
                    {errors.email?.type === "minLength" && (
                      <span className="form-error">
                        <i
                          class="fa fa-exclamation-circle"
                          aria-hidden="true"
                        ></i>
                        {" "}You need to enter a valid email address
                      </span>
                    )}
                    {errors.email?.type === "maxLength" && (
                      <span className="form-error">
                        <i
                          class="fa fa-exclamation-circle"
                          aria-hidden="true"
                        ></i>
                        {" "}You need to enter a valid email address
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-row-org">
                  <label className="form-label" htmlFor="organisationName">
                    Name of Organisation
                  </label>
                  <input
                    {...register("organisationName", {
                      required: true,
                      minLength: 4,
                    })}
                    type="text"
                    className="form-control"
                    name="organisationName"
                    id="organisationName"
                    placeholder="eg. Envision Digital"
                  />
                  {errors.organisationName?.type === "required" && (
                      <span className="form-error">
                        <i
                          class="fa fa-exclamation-circle"
                          aria-hidden="true"
                        ></i>
                        {" "}You need to enter your organisation name
                      </span>
                    )}
                  {errors.organisationName?.type === "minLength" && (
                      <span className="form-error">
                        <i
                          class="fa fa-exclamation-circle"
                          aria-hidden="true"
                        ></i>
                        {" "}This is not long enough to be an organisation name
                      </span>
                    )}
                </div>

                <div className="form-row-enterprise">
                  <label className="form-label" htmlFor="enterpriseType">
                    Choose enterprise type
                  </label>
                  <select
                    {...register("enterpriseType")}
                    id="enterpriseType"
                    className="form-control"
                  >
                    <option defaultValue>-- select an option --</option>
                    <option>Media buyer</option>
                    <option>Corporate</option>
                    <option>Student</option>
                  </select>
                </div>

                <div className="form-row-locations">
                  <label className="form-label" htmlFor="adLocation">
                    Which campuses do you want to advertise?
                  </label>
                  <div className="form-check">
                    <input
                      {...register("KNUST")}
                      className="form-check-input"
                      type="checkbox"
                      value="KNUST"
                      name="KNUST"
                      id="KNUST"
                    />
                    <label htmlFor="KNUST">KNUST</label>
                  </div>
                  <div className="form-check">
                    <input
                      {...register("UG")}
                      className="form-check-input"
                      type="checkbox"
                      value="UG, Legon"
                      name="UG"
                      id="UG"
                    />
                    <label htmlFor="UG">UG, Legon</label>
                  </div>
                  <div className="form-check">
                    <input
                      {...register("UCC")}
                      className="form-check-input"
                      type="checkbox"
                      value="UCC"
                      name="UCC"
                      id="UCC"
                    />
                    <label htmlFor="UCC">UCC</label>
                  </div>
                  <div className="form-check">
                    <input
                      {...register("UPSA")}
                      className="form-check-input"
                      type="checkbox"
                      value="UPSA"
                      name="UPSA"
                      id="UPSA"
                    />
                    <label htmlFor="UPSA">UPSA</label>
                  </div>
                  <div className="form-check">
                    <input
                      {...register("Ashesi")}
                      className="form-check-input"
                      type="checkbox"
                      value="Ashesi"
                      name="Ashesi"
                      id="Ashesi"
                    />
                    <label htmlFor="Ashesi">Ashesi</label>
                  </div>
                </div>

                <div className="button-submit">
                  <Button blue={true} type="submit">
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
