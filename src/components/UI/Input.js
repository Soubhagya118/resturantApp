import React from 'react'
import classes from './Input.module.css'
const Input = (props) => {

  const changeEvent=(e)=>{
    // console.log(e.target.value);
    props.c(e.target.value)
  }
  return (
    <div className={classes.input} >
      <label htmlFor={props.input.id}>{props.label}</label>
      <input  {...props.input} onChange={changeEvent} />
    </div>
  )
}

export default Input
