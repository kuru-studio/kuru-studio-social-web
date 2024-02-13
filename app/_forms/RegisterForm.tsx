"use client";
import { withFormik, FormikProps, FormikErrors, Form } from "formik";
import { Input as AntInput } from "antd";
import { show, hide } from "../_data/modal";
import Link from "next/link";
import Atom from "../_components/atoms";
import { useAppDispatch } from "../_data/hooks";
import SignInForm from "./SignInForm";

interface Values {
  email: string;
  password: string;
  username: string;
}

interface Props {}

const InnerForm = (props: FormikProps<Values>) => {
  const dispatch = useAppDispatch();

  function showSignInForm() {
    // hide current modal
    dispatch(hide());
    dispatch(show({ content: <SignInForm /> }));
  }
  return (
    <Form>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl">Create an Account</h1>
        <p>
          Create an account to access our curated lorem ipsum dolor sit amet.{" "}
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <AntInput
          name="email"
          placeholder="Email"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.email}
          status={props.touched.email && props.errors.email ? "error" : ""}
        />
        <AntInput
          name="password"
          placeholder="Password"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.password}
          status={
            props.touched.password && props.errors.password ? "error" : ""
          }
        />
        <AntInput
          name="username"
          placeholder="Username"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.username}
          status={
            props.touched.password && props.errors.password ? "error" : ""
          }
        />
        <div className="w-full text-center">
          By registering, you agree to our{" "}
          <span>
            <Link
              style={{ textDecoration: "underline" }}
              href={"/forgot-password"}
            >
              Terms of Service
            </Link>
          </span>
        </div>

        <Atom.Button type="primary">Create Account</Atom.Button>
        <div className="flex flex-row justify-between w-full">
          <p>Already have an account?</p>
          <Atom.Button
            style={{ color: "#B61D1D", fontWeight: "bold" }}
            type="text"
            onClick={showSignInForm}
          >
            Log In
          </Atom.Button>
        </div>
      </div>
    </Form>
  );
};

const RegisterForm = withFormik<Props, Values>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      email: "",
      password: "",
      username: "",
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: Values) => {
    let errors: FormikErrors<Values> = {};
    if (!values.email) errors.email = "Email is required";
    if (!values.password) errors.password = "Password is required";
    if (!values.username) errors.username = "Username is required";

    return errors;
  },

  handleSubmit: async (values) => {},
})(InnerForm);

export default RegisterForm;
