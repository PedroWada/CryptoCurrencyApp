import {useNavigate} from 'react-router-dom'

export default function Element({rank, icon, name, symbol, priceUsd, percent24, mykey, id}){
    //https://assets.coincap.io/assets/icons/${symbol}@2x.png
    let navigate = useNavigate()
    
    //String configuration
    const dot = priceUsd.indexOf(".")
    const dot2 = percent24.indexOf(".")
    let newString = ''
    let newString2 = ''
    for(let i = 0; i < dot2+5; i++){
        newString2 += percent24[i]
    }
    if(priceUsd[0] === '0'){
        for(let i = 0; i < priceUsd.length; i++ ){
            if(priceUsd[i] === '0' || priceUsd[i] === '.'){
                newString += priceUsd[i]
            }
            else{
                newString +=priceUsd[i]
                newString +=priceUsd[i+1]
                newString +=priceUsd[i+2]
                break;
            }
        }
    }else{
        for(let i = 0; i < dot+4; i++){
            newString += priceUsd[i]
        }
    }
    const url = `https://assets.coincap.io/assets/icons/BTC@2x.png`
   
    return(
        <tr onClick={()=> navigate(`/info/${id}`)} key={mykey} className="each">
            <td className="rank">{rank}</td>
            <td><img src={url}></img></td>
            <td>
                <span>{symbol} </span>
                <span className='name'>{name}</span>
            </td>
            <td>U${newString}</td>
            {newString2[0] ==='-'
            ? <td className="red">{newString2}%</td>
            :<td className="green">+{newString2}%</td>}
        </tr>
    )
}