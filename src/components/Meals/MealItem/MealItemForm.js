import React, { useState } from 'react';
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
const MealItemForm = (props) => {
  const [rightPrice,setRightPrice] = useState({});
  const [inputCount,setInputCount] = useState(1);


  const addItembtn=(e)=>{
  e.preventDefault();
    
    const eachItemsTotalPrice = inputCount * props.price;
    // console.log(eachItemsTotalPrice);
    const description=props.description;
    const name=props.name;
    const data ={
      count:inputCount,
      pprice:props.price ,
     price: eachItemsTotalPrice,
     name: name,
     description: description
    }
    props.cartDatafn(data);
    setRightPrice(data);
  }

  const handleClick=(d)=>{
    if(d!=1){
    setInputCount(d);
    }else{
      setInputCount(props.price)
    }
    
  }
  return (<>
    <form className={classes.form} >
      <Input c={handleClick} label="Amount" input={{id: 'amount',type:'number',min:'1',max:'5',step:'1',defaultValue:'1'}}/>
      <button onClick={addItembtn}> + Add</button>
    
    </form>
      {/* {rightPrice} */}
    
    {/* {console.log(rightPrice)} */}


    


      
      </> )
}

export default MealItemForm
