"use client";
import { withFormik, FormikProps, FormikErrors, Form } from "formik";
import { Input as AntInput } from "antd";
import Link from "next/link";
import Atom from "../_components/atoms";

interface Values {
  email: string;
  password: string;
}

interface Props {}

const InnerForm = (props: FormikProps<Values>) => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    setFieldValue,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <Form>
      <div>
        <h1 className="font-bold text-xl">Log-In</h1>
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
        <Link href={"/forgot-password"}>
          <div className="w-full text-right text-neutral-500 underline">
            Forgot your password?
          </div>
        </Link>
        <Atom.Button type="primary">Log In</Atom.Button>
        <div className="flex flex-row justify-between w-full">
          <p>Don't have an account?</p>
          <Atom.Button
            style={{ color: "#B61D1D", fontWeight: "bold" }}
            type="text"
          >
            Register
          </Atom.Button>
        </div>
      </div>
    </Form>
  );
};

const SignInForm = withFormik<Props, Values>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      email: "",
      password: "",
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: Values) => {
    let errors: FormikErrors<Values> = {};
    if (!values.email) errors.email = "Email is required";
    if (!values.password) errors.password = "Password is required";

    return errors;
  },

  handleSubmit: async (values) => {},
})(InnerForm);

export default SignInForm;
