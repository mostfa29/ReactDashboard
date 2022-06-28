import { ListItemIcon, MenuItem, Typography } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';

import React from 'react'

function NavbarElement(props) {
  return (
       <MenuItem style={{margin:'20px 0'}}>
          <ListItemIcon style={{minWidth:'0'}}>
           { props.icon?props.icon:<SendIcon fontSize="small" />}
          </ListItemIcon>
      {props.close ? null : <Typography variant="inherit">{props.text }</Typography>}
        </MenuItem>
  )
}

export default NavbarElement