import { ListItemIcon, MenuItem, Typography } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';

import React from 'react'

function NavbarElement(props) {
  return (
       <MenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">A short message</Typography>
        </MenuItem>
  )
}

export default NavbarElement