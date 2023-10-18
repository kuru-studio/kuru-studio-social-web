"use client";
import React from 'react';
import { withFormik } from 'formik';

const LoginField = ({ type, name, label, value, onChange, onBlur, error, touched }) => (
  <div>
    <label>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
    {error && touched && <div id="feedback">{error}</div>}
  </div>
);

const LoginForm = ({
  values, touched, errors, handleChange, handleBlur, handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <LoginField
      type="email"
      name="email"
      label="Email"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      error={errors.email}
      touched={touched.email}
    />
    <LoginField
      type="password"
      name="password"
      label="Password"
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
      error={errors.password}
      touched={touched.password}
    />

    <button type="submit">Login</button>
  </form>
);

const LoginFormik = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),

  validate: values => {
    const errors = {};

    if (!values.email) errors.email = 'Required';
    if (!values.password) errors.password = 'Required';

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'LoginForm',
})(LoginForm);

export default async function LoginPage() {
  return (
    <div>
      <LoginFormik />
    </div>
  );
}
