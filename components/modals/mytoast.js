import {Toast} from 'react-bootstrap'

function MyToast ({show,closefunc,message,success,fail}){

  return (
    <Toast   style={{
      position: 'fixed',
      top: "100px",
      right: "70px",
      zIndex:500
    }} onClose={() => closefunc()} show={show} delay={7000} autohide>
            <Toast.Header>
              <div className="d-flex align-items-center justify-content-center p-2 w-100">
       {success? <i style={{color:'green',fontSize:'2rem'}} className="fa fa-check"></i> : null}
       {fail ? <i style={{color:'red',fontSize:'2rem'}} className="fa fa-exclamation-triangle"></i> :null}
       </div>
            </Toast.Header>
            <Toast.Body>
              <p className="text-justify">
              {message}
              </p>
            </Toast.Body>
      </Toast>

  )
}

export default MyToast
