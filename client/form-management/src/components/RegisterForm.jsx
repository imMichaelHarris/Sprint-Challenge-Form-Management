import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup'

const RegisterForm = () => {
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
  }
})(RegisterForm);
