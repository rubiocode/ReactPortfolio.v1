import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    particlesCanva: {
        position: 'absolute'
    }
})
const Home = () => {

    const classes = useStyles()

    return (
        <>
            <Navbar />
            <Header />
            <Particles 
            canvasClassName={classes.particlesCanva}

                params={{
                    particles:{
                        number:{
                            value: 200,
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 1,
                                color: '#ccc'
                            }
                        },
                        opacity: {
                            value: 0.5,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 1
                            }
                        },
                        size: {
                            value: 5,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 30
                            }
                        },
                        line_linked: {
                            enable: true,
                            distance: 120
                        },
                        move: {
                            enable: true,
                            speed: 2
                        }
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'repulse'
                            }
                        },
                        modes: {
                            repulse: {
                                distance: 300,
                                duration: 0.4
                            }
                        }
                    }
                }}
            />
        </>
    )
}

export default Home
