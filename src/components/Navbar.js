import React from 'react'
import Logo from '../Assets/Logo.svg'   
import { BsCart2 } from 'react-icons/bs'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { 
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRounedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoudendIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const Navbar = () => {
    const [openMenu, setOpenMenu] = React.useState(false);
        const menuOptions = [
            { text: 'Home', icon: <HomeIcon /> },
            { text: 'About', icon: <InfoIcon /> },
            { text: 'TestImonials', icon: <CommentRounedIcon /> },
            { text: 'Contact', icon: <PhoneRoudendIcon /> },
            { text: 'Cart', icon: <ShoppingCartRoundedIcon /> }
        ]
  return (
    <nav>
        <div className='nav-logo-container'>
            <img src={Logo} alt="logo" />
        </div>
        <div className='navbar-links-container'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">TestImonials</a>
            <a href="#">Contact</a>
            <a href="#">
                <BsCart2 className='navbar-cart-icon' />
            </a>
            <button className='primary-button'>Bookins Now</button> 
        </div>
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
            anchor='right'>
            <Box 
                sx={{ width: 250 }} 
                role="presentation" 
                onClick={() => setOpenMenu(false)}
                onKeyDown={() => setOpenMenu(false)}
                >
                <List>
                    {menuOptions.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    </nav>
  )
}

export default Navbar