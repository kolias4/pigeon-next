import { useEffect, useState } from "react"
import jfetcher from "../functions/jfetcher"



const useNow = (props)=> {

    const [now,setNow]=useState(null)

    useEffect(() => {

        let url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/nowdate`
        jfetcher({url}).then(res => {
            setNow(res)
        })


    },[props])


   return now


}

export default useNow