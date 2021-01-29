import {Modal,Button} from "react-bootstrap"

const MyModal = ({reveal,setReveal,children,title,contentClassName}) => {

  return (

    <Modal contentClassName={contentClassName} show={reveal} onHide={() => setReveal(false)}>
     <Modal.Header closeButton>
     <h4 className="m-0">{title}</h4>

     </Modal.Header>
     <Modal.Body>
     {children}
     </Modal.Body>

   </Modal>



  )
}

export default MyModal
