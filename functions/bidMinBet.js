
export default function bidMinBet(currentprice){

    if(currentprice <= 500){
        return currentprice + 10
    }

    else if(currentprice <= 1000){
       return currentprice + 20
    }

    else if(currentprice <= 5000){
        return currentprice + 50
     }

     else{
         return currentprice + 100
     }
    
}