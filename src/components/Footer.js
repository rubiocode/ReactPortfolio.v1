import React from 'react'
import { BottomNavigation, BottomNavigationAction, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Resume from '../img/Resume.pdf'



//CSS styles
const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction": {
            minWidth: 0,
            maxWidth: 250,
        },
        button: {
            color: '#000'
        }
    }
})


const Footer = () => {
    const classes = useStyles();

    return (

        <BottomNavigation width="auto" style={{ background: '#fff' }}>
                <IconButton  target="_blank" href={Resume}>
                    <AttachFileIcon />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/rubidia-rubio-in" target="_blank">
                    <LinkedInIcon />
                </IconButton>
                <IconButton href="https://github.com/rubiocode" target="_blank">
                    <GitHubIcon />
                </IconButton>
        </BottomNavigation>
    )
}

export default Footer
