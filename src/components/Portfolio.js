import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';
import project1 from '../img/Project1.png';
import project2 from '../img/ufo.png';
import project3 from '../img/coming.jpeg';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
//import classes from '*.module.css';
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    IconButton
} from '@material-ui/core';

const useStyles = makeStyles({
    mainContainer: {
        background: '#f8f1cd',
        height: '100%',
        width: '100%',
        margin: '0px'
    },
    cardContainer: {
        maxWidth: 345,
        margin: '3rem'
    },
    heading: {
        color: '#000',
        padding: '3rem 0 0 1rem',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
})

const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component='div' spacing={2} className={classes.mainContainer}>
            <Navbar />
            <Typography className={classes.heading} variant='h4'>
                <Typed strings={['Check out these projects']} typeSpeed={40} />
            </Typography>
            <Grid container justify='center' alignItems='center'>
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                alt='Project 1'
                                height='140'
                                image={project1}>

                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Make My Day
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    component='p'>
                                    This version of Make My Day App showcases my personal style and layout of the homepage. This
                                    app presents the user with an uplifting gallery of foxy images, quotes, and gifs.
                                    <br></br>
                                    Built with: HTML | CSS | JavaScript | JQuery | JSON | AJAX | MDBootstrap | CSS Gradient IO |
                                    Third Party APIs
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <IconButton href="https://rubiocode.github.io/Make_My_Day/index.html" target="_blank">
                                <LanguageIcon />
                            </IconButton>
                            <IconButton href="https://github.com/rubiocode/Make_My_Day" target="_blank">
                                <GitHubIcon />
                            </IconButton>
                        </CardActions>

                    </Card>
                </Grid>
                {/* Project 2 */}
                <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                alt='Project 2'
                                height='140'
                                image={project2}>

                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    UFO Sightings Blog
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    component='p'>
                                    This application implements the MVC paradigm structure and uses Handlebars.js as a
                                    template to render pages. In addition, the application uses Express-Session npm package for authentication.
                                    <br></br>
                                    Built with: HTML | CSS | JavaScript | Node | Restful APIs | Express | MySQL | Handlebars |
                                    UIKit
                                    <br></br>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton href="https://the-4th-kind.herokuapp.com/" target="_blank">
                                <LanguageIcon />
                            </IconButton>
                            <IconButton href="https://github.com/uglyb0nes/4thKind" target="_blank">
                                <GitHubIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
                {/* Project 3 */}
                <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                alt='Project 3'
                                height='140'
                                image={project3}>

                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Project 3
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    component='p'>
                                    Coming Soon...
                                    Coming Soon...
                                    Coming Soon...
                                    Coming Soon...
                                    Coming Soon...
                                    Coming Soon...
                                    Coming Soon...
                                    Coming Soon...
                                    Coming Soon...
                                    Coming Soon...
                                    Coming Soon...
                                    Coming Soon...
                                    Coming Soon...
                                    Coming Soon...
                                    Coming Soon...
                                    Coming Soon...
                                    Coming Soon...
                                    Coming Soon...
                                    Coming Soon...
                                    Coming Soon...
                                    Coming Soon...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton href="https://github.com/rubiocode" target="_blank">
                                <LanguageIcon />
                            </IconButton>
                            <IconButton href="https://github.com/rubiocode" target="_blank">
                                <GitHubIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio
