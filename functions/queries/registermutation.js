import fetcher from '../fetcher'

const registermutation= async (username,email,password,phone) => {

   var query = `
   mutation($username:String!, $email:String!, $password:String!, $phone: String) {
     register(input:{username:$username,email:$email,password:$password,phone:$phone}){
   jwt
   user{
     username
     email
     id
     phone
   }

 }
   }
   `
  try{
    const user = await fetcher(query,{
      variables:{
        username:username,
        email:email,
        password:password,
        phone:phone
      }
    })

    return user

  }

  catch(err){
    throw new Error(err)
  }


}

export default registermutation
