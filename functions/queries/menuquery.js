import fetcher from '../fetcher'

const menuquery = async () => {

   var query = `
   query {

  categoryArthras{
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

}
   `

   const menu = await fetcher(query)

   return menu

}

export default menuquery
