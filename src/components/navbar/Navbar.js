import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
// import { makeStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import logo from '../../images/logo.png';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink as NavLink } from 'react-router-dom'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import InfoIcon from '@mui/icons-material/Info';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CallIcon from '@mui/icons-material/Call';
import './nav.css'
import Info from '@mui/icons-material/Info';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from "react-scroll";


const drawerWidth = 240;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));







function Navbar() {




  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar style={{ background: '#FFE4E1', color: 'black' }} position="fixed" open={open}>
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography style={{ fontFamily: 'Noto Serif, cursive' }} variant="h6" noWrap component="div">
              <NavLink style={{ borderBottom: 'none' }} to="/"> <img style={{ display: 'inline', borderRadius: '50%' }} width="60px" height="60px" src={logo} /> Clemency Coin
              </NavLink>
            </Typography>

            <Typography style={{ marginLeft: 'auto' }} variant="p" noWrap component="div">

              <div class="topsm">
                <div class="smm inline-flex items-center  border-0 px-3 focus:outline-none rounded text-base mb-1 md:mt-0">
                  <span class="inline-flex sm:ml-auto sm:mt-0 mt-1 justify-center sm:justify-start">
                    <Button href="https://t.me/httpstmeHFa2ZYn2PtM0YzRl" variant="contained"><TelegramIcon /> Join </Button>
                  </span>

                </div>
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">


                  <a href='https://twitter.com/Clemencycoin12?t=SRgQMeqwpA1Y9NOzFkdfRw&s=08' class="ml-3 text-gray-500">
                    <svg fill=' #00acee ' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>   </a>

                  <a href='https://twitter.com/Clemencycoin12?t=SRgQMeqwpA1Y9NOzFkdfRw&s=08' class="ml-3 text-gray-500">
                    <svg fill='red' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                  </a>

                </span>
              </div>

              <ul className="navul">
                <li className='navli'> <button style={{ fontFamily: 'Noto Serif, cursive' }} class="a"><NavLink to='/whitepaper'>Whitepaper</NavLink></button></li>
                <li className='navli'> <button style={{ fontFamily: 'Noto Serif, cursive' }} class="a"><Link to='roadmap'>Roadmap</Link></button></li>
                <li className='navli'> <button style={{ fontFamily: 'Noto Serif, cursive' }} class="a"><Link to='about'>About Us</Link></button></li>
                <li className='navli'> <button style={{ fontFamily: 'Noto Serif, cursive' }} class="a" ><Link to='features'>Features</Link></button></li>
                <li className='navli'> <button style={{ fontFamily: 'Noto Serif, cursive' }} class="a"><Link to='/'>Home</Link></button></li>
              </ul>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer style={{ backgroundColor: 'white' }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"


          anchor="left"
          open={open}
        >
          <button> <DrawerHeader onClick={handleDrawerClose} style={{ background: '#FFE4E1', color: 'black' }}>
            <p style={{ fontFamily: 'Noto Serif, cursive', marginLeft: 'auto', color: 'white' }}> MENU</p>
            <IconButton style={{ color: 'black' }} >
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader> </button>
          <Divider />
          {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}

          <List>
            <Link onClick={handleDrawerClose} to="/">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary='Home' />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List >
            <Link onClick={handleDrawerClose} to='features'>
              <ListItem button>
                <ListItemIcon>
                  <CleaningServicesIcon />
                </ListItemIcon>
                <ListItemText primary='Features' />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List >
            <Link smooth={true} duration={1000} onClick={handleDrawerClose} to="about">
              <ListItem button>
                <ListItemIcon>
                  <CallIcon />
                </ListItemIcon>
                <ListItemText primary='About us' />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List >
            <Link onClick={handleDrawerClose} to="roadmap">
              <ListItem button>
                <ListItemIcon>
                  <HealthAndSafetyIcon />
                </ListItemIcon>
                <ListItemText primary='Roadmap' />
              </ListItem>
            </Link>
          </List>
          <Divider />
         
          <List >
            <NavLink onClick={handleDrawerClose} to="/whitepaper">
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary='Whitepaper' />
              </ListItem>
            </NavLink>
          </List>
          <Divider />
        
         

        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          {/* <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
        </Main>
      </Box>
    </div>
  )
}

export default Navbar