import React from 'react'

const Header = () => {
    const screen =window.screen.width;
    console.log(screen)
  return (
    <div style={{display:'flex', width:'100%',border:'1px solid black',height:'80px',background:'rgba(119,32,8,255)'}}>
      <button style={{marginLeft:'88%',background:'rgba(62,18,1,255)',padding:'10px',width:'10%',color:'white',borderRadius:'20%',height:'80%',marginTop:'10px',}}>
      
    <span style={{color:'white'}}>🛒</span> Your Cart <span style={{background:'orange',color:'white', padding:'4px',borderRadius:'20%'}}>0</span>
      </button>
    </div>
  )
}

export default Header
