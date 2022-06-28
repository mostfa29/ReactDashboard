import { ListItemIcon, MenuItem, Typography } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
// import WarehouseIcon from '@material-ui/icons/Warehouse';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PeopleIcon from '@material-ui/icons/People';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function NavbarElement(props) {
  const icons = {
    'settings': <SettingsIcon/>,
    'dashboard': <DashboardIcon/>,
    'stock':< MonetizationOnIcon/>,
    "sales": <MonetizationOnIcon/>,
    "customers":<PeopleIcon/>
    
  }
  const History=useNavigate()
  const HandleRoute = () => {
    History(props.route)
  }
  return (
       <MenuItem style={{margin:'20px 0',justifyContent:'center'}} onClick={()=>HandleRoute()}>
      <ListItemIcon style={{ minWidth: '0' }}>
       
                           { props.icon?icons[props.icon]?icons[props.icon]:null :null  }


          </ListItemIcon>
      {props.close ? null : <Typography variant="inherit">{props.text }</Typography>}
        </MenuItem>
  )
}

export default NavbarElement