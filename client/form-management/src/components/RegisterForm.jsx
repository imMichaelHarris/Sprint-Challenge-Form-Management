import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterForm = ({ message }) => {
  return (
    <div>
      <Form className="form">
        <header>
          <h1>Register</h1>
        </header>
        {message && <p>{message}</p>}
        <label>
          <h5>Username</h5> <Field name="username" placholder="Username" />
          <ErrorMessage component="span" name="username" />
        </label>
        <label>
          <h5>Password</h5>
          <Field name="password" placholder="password" type="password" />
          <ErrorMessage component="span" name="password" />
        </label>
        <label>
          <h5>Confirm Pass</h5>
          <Field name="confirmPass" placholder="password" type="password" />
          <ErrorMessage component="span" name="confirmPass" />
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
      password: "",
      confirmPass: ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(6, "Username must be at least 6 characters")
      .max(16, "Username cannot be more than 16 characters")
      .required(),
    password: Yup.string()
      .min(6, "Password must be minimum 6 characters")
      .max(20, "Password cannot be longer than 20 characters")
      .required(),
    confirmPass: Yup.string()
      .min(6)
      .max(20)
  }),

  handleSubmit(values, submitProps) {
    const { setToken, setMessage } = submitProps.props;
    axios
      .post("http://localhost:5000/api/register", values)
      .then(res => {
        setToken(res.data.token);
        setMessage(res.data.message);
        submitProps.resetForm();
        setTimeout(() => setMessage(), 5000);
        submitProps.props.history.push("/recipes");
      })
      .catch(err => console.log(err));
  }
})(RegisterForm);
