import React, { useState } from 'react';
import Navbar from './Navbar';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Snackbar, IconButton, TextField } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import amber from '@material-ui/core/colors/amber';
import EmailIcon from '@material-ui/icons/Email';
import axios from 'axios';


const Contacts = (props) => {
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
        <ThemeProvider theme={theme}>
            <Navbar />
            <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Name"
                {...props}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
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
    );
}

export default Contacts;