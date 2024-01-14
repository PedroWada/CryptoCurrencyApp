import { useState, useEffect } from 'react';
import Table from './Components/Table';
import axios from 'axios';


export default function Home(){

//https://api.coincap.io/v2/assets/bitcoin
//https://api.coincap.io/v2/assets


    const url = 'https://api.coincap.io/v2/assets'
    const [listCryptos, setListCryptos] = useState([])
    const [realList, setRealList] = useState([])

      useEffect(()=>{
        axios.get(url).then((resp)=>{
          setListCryptos(resp.data.data)
          setRealList(resp.data.data)
        })
      }, [])
    
    function search(e){
      setListCryptos(realList.filter((el)=> 
        el.id.includes(e.target.value.toLowerCase())
      )) 
    }
      

    return(
        <div className="App">
        <div className='page'>
          <div className='top'>
              <input type='text' placeholder='Enter CryptoCoin...' onChange={(e) => search(e)}/>
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