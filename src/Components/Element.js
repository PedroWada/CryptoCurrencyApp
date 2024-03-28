import {useNavigate} from 'react-router-dom'


export default function Element({rank, icon, name, symbol, priceUsd, percent24, mykey, id}){
    let navigate = useNavigate()
    
    //String configuration
    function formating(str, nmr){
        let newString = ''
        if(str[0] === '0'){
            for(let i = 0; i < 8; i++ ){
                if(str[i] === '0' || str[i] === '.'){
                    newString += str[i]
                }
                else{
                    newString +=str[i]
                    newString +=str[i+1]
                    newString +=str[i+2]
                    break;
                }
            }
        }else{
           newString = parseFloat(str).toFixed(nmr).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        }
       return newString
    }
   
    return(
        <tr onClick={()=> navigate(`/info/${id}`)} key={mykey} className="each">
            <td className="rank">{rank}</td>
            <td><img className='crypto_icon' src={icon} alt={ name +' Icon'}/></td>
            <td>
                <span>{symbol} </span>
                <span className='name'>{name}</span>
            </td>
            <td>U${formating(priceUsd, 2)}</td>
            {percent24[0] ==='-'
            ? <td className="red">{formating(percent24, 3)}%</td>
            :<td className="green">+{formating(percent24, 3)}%</td>}
        </tr>
    )
}