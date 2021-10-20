import React from "react";
import './Home.css';
import '../../CustomCss/CustomUtility.css'
import { Button, Container } from "react-bootstrap";
import heroDoctor from '../../Image/hero-doctor-image.jpg';
import ServicesMain from "../Services/ServicesMain/ServicesMain";
import { Link } from "react-router-dom";

function Home() {
    return(
        <>
        <div id='home' className='secondery-section-background                                position-relative
                   responsive-hero-section'>
        <Container
        className='responsive-flex 
        justify-content-between 
        padding-top'>
            {/* hero or home page info */}
                <div className='pt-4'>
                <h1 className='fw-bold 
                font-big'>Providing best <br className='hide-mobile' /> medical care</h1>

                <p className='font-p py-4'>At health grate, we take guesswork out of finding <br className='hide-mobile'/> the right doctors and core for you and your family</p>

                {/* hero btn */}
                <Link to='/doctors'>
                <Button 
                className='background-color
                           btn-padding
                           fw-bold'>
                Appointment</Button>
                </Link>
                </div>
            <div className='margin-top 
                            position-relative 
                            responsive-img'>
                <img className='img-fluid' src={heroDoctor} alt="hero-image" />
                <div className='hero-img-background'></div>
            </div>
        </Container>
        {/* this is the last happy patient part */}
        <div className='d-flex 
                        text-white
                        justify-content-start 
                        secondery-background-color
                        position-absolute
                        align-items-center
                        pt-4
                        hero-end'
                        >
            <div>
                <h2>400K Plus</h2>
                <p>Happy Patient</p>
            </div>
            <div>
                <h2>200K Plus</h2>
                <p>Health Department</p>
            </div>
        </div>
        </div>
        {/* The services secTion */}
        <ServicesMain></ServicesMain>
        </>
    )
}
export default Home;