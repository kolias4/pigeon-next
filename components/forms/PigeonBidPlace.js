import { useEffect,useState } from "react"
import { Form } from "react-bootstrap"
import bidMinBet from "../../functions/bidMinBet"
import fetcher from "../../functions/fetcher"




const PigeonBidPlace = ({startprice,bidOffers,bidId,setToaster}) => {

    const [minprice,setminprice] = useState(0)

    const [price,setprice] = useState(0)

    const [disablebutton,setDisableButton]=useState(false)
    

    useEffect(()=>{
        const pricearr = bidOffers.map(offer => offer.price).concat(startprice)
        const max_price = Math.max( ...pricearr ) > 0 ? Math.max( ...pricearr ) : 0
        const minbet = bidMinBet(max_price)
        setminprice(minbet)
        setprice(minbet)

    },[bidOffers])

    const handlePriceChange = (val) => {
        if(val >= minprice){
            setprice(val)
        }
    }

    const handlePlaceBid = () => {
        var token = localStorage.getItem("usertoken")
        if(token){
            token = JSON.parse(token)
            // console.log(token)
        }
        else{
            alert("Not logged in")
            return;
        }
        setDisableButton(true)
       let query = `
       mutation($bid:ID!,$price:Int!){
        createBidOffer(input:{data:{bid:$bid,price:$price}}){
          bidOffer{
            id
            price
          }
        }
      }
       `
       fetcher(query,{
        variables:{
          bid:bidId,
          price:price
        }
      },token).then(res => {
          console.log(res)
        setDisableButton(false)

      })
      .catch(err => {
          console.log(err)
        setDisableButton(false)

       setToaster({show:true,message:"ΚΑΤΙ ΠΗΓΕ ΛΑΘΟΣ",fail:true});

      })

    }

    return (
        <>
        <div className="d-flex align-items-center">
        <span onClick={()=> handlePriceChange(price-10)}  style={{fontSize:'1.3rem'}} className="fa fa-minus hoverable mx-2"></span>
        <div className="currencycontainer">
            <input className="bidinput" value={price} disabled={true} type="number"/>
            <span className="currency">€</span>

        
        </div>
        <span onClick={()=> handlePriceChange(price+10)} style={{fontSize:'1.3rem'}} className="fa fa-plus hoverable mx-2"></span>

        </div>
        <div className="mt-3">
            <button disabled={disablebutton} onClick={()=> handlePlaceBid() } className="btn btn-second color-hover-main mt-auto">
                Χτύπημα <span className="fa fa-gavel"></span>
            </button>
        </div>
        <style jsx>{`
        .currencycontainer{
            max-width:100px;
            position:relative;
        }
            .bidinput{
                width:100%;
                text-align:center;
                height:50px;
                font-weight:bold;
                font-size:1.3rem;
                padding-right:20px;
                
            }

        .currency{
            margin: auto;
            position: absolute;
            top: 0;  bottom: 0; right: 10px;
            height:20px;
            font-weight:bold;
            font-size:1.3rem;

        }

         

            `}</style>
        </>

    )

}

export default PigeonBidPlace