import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import styles from "../styles/Book.module.scss";
import Button from "./../components/elements/Button";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  const PageHeader = {
    title: "Book an appointment",
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
        swal({
          title: "You are all good!",
          text: "Your Ad slot was successfully booked!",
          icon: "success",
          buttons: false,
          timer: 2500,
        });
        console.log("Success");
      }
    } catch (err) {
      swal({
        title: "Submission failed",
        text: "An error occurred, please try again!",
        icon: "error",
        buttons: false,
        timer: 3500,
      });
      console.error(err);
    }
  }

  return (
    <>
      <Head>
        <title>Envision Digital - Contact</title>
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
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
        />
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
      </Head>

      <section className="page-header">
        <Navbar />
        <Header data={PageHeader} />
      </section>
      <section>
      
        <section>
          <div className={`${styles["contact-form"]}`}>
            <h4 className={`center ${styles["tag"]}`}>
              WE'LL get back to you quick
            </h4>
            <div>
              {/* CONTACT FORM STARTS HERE */}

              <form
                className="container-4"
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
                      <span className="form-alert">
                        <i
                          class="fa fa-exclamation-circle"
                          aria-hidden="true"
                        ></i>{" "}
                        You need to enter your name
                      </span>
                    )}
                    {errors.fullName?.type === "pattern" && (
                      <span className="form-alert">
                        <i
                          class="fa fa-exclamation-circle"
                          aria-hidden="true"
                        ></i>{" "}
                        You need to enter your name
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
                      <span className="form-alert">
                        <i
                          class="fa fa-exclamation-circle"
                          aria-hidden="true"
                        ></i>{" "}
                        You need to enter a valid email address
                      </span>
                    )}
                    {errors.email?.type === "minLength" && (
                      <span className="form-alert">
                        <i
                          class="fa fa-exclamation-circle"
                          aria-hidden="true"
                        ></i>{" "}
                        You need to enter a valid email address
                      </span>
                    )}
                    {errors.email?.type === "maxLength" && (
                      <span className="form-alert">
                        <i
                          class="fa fa-exclamation-circle"
                          aria-hidden="true"
                        ></i>{" "}
                        You need to enter a valid email address
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
                    <span className="form-alert">
                      <i
                        class="fa fa-exclamation-circle"
                        aria-hidden="true"
                      ></i>{" "}
                      You need to enter your organisation name
                    </span>
                  )}
                  {errors.organisationName?.type === "minLength" && (
                    <span className="form-alert">
                      <i
                        class="fa fa-exclamation-circle"
                        aria-hidden="true"
                      ></i>{" "}
                      This is not long enough to be an organisation name
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
                    Book
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
