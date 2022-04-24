import { useEffect, useState } from "react"
import getGif from "../helpers/getGifs"


const useFetchGifs= (category)=>{
    const [state, setState] = useState({
        data:[],
        loading:true,
    })
    useEffect(() => {
        getGif(category).then(img => {
            setTimeout(() => {
                setState({
                    data:img,
                    loading:false,
                })
            }, 3000);
        })
    }, [category])

    return state // {data:[], loading:true}

}

export default useFetchGifs