import {Form} from 'react-bootstrap'
import { useFormik } from 'formik';
import jfetcher from '../../functions/jfetcher';

export default function SetPhone({setUser}){

    const validate = (values) => {
        const errors = {};
     
      
        if(!values.phone){
          errors.phone = "Υποχρεωτικό πεδίο"
        }
      
        return errors;
      };

      const formik = useFormik({
        initialValues: {
           phone:''
        },
        validate,
        onSubmit: values => {
          console.log(values)
          let token = localStorage.getItem("usertoken")
          if(!token){
              alert("Πρέπει να συνδεθείτε")
              return;
          }
          token = JSON.parse(token)

          jfetcher({url:`${process.env.NEXT_PUBLIC_STRAPI_URL}/setphone`,method:'POST',body:{phone:values.phone},token})
          .then(res => {
              console.log(res)
              setUser(res)
          }).catch(err => {
              console.log(err,"err")
          })
    
 
    
        },
      });
    
    return (
        <div>
        <h5>Συμπληρώστε το τηλέφωνο σας για να συμμετάσχετε στη Δημοπρασία</h5>

        <Form noValidate onSubmit={formik.handleSubmit}>


              <Form.Group controlId="phone">
                       <Form.Label>Τηλέφωνο</Form.Label>
                       <Form.Control
                         type="tel"

                         name="phone"
                         value={formik.values.phone}
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         isInValid={formik.touched.phone && formik.errors.phone}
                       />
                       <Form.Control.Feedback  type="invalid">
                           {formik.touched.phone && formik.errors.phone}
                         </Form.Control.Feedback>
                     </Form.Group>

    

       <button className="btn " type="submit">Αποστολή</button>

</Form>
     

        </div>
    )
}