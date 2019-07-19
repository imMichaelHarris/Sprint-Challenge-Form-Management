import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterForm = ({ message }) => {
  console.log(message);
  return (
    <div>
      <Form>
        <label>
          Username <Field name="username" placholder="Username" />
        </label>
        <label>
          Password{" "}
          <Field name="password" placholder="password" type="password" />
        </label>
        <button>Register</button>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(6)
      .required(),
    password: Yup.string()
      .min(6)
      .required()
  }),

  handleSubmit(values) {
    axios
      .post("http://localhost:5000/api/register", values)
      .then(res => {
        console.log("success", res);
        const message = res.data;
        localStorage.setItem("token", res.data.token);
      })
      .catch(err => console.log(err.response));
  }
})(RegisterForm);
