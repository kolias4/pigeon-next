import Countdown from 'react-countdown';
import {memo} from 'react'


function timerPropsAreEqual(prevProps, nextProps){
  // console.log(prevProps.now === nextProps.now ,"now" )
  // console.log(prevProps.event,nextProps.event,"time")
return prevProps.now === nextProps.now
  && JSON.stringify(prevProps.event) === JSON.stringify(nextProps.event)
}

const BidTimer = ({now,event,onComplete}) => {

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
    let danger = days == 0 && hours == 0 && minutes == 0 && seconds <=60
    return(
       
         <div className={`d-flex align-items-center flex-wrap ${danger? 'text-danger':''}`}>
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
   onComplete={() => onComplete()}
   
 />

  )
}

export default memo(BidTimer,timerPropsAreEqual)
