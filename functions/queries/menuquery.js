import fetcher from '../fetcher'

const menuquery = async (loc) => {

  let locale = loc? loc : "el"

   var query = `
   query($locale:String!) {

  categoryArthras(locale:$locale){
    title
    url_key
  }
breeders(sort:"breeder_name:desc"){
  breeder_name
  breeds{
    breed
    urlkey
  }
}

kolovodromias{
 title
 url_key
}

kyklois{
  title
  urlkey
  sylogois{
    title
    urlkey
  }
}

}
   `

   const menu = await fetcher(query,{
     variables:{
       locale:locale
     }
   },process.env.STRAPI_ADMIN_TOKEN)

   return menu

}

export default menuquery
