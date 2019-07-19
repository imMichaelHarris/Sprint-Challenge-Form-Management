import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterForm = ({}) => {
  //   console.log(message);

  return (
    <div>
      <Form className="form">
        <header>
          <h1>Register</h1>
        </header>
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

  handleSubmit(values, submitProps) {
    const { setToken } = submitProps.props;
    console.log(submitProps);
    axios
      .post("http://localhost:5000/api/register", values)
      .then(res => {
        const message = res.data;
        setToken(res.data.token);
        submitProps.resetForm();
        // submitProps.history.push("/recipes")
      })
      .catch(err => console.log(err));
  }
})(RegisterForm);
