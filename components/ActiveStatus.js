
const ActiveStatus = ({isactive}) => {

    if(isactive){
        return (
            <>
             <span style={{width:'25px',height:'25px',backgroundColor:'#28a745'}} className="border border-success rounded-circle d-inline-block"></span>
             <span style={{height:'25px'}} className="d-inline-block ml-2 text-success ">Ενεργή</span>
            </>
        )
    }

    return (
        <>
            <span style={{width:'25px',height:'25px',backgroundColor:'red'}} className="border border-danger rounded-circle d-inline-block"></span>
            <span style={{height:'25px'}} className="d-inline-block ml-2 text-danger ">Ανενεργή</span>


        </>
    )

}
export default ActiveStatus