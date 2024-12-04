import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import "./signUpCss.css";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

// Validation function
const validate = (values) => {
  const errors = {};

  if (!values.userName) {
    errors.userName = "First Name cannot be empty";
  } else if (values.userName.length > 15) {
    errors.userName = "Must be 15 characters or less";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must not be less than 8 characters";
  }

  return errors;
};

function FormSection() {
  const { usernameLogin, setUsernameLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const [Error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "", // Include the password field here
    },
    validate,
    onSubmit: async (values) => {
      console.log(values);
      const url = `http://127.0.0.1:8000/sign?username=${values.userName}&password=${values.password}`;

      try {
        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          if (data.success == false) setError("invalid username");
          else {
            setUsernameLogin(values.userName);
            navigate("/");
          }
        }
      } catch (error) {
        // console.error("Fetch error:", error);
        // setError("Something went wrong. Please try again later.");
      }
    },
  });

  return (
    <div className="section-container ">
      {/* <button className="trial-btn text-white cursor-pointer">
        <span className="text-bold">Try it free 7 days</span> then
        \$20/mo.thereafter
      </button> */}
      <div className="form-container">
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            placeholder="user name"
            name="userName"
            id="userName"
            onChange={formik.handleChange}
            value={formik.values.userName}
          />
          {formik.errors.userName || Error ? (
            <div className="error">
              {Error ? "invalid username" : formik.errors.userName}
            </div>
          ) : null}
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password} // Ensure this is linked to Formik
          />
          {formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
          <button
            type="submit"
            className="submit-btn text-white cursor-pointer"
          >
            CLAIM YOUR FREE TRIAL
          </button>
        </form>
        <p className="terms-text">
          By clicking the button, you are agreeing to our&nbsp;
          <a href="nothing" className="terms-link">
            Terms and Services
          </a>
        </p>
      </div>
    </div>
  );
}

export default FormSection;
