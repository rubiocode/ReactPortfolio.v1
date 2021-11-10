import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';
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
                    
                                image='https://user-images.githubusercontent.com/78938193/141062541-482c063a-1e6d-440b-ac2e-68b0004c33c7.png'>

                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Make My Day.v2
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    component='p'>
                                    Revamped former group project to create a photo search app featuring search image function, infinite scrolling, and user photo information.
                                    <br></br>
                                    Built with: Material UI | Node | React | Styled-Components | Unsplash API
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <IconButton href="https://rubiocode.github.io/MakeMyDay.v2/ " target="_blank">
                                <LanguageIcon />
                            </IconButton>
                            <IconButton href="https://github.com/rubiocode/MakeMyDay.v2" target="_blank">
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
                                image='https://user-images.githubusercontent.com/78938193/141203657-e7b263fa-3043-457c-8dd6-d4d13e9bb728.png'>

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
                                image='https://user-images.githubusercontent.com/78938193/141203451-974f88f9-d9f9-4b78-b7d6-320c8a05b6d2.png'>

                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Belle L'Jaru Skincare Store
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    component='p'>
                                    Mock skincare store featuring user authentication, mock skincare products, product search, skincare quiz, skincare routine, and stripe payments.
                                    Built with: Apollo Server | GraphQL | MaterialUI | MERN | Parallax | Stripe 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton href="https://desolate-hamlet-45640.herokuapp.com/" target="_blank">
                                <LanguageIcon />
                            </IconButton>
                            <IconButton href="https://github.com/jazcr/belle-ljru" target="_blank">
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
