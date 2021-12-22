// ANCHOR: React
import * as React from 'react';

// ANCHOR: Formik
import { Formik, Form, Field, ErrorMessage } from 'formik';

// ANCHOR: Request
import { userRegisterRequest } from '@requests/index';

// ANCHOR: Login Page
export default () => {
  return (
     <Formik
       initialValues={{ name: '', email: '', password: '' }}
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
          const user = await userRegisterRequest(values);
          alert(user);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field name="name" placeholder="Name" />
           <ErrorMessage name="name" component="div" />
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
};
