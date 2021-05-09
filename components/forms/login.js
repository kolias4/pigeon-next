import {Form} from 'react-bootstrap'
import { useFormik } from 'formik';

import fetcher from '../../functions/fetcher';


const LoginForm = ({onFail,onSuccess,setUser}) => {


  const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Υποχρεωτικό πεδίο';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Λάθος email';
  }


  if(!values.password){
    errors.password = "Υποχρεωτικό πεδίο"
  }

  return errors;
};


  const formik = useFormik({
    initialValues: {
      email: '',
      password:''
    },
    validate,
    onSubmit: values => {
      console.log(values)

      let query = `
      mutation($email:String!,$password:String!){
login(input:{identifier:$email,password:$password}){
  jwt
  user{
    username
    email
    id
    phone
  }
}
}
      `

      fetcher(query,{
        variables:{
          email:values.email,
          password:values.password
        }
      }).then(res => {
          console.log(res,"res login")
          localStorage.setItem("usertoken",JSON.stringify(res.login.jwt))
          setUser(res.login.user)
          onSuccess()
      }).catch(err => {
          console.log(err,"error")
          onFail()

      })

    },
  });

  return (

    <div>


    <Form noValidate onSubmit={formik.handleSubmit}>



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

           <button className="btn " type="submit">Είσοδος</button>

    </Form>

    </div>


  )
}


export default LoginForm;
