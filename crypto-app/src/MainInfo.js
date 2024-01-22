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

    function formating(str) {
        return parseFloat(str).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    }

    return(
        <div>
            <Link to='/'>&#8592; Back</Link>
            <div className="top2">
                <h1>X</h1>
                <p>{data?.symbol}</p>
            </div>
           
            
            <div className="bottom">
                <div className="grid_container">
                    <p className="grid_item">Abbreviation: {data?.symbol}</p>
                    <p className="grid_item">Name: {data?.name}</p>
                    <p className="grid_item">Supply: {formating(data?.supply)}</p>
                    {data?.maxSupply !== null ?
                        <p className="grid_item">Max Supply: {formating(data?.maxSupply)}</p>
                    :<p className="grid_item">Max Supply: Infinty</p>}
                    
                    <p className="grid_item">Market Cap: {formating(data?.marketCapUsd)}</p>
                    <p className="grid_item">Volume 24hr: {formating(data?.volumeUsd24Hr)}</p>
                    <p className="grid_item">Price: {data?.priceUsd}</p>
                    <p className="grid_item">Change Percent: {data?.changePercent24Hr}</p>
                    <p className="grid_item">Volume-Weighted Average: {data?.vwap24Hr}</p>
                </div>
            </div>

        </div>
        
    )
}