import Countdown from 'react-countdown';
import {memo} from 'react'


function timerPropsAreEqual(prevProps, nextProps){
return prevProps.now === nextProps.now
  && prevProps.event === nextProps.event
}

const Timer = ({now,event,kill}) => {

  if(!now || !event ){
    return null
  }



  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    // return <Completionist />;
    return null;
  } else {
    // Render a countdown
    return(
      <div className="countdowncontainer d-flex flex-column justify-content-center align-items-center">
      <h3 className="p-0 m-0">{event.title}</h3>
     <div style={{fontSize:'2rem'}} className="d-flex align-items-center justify-content-center font-weight-bold">
       <div className="text-center mx-2">
       <h5 className="text-dark">Ημέρες</h5>
       <span className="text-danger font-weight-bold" style={{fontSize:'2rem'}}>{days}</span>
       </div>
       <div className="text-center mx-2">
       <h5 className="text-dark">Ώρες</h5>
       <span className="text-danger font-weight-bold" style={{fontSize:'2rem'}}>{hours}</span>
       </div>
       <div className="text-center mx-2">
       <h5 className="text-dark">Λεπτά</h5>
       <span className="text-danger font-weight-bold" style={{fontSize:'2rem'}}>{minutes}</span>
       </div>
       <div className="text-center mx-2">
       <h5 className="text-dark">Δεύτερα</h5>
       <span className="text-danger font-weight-bold" style={{fontSize:'2rem'}} >{seconds}</span>
       </div>

      </div>
      <div onClick={() => kill()} style={{position:'absolute',right:'5px',top:'10px'}} className="icon hoverable">
        <i style={{color:'white',fontSize:'2rem'}} className="fa fa-times"></i>
      </div>
      </div>
    )
  }
};

  return (

    <Countdown
   date={Date.now() + (new Date(event.end).getTime() - new Date(now).getTime())}
   renderer={renderer}
 />

  )
}

export default memo(Timer,timerPropsAreEqual)
