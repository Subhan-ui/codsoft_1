import React, { useState } from 'react'
import './Sidenav.css'
import { Link } from 'react-router-dom';

export default function Sidenav(props) {
  const [open,setOpen]=useState(false);
  const [open1,setOpen1]=useState(false);
  const [open2,setOpen2]=useState(false);
  const [open3,setOpen3]=useState(false);
  const handleClick=()=>{
    setOpen(!open);
  }
  const handleClick1=()=>{
    setOpen1(!open1);
  }
  const handleClick2=()=>{
    setOpen2(!open2);
  }
  const handleClick3=()=>{
    setOpen3(!open3);
  }
  return (
   
    <div style={{width:`${props.width}`}} className='sideNav'>
      <div className='sideNavUp'>
        {/* <h4>SUBHAN</h4> */}
        <h4>REACT JS UI</h4>
      </div>
      <div className="scroll">
      <div className='downNav'>
      <Link className='link' to='/'>
      <div className='sideNavcont'>
        <i className="fa fa-dashboard" style={{fontSize:'24px'}}></i><h4>
           Dashboard
          </h4>
      </div></Link>
      <h3>Themes</h3>
      <Link className='link' to='/color'>
      <div className='sideNavcont'>
        <i className="fa fa-tint" style={{fontSize:'24px'}}></i><h4>Color</h4>
      </div></Link>
      <Link className="link" to='/typography'>
      <div className='sideNavcont'>
      <i className="fa fa-pencil" style={{fontSize:'24px'}}></i><h4>Typography</h4>
      </div></Link>
      <h3>Components</h3>
      
      <div onClick={handleClick} className='sideNavcont1'>
        <div className='hover'>
      <i className="fa fa-puzzle-piece" style={{fontSize:'24px',}}></i><h4>Base</h4></div>{!open?<i className="fa fa-caret-down"></i>:<i className='fa fa-caret-up'></i>}
      </div>
      {open&&(
        <div className='drop'>
        <Link className='link' to='/accordian'>  
          <div className='dropdown'>
      <h4>
         Accordian
        </h4>
      </div></Link>
      <Link className='link' to='/breadcrumbs'> 
          <div className='dropdown'>
      <h4>
        Breadcrumbs
        </h4>
      </div>
        </Link>
        <Link className="link" to='/cards'>
          <div className='dropdown'>
      <h4>Cards</h4>
      </div></Link>
      <Link className="link" to='/carousal'>
          <div className='dropdown'>
      <h4>Carousal</h4>
      </div></Link>
      <Link className="link" to='/collapse'>
          <div className='dropdown'>
      <h4>Collapse</h4>
      </div></Link>
      <Link className="link" to='/listgroup'>
          <div className='dropdown'>
      <h4>List group</h4>
      </div></Link>
      <Link className="link" to='/navsandtabs'>
          <div className='dropdown'>
      <h4>Navs & Tabs</h4>
      </div></Link>
      <Link className="link" to='/pagination'>
          <div className='dropdown'>
      <h4>Pagination</h4>
      </div></Link>
      <Link className="link" to='/placeholder'>
          <div className='dropdown'>
      <h4>Placeholders</h4>
      </div></Link>
      <Link className="link" to='/popovers'>
          <div className='dropdown'>
      <h4>Popovers</h4>
      </div></Link>
      <Link className="link" to='progress'>
          <div className='dropdown'>
      <h4>Progress</h4>
      </div></Link>
      <Link className="link" to='spinners'>
          <div className='dropdown'>
      <h4>Spinners</h4>
      </div></Link>
      <Link className="link" to='tables'>
          <div className='dropdown'>
      <h4>Tables</h4>
      </div></Link>
      <Link className="link" to='tooltips'>
          <div className='dropdown'>
      <h4>Tooltips</h4>
      </div></Link>
      </div>
      )
      
      }
      <div onClick={handleClick1} className='sideNavcont1'>
        <div className='hover'>
      <i className="fa fa-times-circle" style={{fontSize:'24px',}}></i><h4>Buttons</h4></div>{!open1?<i className="fa fa-caret-down"></i>:<i className='fa fa-caret-up'></i>}
      </div>
      
      {
        open1&&(
          <div className="drop">
            <Link className="link" to='buttons'>
            <div className="dropdown">
              <h4>Buttons</h4>
            </div></Link>
            <Link className="link" to='buttongroups'>
            <div className="dropdown">
              <h4>Button Groups</h4>
            </div></Link>
            <Link className="link" to='dropdowns'>
            <div className="dropdown">
              <h4>Dropdowns</h4>
            </div></Link>
          </div>
        )
      }
      <div onClick={handleClick2} className='sideNavcont1'>
        <div className='hover'>
      <i className="fa fa-user" style={{fontSize:'24px',}}></i><h4>Forms</h4></div>{!open2?<i className="fa fa-caret-down"></i>:<i className='fa fa-caret-up'></i>}
      </div>
    
      {
        open2 && <div className="drop">
          <Link className="link" to='/formcontrol'>
          <div className="dropdown">
            <h4>Form Control</h4>
          </div></Link>
          <Link className="link" to='/select'>
          <div className="dropdown">
            <h4>Select</h4>
          </div></Link>
          <Link className="link" to='/checksandradios'>
          <div className="dropdown">
            <h4>Checks & Radios</h4>
          </div></Link>
          <Link className="link" to='/range'>
          <div className="dropdown">
            <h4>Range</h4>
          </div></Link>
          <Link className="link" to='/inputgroups'>
          <div className="dropdown">
            <h4>Input Groups</h4>
          </div></Link>
          <Link className="link" to='/floatinglabels'>
          <div className="dropdown">
            <h4>Floating Labels</h4>
          </div></Link>
          <Link className="link" to='layouts'>
          <div className="dropdown">
            <h4>Layouts</h4>
          </div></Link>
          <Link className="link" to='/validation'>
          <div className="dropdown">
            <h4>Validation</h4>
          </div></Link>
        </div>
      }
      <Link className="link" to='/charts'>
       <div className="sideNavcont" >
       <i className="fa fa-line-chart" style={{color: '#ababab',fontSize:"18px"}}></i>
        <h4>Charts</h4>
      </div></Link>
      
      <div onClick={handleClick3} className='sideNavcont1'>
        <div className='hover'>
      <i className="fa fa-star" style={{color:'#ababab',fontSize:'24px',}}></i><h4>Icons</h4></div>{!open3?<i className="fa fa-caret-down"></i>:<i className='fa fa-caret-up'></i>}
      </div>
      {
        open3&&<div className="drop">
          <Link className="link" to='/coreuifree'>
          <div className="dropdown">
            <h4>CoreUI Free</h4>
          </div></Link>
          <Link className="link" to='/coreuiflags'>
          <div className="dropdown">
            <h4>CoreUI Flags</h4>
          </div></Link>
          <Link className="link" to='/coreuimethods'>
          <div className="dropdown">
            <h4>CoreUi Brands</h4>
          </div></Link>
        </div>
      }
      </div></div>
    </div>
    
  )
}
