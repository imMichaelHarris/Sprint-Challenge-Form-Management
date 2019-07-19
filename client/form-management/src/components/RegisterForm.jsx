import React from 'react';
import {withFormik, Form, Field} from 'formik'

const RegisterForm = () => {
    return (
        <div>
            <Form>
                <label>Username <Field name="username" placholder="Username" /></label>
            </Form>
        </div>
    );
};

export default withFormik({
    mapPropsToValues(){
        return {
            username: "test"
        }
    }
})(RegisterForm);