import {Form} from 'react-bootstrap'
import { useFormik } from 'formik';

import fetcher from '../../functions/fetcher';


const ContactForm = ({onFail,onSuccess}) => {


  const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Υποχρεωτικό πεδίο';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Λάθος email';
  }

  if(!values.firstName){
    errors.firstName = "Υποχρεωτικό πεδίο"
  }

  if(!values.message){
    errors.message = "Υποχρεωτικό πεδίο"
  }

  return errors;
};


  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      telephone:'',
      message:''
    },
    validate,
    onSubmit: values => {
      console.log(values)

      let query = `
      mutation($email:String!,$firstName:String!,$telephone:String!,$message:String!)
      {createContactForm(input:{data:{name:$firstName,email:$email,message:$message,telephone:$telephone}}){
  contactForm{
    id
  }
}
}

      `
      fetcher(query,{
        variables:{
          email:values.email,
          firstName:values.firstName,
          telephone:values.telephone,
          message:values.message
        }
      }).then(res => {
        formik.resetForm()
        onSuccess()
      })
      .catch(err => onFail())

    },
  });

  return (

    <div>


    <Form noValidate onSubmit={formik.handleSubmit}>

    <Form.Group controlId="firstName">
             <Form.Label>Όνομα</Form.Label>
             <Form.Control
               type="text"

               name="firstName"
               value={formik.values.firstName}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               isInValid={formik.touched.firstName && formik.errors.firstName}
             />
             <Form.Control.Feedback  type="invalid">
                 {formik.touched.firstName && formik.errors.firstName}
               </Form.Control.Feedback>
           </Form.Group>

           <Form.Group controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      type="email"

                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInValid={formik.touched.email && formik.errors.email}
                    />
                    <Form.Control.Feedback  type="invalid">
                        {formik.touched.email && formik.errors.email}
                      </Form.Control.Feedback>
                  </Form.Group>


                  <Form.Group controlId="telephone">
                           <Form.Label>Τηλέφωνο</Form.Label>
                           <Form.Control
                             type="tel"

                             name="telephone"
                             value={formik.values.telephone}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             isInValid={formik.touched.telephone && formik.errors.telephone}
                           />
                           <Form.Control.Feedback  type="invalid">
                               {formik.touched.telephone && formik.errors.telephone}
                             </Form.Control.Feedback>
                         </Form.Group>

                  <Form.Group controlId="message">
                           <Form.Label>Μήνυμα</Form.Label>
                           <Form.Control

                             as="textarea"
                             rows={3}
                             name="message"
                             value={formik.values.message}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             isInValid={formik.touched.message && formik.errors.message}
                           />
                           <Form.Control.Feedback  type="invalid">
                               {formik.touched.message && formik.errors.message}
                             </Form.Control.Feedback>
                         </Form.Group>

           <button className="btn " type="submit">Αποστολή</button>

    </Form>

    </div>


  )
}


export default ContactForm;
