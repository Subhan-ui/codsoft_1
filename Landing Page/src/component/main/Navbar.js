import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  const [display,setDisplay]=useState('none');
  const [display1,setDisplay1]=useState('none');
  const [height,setHeight]=useState('70px')
  useEffect(()=>{
    if(window.screen.width<=850){
      setDisplay('flex')
      setDisplay1('none');
    }else{
      setDisplay('none')
      setDisplay1('flex')
    }
  },[window.screen.width])
  const style={
    width: `${props.width}`,
    height: height,

  }
  const handleToggle=()=>{
    if(display1==='none'){
      setDisplay1('block');
      setHeight('140px')
    }else{
      setDisplay1('none');
      setHeight('70px')
    }

  }

  return (
    <>
    <div style={style} className='nav'>
    <ul style={{display:display}}>
      <li onClick={handleToggle}><i className="fa fa-bars" style={{fontSize:'20px'}}></i></li>
      </ul>
      <ul style={{display:display1}}>
        <li onClick={props.handleSideNav}><i className="fa fa-bars" style={{fontSize:'20px'}}></i></li>
        <li><Link className='link1' to='/'>Dashboard</Link></li>
        <li><a>Users</a></li>
        <li><a>Setting</a></li>
      </ul>
      <ul style={{display:display1}}>
      <li><i className="fa fa-bell" style={{fontSize:'20px'}}></i></li>
      <li className='tooltip'><i className="fa fa-envelope" style={{fontSize:'20px'}}></i><span className="tooltiptext">Hello this is the message that I want you to see🫣🫣🤪</span></li>
      <li>pic logo</li>
      </ul>
      
    </div>
       
    
    </>
  )
}
