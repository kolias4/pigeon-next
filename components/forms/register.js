import {Form} from 'react-bootstrap'
 import { useFormik } from 'formik';

const RegisterForm = ({}) => {


  const validate = (values) => {
  const errors = {};

  // if (!values.email) {
  //   errors.email = 'Required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address';
  // }

  if(!values.firstName){
    errors.firstName = "Υποχρετωτικό πεδίο"
  }

  return errors;
};


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      console.log(values)
    },
  });

  return (

    <div>
    <h3>RegisterForm</h3>

    <Form noValidate onSubmit={formik.handleSubmit}>

    <Form.Group controlId="firstName">
             <Form.Label>First name</Form.Label>
             <Form.Control
               type="text"

               name="firstName"
               value={formik.values.firstName}
               onChange={formik.handleChange}
               isInValid={formik.touched.firstName && formik.errors.firstName}
             />
             <Form.Control.Feedback style={{color:'red'}} type="invalid">
                 {formik.errors.firstName}
               </Form.Control.Feedback>
           </Form.Group>

           <button type="submit">SUBMTI</button>

    </Form>

    </div>


  )
}


export default RegisterForm;
