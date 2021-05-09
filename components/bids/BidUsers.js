import "animate.css"

export default function BidUsers({bidOffers}){

    var bidlist = bidOffers.sort((a,b) => {
        if(a.price > b.price){
            return -1
        }
        if(b.price > a.price){
            return 1
        }
        return 0
    } ).slice(0,5)


    return (
        <div className="d-flex flex-column">

        {bidlist.map((bidoffer,i) => {
            return (
                <div key={`${bidoffer.username}${bidoffer.price}`} className="d-flex align-items-center my-2 animate__animated animate__slideInUp">
                <span className="font-weight-bold mr-2">{i+1}.</span>
                <span style={{fontSize:'1.5rem'}} className="fa fa-user mr-2"></span>
                <span className="mr-2">{bidoffer.username}</span>
                <span className="font-weight-bold">{bidoffer.price}€</span>

                </div>
            )
        })}
          


        </div>
    )

}
