import Element from "./Element"

export default function Table({list}){

    return(
        <table>
            <tbody>
                <tr >
                    <th>Rank</th>
                    <th>Icon</th>
                    <th>Crypto</th>
                    <th>Price</th>
                    <th>24h Change</th>
                </tr>
                
                {list.map((el,i)=> {
                    
                    return(
                        <Element 
                        id={el.id}
                        key={i} 
                        rank={el.rank} 
                        icon={'X'}
                        name={el.name}
                        symbol={el.symbol} 
                        priceUsd={el.priceUsd}  
                        percent24={el.changePercent24Hr}/>   
                    )
                })}
            </tbody>
        </table>
    )
}