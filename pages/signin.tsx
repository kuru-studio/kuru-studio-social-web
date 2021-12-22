// ANCHOR: React
import * as React from 'react';

// ANCHOR: Redux
import { useSelector, useDispatch } from 'react-redux';

// ANCHOR: Request
import { userLoginRequest } from '@requests/index';

// ANCHOR: Utilities
import { setUserToken } from '@utilities/setUserToken';
import { clearUserToken } from '@utilities/clearUserToken';

// ANCHOR: Formik
import { Formik, Form, Field, ErrorMessage } from 'formik';

// ANCHOR: Interface
interface IRootState {
  userToken: string | null;
}

// ANCHOR: Login Page
export default () => {
  const dispatch = useDispatch();

  const token = useSelector((state: IRootState) => state.userToken);

  const handleLogOut = (event) => {
    event.preventDefault();
    clearUserToken();
  }

  const SignedInComponent = () => {
    return (
      <div>
        <button onClick={handleLogOut}>Log Out</button>
      </div>
    );
  }

  const SignedOutComponent = () => {
    return (
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={async (values) => {
          const user = await userLoginRequest(values);
          const token = user.signinUser.token;
          setUserToken(token);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />
           <Field type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
    );
  }

  return (
    <React.Fragment>{token != null ? <SignedInComponent /> : <SignedOutComponent />}</React.Fragment>
  );
};
