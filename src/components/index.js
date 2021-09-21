import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Particles from "react-tsparticles";
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
        background: {
            color: {
                value: "#fff",
            },
        },
        fpsLimit: 100,
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                bubble: {
                    distance: 400,
                    duration: 4,
                    opacity: 0.8,
                    size: 40,
                },
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 400,
                    duration: 0.6,
                },
            },
        },
        particles: {
            color: {
                value: ["#f1c40f", "#9b59b6", "#e74c3c", "#2ecc71"],
                
            },
            links: {
                color: '#3498db',
                distance: 100,
                //enable: true,
                width: 1,
            },
            collisions: {
                //enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                //outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    value_area: 800,
                },
                value: 500,
            },
            opacity: {
                value: 1,
            },
            shape: {
                type: "circle",
            },
            size: {
                random: true,
                value: 5,
            },
        },
        detectRetina: true,
    }}
            />
        </>
    )
}

export default Home
