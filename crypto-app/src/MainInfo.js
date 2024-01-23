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
    function value(str){
        return parseFloat(str).toFixed(6).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    }

    return(
        <div>
            <div className="header">
                <Link to='/'>
                    <button>&#8592; Back</button>
                </Link>
            </div>

            {data !== undefined
            ? <div>
                <div className="top2">
                    <img className="crypto_image" src={`https://coinicons-api.vercel.app/api/icon/${data?.symbol.toLowerCase()}`} alt=""/>
                    <p>{data?.name}</p>
                </div>
           
            
                <div className="bottom">
                    <div className="grid_container">
                        <p className="grid_item">Abbreviation: {data?.symbol}</p>
                        <p className="grid_item">Name: {data?.name}</p>
                        <p className="grid_item">Price: U$ {value(data?.priceUsd)}</p>
                        <p className="grid_item">Volume 24hr: {formating(data?.volumeUsd24Hr)}</p>   
                        <p className="grid_item">24Hr Change: {data?.changePercent24Hr[0] === '-'
                        ? <span className=" red"> {parseFloat(data?.changePercent24Hr).toFixed(5)}%</span>
                        : <span className=" green"> {parseFloat(data?.changePercent24Hr).toFixed(5)}%</span>
                        }</p>
                        
                        <p className="grid_item">Volume-Weighted Average: U$ {value(data?.vwap24Hr)}</p>
                        <p className="grid_item">Supply: {formating(data?.supply)}</p>
                        {data?.maxSupply !== null 
                        ?<p className="grid_item">Max Supply: {formating(data?.maxSupply)}</p>
                        :<p className="grid_item">Max Supply: Infinty</p>}
                        <p className="grid_item">Market Cap: {formating(data?.marketCapUsd)}</p>
                       
                    </div>
                </div>
            </div>
            :<div className="top"> 
                <div class="loader">
                        
                </div>
            </div>}

        </div>
        
    )
}