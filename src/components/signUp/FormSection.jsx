import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import "./signUpCss.css";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

// Validation function
const validate = (values) => {
  const errors = {};

  if (!values.userName) {
    errors.userName = "نام کاربری نباید خالی باشد";
  } else if (values.userName.length > 15) {
    errors.userName = "Must be 15 characters or less";
  }

  if (!values.password) {
    errors.password = "رمز عبور لازم است";
  } else if (values.password.length < 8) {
    errors.password = "رمز عبور نباید کمتر از 8 کاراکتر باشد";
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
      const url = `http://127.0.0.1:8000/sign?username=${values.userName}&password=${values.password}`;

      try {
        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          if (data.success == false) setError("این یوزرنیم قبلا استفاده شده");
          else {
            setUsernameLogin(data.user);
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
            placeholder="نام کاربری"
            name="userName"
            id="userName"
            onChange={formik.handleChange}
            value={formik.values.userName}
          />
          {formik.errors.userName || Error ? (
            <div className="error flex gap-4 text-md mb-2 ml-10">
              <button onClick={() => navigate('/forget')} className="text-sm font-medium text-primary-600 text-center hover:underline text-gray-600">
                فراموشی رمز؟
              </button>
              {Error
                ? "(!نام کاربری دیگری استفاده کنید) این یوزرنیم قبلا استفاده شده"
                : formik.errors.userName}
            </div>
          ) : null}
          <input
            type="password"
            placeholder="رمز عبور"
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
            ثبت نام
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormSection;
