import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"


export default function MainInfo(){
    let{name} = useParams()
    const [data, setData] = useState()

    useEffect(() => {
        axios.get(`https://api.coincap.io/v2/assets/${name}`).then((resp)=> {
             setData(resp.data.data)
        })
    }, [name])

    return(
        <div>
            <Link to='/'>&#8592; Back</Link>
            <p>{data?.rank}</p>
            <p>{data?.symbol}</p>
            <p>{data?.name}</p>
            <p>{data?.supply}</p>
            <p>{data?.maxSupply}</p>
            <p>{data?.marketCapUsd}</p>
            <p>{data?.volumeUsd24Hr}</p>
            <p>{data?.priceUsd}</p>
            <p>{data?.changePercent24Hr}</p>
            <p>{data?.vwap24Hr}</p>
            <p>{data?.explorer}</p>

        </div>
        
    )
}