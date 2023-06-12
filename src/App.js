
// import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';


function App() {
const [CartShown, setCartShown]= useState(false);
  const showHandler =()=>{
    setCartShown(true);
  };

  const hideHandler =()=>{
    setCartShown(false);
  }


  return (
    <>
    {CartShown && <Cart onClose ={hideHandler}/>}
     <Header onShowCart={showHandler} />
     <main>
      <Meals />
     </main>
    </>
  );
}

export default App;
