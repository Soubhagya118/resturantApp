import React,{Fragment} from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
const Meals = (props) => {
 

  return (
    <Fragment>
      <MealsSummary/>
      <AvailableMeals totalCartfn={props.totalCartfn}/>
    </Fragment>
  )
}

export default Meals
