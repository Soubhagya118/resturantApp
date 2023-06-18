import React, { useState } from 'react';
import classes from './Card.module.css';

const Card = (props) => {
  const [totalData,setTotalData] =useState([]);

  
  return (
    <div className={classes.card}>
{props.children}      
    </div>
  )
}

export default Card
