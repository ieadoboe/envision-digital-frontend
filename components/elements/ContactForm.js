import Button from "./Button";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit, errors, reset } = useForm();
  
  function onSubmitForm(values) {
    console.log(values);
  }
  return (
    <>
      <form className="container-3" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-row-name">
            <label className="form-label" htmlFor="fullName">
              Full name
            </label>
            <input
              ref={register({
                required: {
                  value: true,
                  message: "You must enter your name",
                },
              })}
              type="text"
              className="form-control"
              name="fullName"
              id="fullName"
              placeholder="Full name"
            />
          </div>
          <div className="form-row-email">
            <label htmlFor="Email">Email</label>
            <input
              // ref={register({
              //   required: {
              //     value: true,
              //     message: "You must enter your email address",
              //   },
              //   minLength: {
              //     value: 8,
              //     message: 'This is not long enough to be an email',
              //   },
              //   maxLength: {
              //     value: 120,
              //     message: 'This is too long to be an email',
              //   }
              // })}
              type="email"
              className="form-control"
              name="Email"
              id="Email"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="form-row-org">
          <label htmlFor="organisationName">Name of Organisation</label>
          <input
            // ref={register}
            type="text"
            className="form-control"
            name="organisationName"
            id="organisationName"
            placeholder="Name of Organisation"
            required
          />
        </div>

        <div className="form-row-enterprise">
          <label htmlFor="enterpriseType">Choose enterprise type</label>
          <select
            // ref={register}
            id="enterpriseType"
            className="form-control"
            required
          >
            <option selected>Choose...</option>
            <option>Media buyer</option>
            <option>Corporate</option>
            <option>Student</option>
          </select>
        </div>

        <div className="form-row-locations">
          <label htmlFor="adLocation">Which campuses do you want to advertise?</label>
          <div className="form-check">
            <input
              // ref={register}
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
              // ref={register}
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
              // ref={register}
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
              // ref={register}
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
              // ref={register}
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
    </>
  );
}
