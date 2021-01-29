import fetcher from '../fetcher'

const registermutation= async (username,email,password) => {

   var query = `
   mutation($username:String!, $email:String!, $password:String!) {
     register(input:{username:$username,email:$email,password:$password}){
   jwt
   user{
     username
     email
     id
   }

 }
   }
   `
  try{
    const user = await fetcher(query,{
      variables:{
        username:username,
        email:email,
        password:password
      }
    })

    return user

  }

  catch(err){
    throw new Error(err)
  }


}

export default registermutation
