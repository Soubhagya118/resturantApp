
// import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';


function App() {

  const [totalData,setTotalData] = useState([])
 const [CartShown, setCartShown]= useState(false);
  const showHandler =()=>{
    setCartShown(true);
  };

  const hideHandler =()=>{
    setCartShown(false);
  }
  const totalCartfn=(d)=>{
    setTotalData((prevData)=>{return [...prevData,d]})
  }

  return (
    <CartProvider>
    {CartShown && <Cart onClose ={hideHandler} totalData={totalData}/>}
     <Header onShowCart={showHandler} totalData={totalData}/>
     <main>
      <Meals totalCartfn={totalCartfn}/>
     </main>
    </CartProvider>
  );
}

export default App;
