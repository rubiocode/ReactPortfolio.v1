import React, { useState } from 'react';
import Navbar from './Navbar';
import Typed from 'react-typed';
import MuiAlert from '@material-ui/lab/Alert';
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
    Snackbar,
    IconButton,
    TextField,
    Typography,
    Grid,
    Avatar
} from '@material-ui/core';



const useStyles = makeStyles(theme=>({
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
            <Grid container justify="center" alignItems="center" >

                <Grid item xs={9}>
                    <ThemeProvider theme={theme}>

                        <Typography className={classes.heading} variant='h4'>
                            <Typed strings={['Let\'s Connect!']} typeSpeed={40} />
                        </Typography>
                        <Grid container justifyContent='center'>
                <Avatar className={classes.avatar1} src={avatar1} alt='Avatar' />
            </Grid>
                        <TextField
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            label="Name"
                            {...props}
                            fullWidth={true}
                            margin="dense"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            size='medium'
                        />
                        <TextField
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Email"
                            {...props}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            label="Subject"
                            {...props}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            label="Message"
                            multiline
                            rows={5}
                            {...props}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <IconButton
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            disabled={name === "" || email === "" || subject === "" || text === "" ? true : false}
                        >
                            <EmailIcon />
                        </IconButton>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            open={snackbar}
                            autoHideDuration={2750}
                            onClose={handleClose}>
                            <MuiAlert onClose={handleClose} severity="success">
                                Your message has been sent.
                            </MuiAlert>
                        </Snackbar>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </>
    );
}

export default Contacts;