import React from 'react'
import './index.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from './Schema';

function Contact() {

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword:'',
  };

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };

  return (
   <>
    <div> 
        <h1 className='userData'> Please fill the form....</h1>
      </div>

    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}

    >
      
      <Form className='formStyle'>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>
        <div>
          <label htmlFor="confirmPassword"> Confirm-Password</label>
          <Field type="confirmPassword" id="confirmPassword" name="confirmPassword" />
          <ErrorMessage name="confirmPassword" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </>
  );
}

export default Contact
