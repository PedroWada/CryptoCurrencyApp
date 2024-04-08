import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './Home';
import MainInfo from './MainInfo';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/CryptoCurrencyApp' element={<Home/>}/>
        <Route path='/info/:name' element={<MainInfo/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
