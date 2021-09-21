import React from 'react';
import Navbar from './Navbar';
import avatar1 from "../img/avatar1.png";
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Box,
    Grid,
    Avatar
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: '#fdfbf2'
    },
    avatar1: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    timeLine: {
        position: 'relative',
        padding: '1rem',
        margin: '0 auto',
        "&:before": {
            content: "''",
            position: 'absolute',
            height: '100%',
            border: '1px solid tan',
            right: '40px',
            top: '0'
        },
        "&:after": {
            content: "''",
            display: 'table',
            clear: 'both'
        },
        [theme.breakpoints.up("md")]: {
            padding: '2rem',
            "&:before": {
                left: 'calc(50% - 1px)',
                right: 'auto'
            }
        }
    },
    timeLineItem: {
        padding: '1rem',
        borderBottom: '2px solid tan',
        position: 'relative',
        margin: '1rem 3rem 1rem 1rem',
        clear: 'both',
        "&:after": {
            content: "''",
            position: 'absolute'
        },
        "&:before": {
            content: "''",
            position: 'absolute',
            right: '-0.625rem',
            top: 'calc(50% - 5px)',
            borderStyle: 'solid',
            borderColor: 'black black transparent transparent',
            borderWidth: '0.625rem',
            transform: 'rotate(45deg)'
        },
        [theme.breakpoints.up("md")]: {
            width: '44%',
            margin: '1rem',
            "&:nth-of-type(2n)": {
                float: 'right',
                margin: '1rem',
                borderColor: '#d2b48c'
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: '-0.625rem',
                borderColor: 'transparent transparent black black'
            }
        }
    },
    timeLineYear: {
        textAlign: 'center',
        maxWidth: '9.375rem',
        margin: '0 3rem 0 auto',
        fontSize: '1.8rem',
        background: '#FF6347',
        color: 'white',
        fontWeight: 'bold',
        lineHeight: 1,
        padding: '0.5rem 0 1rem',
        "&:before": {
            display: 'none'
        },
        [theme.breakpoints.up("md")]: {
            textAlign: 'center',
            margin: '0 auto',
            "&:nth-of-type(2n)": {
                float: 'none',
                margin: '0 auto'
            },
            "&:nth-of-type(2n):before": {
                display: 'none'
            }
        }
    },
    heading: {
        color: 'Black',
        padding: '3rem 0',
        textTransform: 'uppercase'
    },
    subHeading: {
        color: '#FF6347',
        padding: '0',
        textTransform: 'uppercase'
    }
}));

const Resume = () => {
    const classes = useStyles()
    return (
        <>
            <Navbar />
            <Box component='p' className={classes.mainContainer}>
            <Grid container justifyContent='center'>
                <Avatar className={classes.avatar1} src={avatar1} alt='Avatar' />
            </Grid>
                <Typography variant='h6' align='center' className={classes.heading}>
                My name is Rubi and I am a fullstack sofware developer and web designer student. I truly enjoy using my newly acquired technical skills to develop creative and innovative applications. I am a fast learner with a strong desire to continue expanding my knowledge. I am self-motivated and a team player. Let's build something together!
                </Typography>
                <Box component='div' className={classes.timeLine}>
                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2021
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography 
                        variant='h5' 
                        aligh='center' 
                        className={classes.subHeading}>
                            Student at CU Denver Trilogy extension
                        </Typography>
                        <Typography 
                        variant='body1' 
                        aligh='center' 
                        style={{ color: '#FF6347' }}>
                            April 2021 - Present
                        </Typography>
                        <Typography 
                        variant='subtitle1' 
                        aligh='center' 
                        style={{ color: '#d2b48c' }}>
                            CU Denver Coding Boot Camp
                        </Typography>
                    </Box>
                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2019
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                            Certified Nurse Aide
                        </Typography>
                        <Typography variant='body1' align='center' style={{ color: '#FF6347' }}>
                            June 2019 - Present
                        </Typography>
                        <Typography variant='subtitle1' align='center' style={{ color: '#d2b48c' }}>
                            Centura Adventist Hospital
                        </Typography>
                    </Box>
                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2017
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                            Certificate Nurse Aide
                        </Typography>
                        <Typography variant='body1' align='center' style={{ color: '#FF6347' }}>
                            September 2017 - November 2017
                        </Typography>
                        <Typography variant='subtitle1' align='center' style={{ color: '#d2b48c' }}>
                        Compass CNA
                        </Typography>
                    </Box>
                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2012
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                            Patient Experience Manager
                        </Typography>
                        <Typography variant='body1' align='center' style={{ color: '#FF6347' }}>
                            November 2012 - October 2013
                        </Typography>
                        <Typography variant='subtitle1' align='center' style={{ color: '#d2b48c' }}>
                        University of Colorado Hospital
                        </Typography>
                    </Box>
                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2010
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                            Undergrad
                        </Typography>
                        <Typography variant='body1' align='center' style={{ color: '#FF6347' }}>
                            May 2010 - April 2015
                        </Typography>
                        <Typography variant='subtitle1' align='center' style={{ color: '#d2b48c' }}>
                        Metropolitan State University
                        </Typography>
                    </Box>
                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2008
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                            Radiology Technician
                        </Typography>
                        <Typography variant='body1' align='center' style={{ color: '#FF6347' }}>
                            November 2008 - November 2015
                        </Typography>
                        <Typography variant='subtitle1' align='center' style={{ color: '#d2b48c' }}>
                        Concentra Medical Center
                        </Typography>
                    </Box>
                    <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2007
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='center' className={classes.subHeading}>
                            Limited Scope Radiology Technician
                        </Typography>
                        <Typography variant='body1' align='center' style={{ color: '#FF6347' }}>
                            February 2007 - October 2008
                        </Typography>
                        <Typography variant='subtitle1' align='center' style={{ color: '#d2b48c' }}>
                        Heritage College Technical School
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Resume
