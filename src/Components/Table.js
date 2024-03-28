import Element from "./Element"

export default function Table({list}){

    return(
        <table>
            <tbody>
                <tr>
                    <th>Rank</th>
                    <th>Icon</th>
                    <th>Crypto</th>
                    <th>Price</th>
                    <th>24h Change</th>
                </tr>
                
                {list.map((el,i)=> {
                const imageUrl = `https://assets.coincap.io/assets/icons/${el.symbol.toLowerCase()}@2x.png`
                    return(
                        <Element 
                        id={el.id}
                        key={i} 
                        rank={el.rank} 
                        icon={imageUrl}
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