import {Form} from 'react-bootstrap'
 import { useFormik } from 'formik';
 import registermutation from '../../functions/queries/registermutation'

const RegisterForm = ({onFail,onSuccess,setUser}) => {


  const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Υποχρετωτικό πεδίο';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Λάθος email';
  }

  if(!values.firstName){
    errors.firstName = "Υποχρετωτικό πεδίο"
  }

  if(!values.password){
    errors.password = "Υποχρετωτικό πεδίο"
  }

  return errors;
};


  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      password:''
    },
    validate,
    onSubmit: values => {
      console.log(values)
      registermutation(values.firstName,values.email,values.password).then(res => {
        console.log(res,"res register")
        localStorage.setItem("usertoken",JSON.stringify(res.register.jwt))
        setUser(res.register.user)
        onSuccess()
      })
      .catch(err => {
        console.log(err,"error")
        onFail()
      })
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

                  <Form.Group controlId="password">
                           <Form.Label>Κωδικός</Form.Label>
                           <Form.Control
                             type="password"

                             name="password"
                             value={formik.values.password}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             isInValid={formik.touched.password && formik.errors.password}
                           />
                           <Form.Control.Feedback  type="invalid">
                               {formik.touched.password && formik.errors.password}
                             </Form.Control.Feedback>
                         </Form.Group>

           <button className="btn " type="submit">Υποβολή</button>

    </Form>

    </div>


  )
}


export default RegisterForm;
