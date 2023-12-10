
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter >
      <Header />
      <Routes>
      
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/checkout' element={<Checkout/>} />
          
      
       </Routes>

   
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
