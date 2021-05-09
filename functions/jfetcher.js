const jfetcher = async ({url,method,token,body}) => {



    var res = await fetch(url,{

          method:method || "GET",
          headers: {
           'Accept': 'application/json',

           'Authorization': 'Bearer ' + token ,

           'Content-Type': 'application/json'
         },
         body:JSON.stringify(body)


      })

      if(!res.ok){

        let eres = {}
         try {

            eres = await res.json()

         }

         catch(err){

           throw new Error(`${url} cant parse json on response with status not 200`)

         }

         throw new Error(eres.message || "Something went wrong")
      }

      else {
         try{

           let eres = await res.json()
           return eres

         }

         catch(err){
           throw new Error(err.message || "Something went wrong")
         }
      }










}

export default jfetcher
