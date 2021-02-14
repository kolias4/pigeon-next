import {Form} from 'react-bootstrap'
import { useFormik } from 'formik';
import Link from 'next/link'

import fetcher from '../../functions/fetcher';

const PigeonOffer = ({onFail,onSuccess,pigeon_id,user}) => {

  const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Υποχρεωτικό πεδίο';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Λάθος email';
  }


  if(!values.firstname){
    errors.firstname = "Υποχρεωτικό πεδίο"
  }

  if(!values.lastname){
    errors.lastname = "Υποχρεωτικό πεδίο"
  }

  if(!values.telephone){
    errors.telephone = "Υποχρεωτικό πεδίο"
  }

  if(!values.terms){
    errors.terms = "Υποχρεωτικό πεδίο"
  }

  return errors;
};

const formik = useFormik({
  initialValues: {
    firstname:'',
    lastname:'',
    telephone:'',
    email:user && user.email || "",
    terms:false
    },
  validate,
  onSubmit: values => {
    console.log(values)
  

    let query = `
    mutation($email:String!,$firstname:String!,$lastname:String!,$telephone:String!,$id:ID){
      createPigeonoffer(input:{data:{firstname:$firstname,lastname:$lastname,email:$email,telephone:$telephone,pigeon:$id}}){
    pigeonoffer{
      id

    }
  }

}
    `

    fetcher(query,{
      variables:{
        email:values.email,
        firstname:values.firstname,
        lastname:values.lastname,
        telephone:values.telephone,
        id:pigeon_id
      }
    }).then(res => {
        formik.resetForm()
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

                    <Form.Group controlId="firstname">
                             <Form.Label>Ονομα</Form.Label>
                             <Form.Control
                               type="text"

                               name="firstname"
                               value={formik.values.firstname}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               isInValid={formik.touched.firstname && formik.errors.firstname}
                             />
                             <Form.Control.Feedback  type="invalid">
                                 {formik.touched.firstname && formik.errors.firstname}
                               </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="lastname">
                             <Form.Label>Επώνυμο</Form.Label>
                             <Form.Control
                               type="text"

                               name="lastname"
                               value={formik.values.lastname}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               isInValid={formik.touched.lastname && formik.errors.lastname}
                             />
                             <Form.Control.Feedback  type="invalid">
                                 {formik.touched.lastname && formik.errors.lastname}
                               </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="telephone">
                             <Form.Label>Τηλέφωνο</Form.Label>
                             <Form.Control
                               type="text"

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

                    <Form.Group >
         <Form.Check
           className={`d-flex ${formik.touched.terms && formik.errors.terms?'text-danger':''}`}
           required
           name="terms"
           label={<span className="ml-2">Έχω διαβάσει και συμφωνώ με τους κανονισμούς <Link href="/oroi-agoras"><a>Αγορών</a></Link></span>}
           onChange={formik.handleChange}
           isInValid={formik.touched.terms && formik.errors.terms}
           checked={formik.values.terms}
           id="validationFormik0"

         />
       </Form.Group>

             <button className="btn " type="submit">Αγορά</button>

      </Form>

    </div>
  )
}

export default PigeonOffer
