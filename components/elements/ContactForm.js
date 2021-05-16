import React, { Component } from "react";
import styles from "./../../styles/Button.module.scss";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  render() {
    return (
      <>
        <form>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="validationCustom01">First name</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                placeholder="First name"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationCustom02">Last name</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                placeholder="Last name"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputState">Choose enterprise type</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>Media buyer</option>
                <option>Corporate</option>
                <option>Student</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Where do you want to advertise?</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  KNUST
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck2"
                />
                <label class="form-check-label" for="defaultCheck2">
                  UG, Legon
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck3"
                />
                <label class="form-check-label" for="defaultCheck3">
                  UCC
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck4"
                />
                <label class="form-check-label" for="defaultCheck4">
                  UPSA
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck5"
                />
                <label class="form-check-label" for="defaultCheck5">
                  Ashesi
                </label>
              </div>
            </div>
          </div>
          <button className={`${styles["button"]}`} type="submit">
            Send message
          </button>
        </form>
      </>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {}
}

export default ContactForm;
