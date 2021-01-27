import {Modal,Button} from "react-bootstrap"

const MyModal = ({reveal,setReveal,children,title}) => {

  return (

    <Modal show={reveal} onHide={() => setReveal(false)}>
     <Modal.Header closeButton>
     <h4 className="m-0">{title}</h4>

     </Modal.Header>
     <Modal.Body>
     {children}
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={() => setReveal(false)}>
         Close
       </Button>
       <Button variant="primary" onClick={() => setReveal(false)}>
         Save Changes
       </Button>
     </Modal.Footer>
   </Modal>



  )
}

export default MyModal
