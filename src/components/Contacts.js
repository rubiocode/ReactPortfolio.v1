import React, { useState } from 'react';
import Navbar from './Navbar';
import Typed from 'react-typed';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Resume from '../img/Resume.pdf'
import amber from '@material-ui/core/colors/amber';
import avatar1 from "../img/avatar1.png";
import EmailIcon from '@material-ui/icons/Email';
import axios from 'axios';
import {
    ThemeProvider,
    createTheme,
    makeStyles
} from '@material-ui/core/styles';

import {
    IconButton,
    Typography,
    Grid,
    Avatar
} from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    heading: {
        color: '#000',
        padding: '3rem 0 0 1rem',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    avatar1: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
}));

const Contacts = (props) => {
    const classes = useStyles();
    const theme = createTheme({
        palette: {
            primary: amber,
        },
    });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const [snackbar, setSnackbar] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/email', {
            email,
            subject: `${name}: ${subject}`,
            text,
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then(res => {
                clearStates();
                setSnackbar(true);
            });
    }

    const clearStates = () => {
        setName('');
        setEmail('');
        setSubject('');
        setText('');
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbar(false);
    };
    return (
        <>
            <Navbar />
            <Grid container style={{justifyContent:"center", alignItems:"center"}} >

                <Grid item xs={9}>
                    <ThemeProvider theme={theme}>

                        <Typography className={classes.heading} variant='h4'>
                            <Typed strings={['Let\'s Connect!']} typeSpeed={40} />
                        </Typography>
                        <Grid container justifyContent='center'>
                            <Avatar className={classes.avatar1} src={avatar1} alt='Avatar' />
                        </Grid>
                        <div className="uk-container uk-inline container">
                            <div className="uk-text-left contactInfo" >
                                <div className="box" id="contactme">
                                    <IconButton href="https://github.com/rubiocode" target="_blank">
                                        <GitHubIcon />
                                        <Typography variant='h5'>Check out my Github</Typography>
                                    </IconButton>
                                </div>
                                <div className="box">
                                    <IconButton href="https://www.linkedin.com/in/rubidia-rubio-in" target="_blank">
                                        <LinkedInIcon />
                                        <Typography variant='h5'>LinkedIn</Typography>
                                    </IconButton>
                                </div>
                                <div className="box">
                                    <IconButton href="mailto:w.rubidia.rubio@gmail.com">
                                        <EmailIcon />
                                        <Typography variant='h5'>Email Me!</Typography>
                                    </IconButton>
                                </div>
                                <div className="box">
                                    <IconButton target="_blank" href={Resume}>
                                        <AttachFileIcon />
                                        <Typography variant='h5'>Download My Resume</Typography>
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </>
    )
}

export default Contacts
