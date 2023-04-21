import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/nav.css';

export default function Menu() {
  const [state, setState] = React.useState({
    top: false,
  });

  const item = ['home', 'about', 'portfolio', 'contacto'];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 180 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{marginTop: '0%'}}
    >
      <List>
        {['inicio', 'sobre mi', 'portfolio', 'contacto'].map((text, index) => (
          <a href={'#'+item[index]} style={{textDecoration: 'none', color: '#000', textTransform: 'capitalize'}}>
            <ListItemButton style={{marginTop: '0%'}}>
              <ListItemText style={{marginTop: '0%', textAlign: 'center'}} primary={text} />
            </ListItemButton>
          </a>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button id='btn-menu' onClick={toggleDrawer(anchor, true)}>
            <MenuIcon id='icon-menu'/>
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            id='space-menu'
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
