import React from 'react'
import NavbarElement from './NavbarElement'
import {elems} from './elemsJson'

function NavbarElements(props) {




  return (
      <div  style={{padding:'0',margin:'0'}}>
     {elems.map((elem)=> <NavbarElement  key={elem.id} close={props.close } text={elem.title}  />)}
      </div>
  )
}

export default NavbarElements