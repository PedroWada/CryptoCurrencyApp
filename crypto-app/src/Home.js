import { useState, useEffect } from 'react';
import Table from './Components/Table';
import axios from 'axios';


export default function Home(){

//https://api.coincap.io/v2/assets/bitcoin
//https://api.coincap.io/v2/assets
//https://assets.coincap.io/assets/icons/${symbol}@2x.png

    const [coin, setCoin] = useState('')
    const url = 'https://api.coincap.io/v2/assets'
    const [listCryptos, setListCryptos] = useState([])

      useEffect(()=>{
        axios.get(url).then((resp)=>{
          setListCryptos(resp.data.data)
        })
      }, [])
    
    const search = (e) => {
      if(e.key === 'Enter'){
        axios.get(url + `/`+ coin.toLowerCase()).then((resp)=> {
          setListCryptos([resp.data.data])
        }).catch((err)=> {
          window.alert('Erro!' + err)
        })
      }
      }
      

    return(
        <div className="App">
        <div className='page'>
          <div className='top'>
              <input type='text' placeholder='Enter CryptoCoin...' onKeyDown={search} onChange={(e) => setCoin(e.target.value)}/>
          </div>
          <div className='bottom'>
            <div className='list'>
              <Table list={listCryptos}/>
            </div>
          </div>
        </div>
    </div>
    )
}