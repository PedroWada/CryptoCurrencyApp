import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './Home';
import MainInfo from './MainInfo';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/info/:name' element={<MainInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
