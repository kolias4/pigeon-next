import dateFormatFull from "./dateFormatFull"
//NOTE expects formated string dates to compare
const isDateBetween = (now,start,end)=> {

    now = now || dateFormatFull(new Date())

    return  (( now >= start) && (now <= end ) ) 





}

export default isDateBetween