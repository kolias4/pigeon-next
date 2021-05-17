const csv=require('csvtojson')



const parseresults = async (path) => {

    try {

    let res = await fetch(path)
    res = await res.text()

    const jsonArray=await csv().fromString(res);

    // console.log(jsonArray)

    return jsonArray
  }

  catch(err){
      throw new Error(err.message)
  }




}

export default parseresults