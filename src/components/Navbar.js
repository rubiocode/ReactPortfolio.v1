import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RightMenuSlider from '@material-ui/core/Drawer';
import avatar from "../img/avatar.png";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from '@material-ui/core';

import {
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons';




//CSS styles

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: 'white',
        height: '100%',
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
    listItem: {
        color: 'black'
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: '/'
    },
    {
        listIcon: <AssignmentInd />,
        listText: "About Me",
        listPath: '/resume'
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath: '/portfolio'
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact Me",
        listPath: '/contacts'
    }
]

export const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open})
    };

    const classes = useStyles();

    const slideList = slider => (
        <Box 
        className={classes.menuSliderContainer} 
        component='div'
        onClick={toggleSlider(slider, false)}>
                <Avatar className={classes.avatar} src={avatar} alt='Rubi' />
                <Divider />
                <List>
                    {menuItems.map((lsItem, key) => (
                        <ListItem button key={key} component={Link} to={lsItem.listPath}>
                            <ListItemIcon className={classes.listItem}>
                                {lsItem.listIcon}
                            </ListItemIcon>
                            <ListItemText className={classes.listItem} primary={lsItem.listText} />
                        </ListItem>

                    ))}
                </List>
            </Box>
    )
    return (
        <>
            
            <Box component='nav'>
                <AppBar position='static' style={{ background: '#222' }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider('right', true)}>
                        <FontAwesomeIcon icon={faCoffee} color='white' />
                        </IconButton>
                        <Typography variant='h5' style={{ color: '#fff' }}>
                            Menu
                        </Typography>
                        <RightMenuSlider 
                        anchor="left" 
                        open={state.right}
                        onClose={toggleSlider('right', false)}>
                            {slideList('right')}
                        <Footer />    
                        </RightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;