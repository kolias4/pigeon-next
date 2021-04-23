import Countdown from 'react-countdown';
import {memo} from 'react'


function timerPropsAreEqual(prevProps, nextProps){
return prevProps.now === nextProps.now
  && prevProps.event === nextProps.event
}

const BidTimer = ({now,event}) => {

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
       
         <div className="d-flex align-items-center flex-wrap ">
          <span className="font-weight-bold">Απομένουν :</span>
         
          <span className="font-weight-bold mx-1">{days} Ημέρες,</span>
          <span className="font-weight-bold mx-1">{hours} Ώρες,</span>
          <span className="font-weight-bold mx-1">{minutes} Λεπτά,</span>
          <span className="font-weight-bold mx-1">{seconds} Δέυτερα</span>
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

export default memo(BidTimer,timerPropsAreEqual)
