import React from 'react';
import avatar from "../img/avatar.png";
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core';


//CSS styles

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(50),
        height: theme.spacing(30),
        margin: theme.spacing(1),
    },
    title: {
        color: '#FF6666',
        marginTop: '10rem'
        //backgroundColor: '#fff'
    },
    subtitle: {
        color: '6666FF',
        //marginBottom: '1rem',
        fontWeight: '800',
        fontSize: '1rem'
    },
    typedContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        //fontWeight: '900',
        zIndex: '1'
    },
    aboutMe: {
        color: 'Black',
        fontWeight: '700',
        padding: '3rem 0',
        //textTransform: 'uppercase',
        width: '800',
        display: 'flex'

    }
}))
const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Typography className={classes.title} variant='h4'>
                <Typed strings={['Welcome, I\'m Rubi']} typeSpeed={40} />
            </Typography>
            <Grid container justifyContent='center'>
                <Avatar className={classes.avatar} src={avatar} alt='Rubi' />
            </Grid>
                <Typography className={classes.subtitle} variant='h5'>
                {/* <Typed
                    strings={['Fullstack Software Developer', 'Web Designer']}
                    // typeSpeed={40}
                    // backSpeed={60}
                    // loop
                /> */}
                
            </Typography>
        </Box>
    )
}

export default Header;
