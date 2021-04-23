import fetcher from "../../functions/fetcher"



export default async (req, res) => {

    var {id} = req.body 
    var nquery = `
    query($id:ID!) {
        bid(id:$id){
            bid_offers{
             price
             id
             user{
               username
               email
               
             }
           }
         }
  
  }
    `

    const data = await fetcher(nquery,{
        variables:{
          id:id
        }
      },process.env.STRAPI_ADMIN_TOKEN)

      if(!data.bid){
    res.statusCode = 400
    res.json(JSON.stringify("not found"))

      }

      var bid_offers = data.bid.bid_offers.map((offer) => (
          {
              price:offer.price,
              id:offer.id,
              username:offer.user.username
              
          }
      ))
    
    res.statusCode = 200
    res.json(JSON.stringify(bid_offers))
  }