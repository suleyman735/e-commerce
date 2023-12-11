
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter >
      <Header />
      <Routes>
      
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/checkout' element={<Checkout/>} />
        <Route exact path='/login' element={<Login/>} />
          
      
       </Routes>

   
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
