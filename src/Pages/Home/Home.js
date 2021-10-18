import React from "react";
import './Home.css';
import { Button, Container } from "react-bootstrap";
import heroDoctor from '../../Image/hero-doctor-image.jpg';

function Home() {
    return(
        <div className='secondery-section-background'>
        <Container
        className='d-flex 
        justify-content-between 
        padding-top'>
            {/* hero or home page info */}
                <div className='pt-4'>
                <h1 className='fw-bold 
                font-big'>Providing best <br /> medical care</h1>

                <p className='font-p py-4'>At health grate, we take guesswork out of finding <br /> the right doctors and core for you and your family</p>

                {/* hero btn */}
                <Button 
                className='background-color
                           btn-padding
                           fw-bold'>
                Appointment</Button>
                </div>
            <div className='margin-top position-relative'>
                <img className='img-fluid' src={heroDoctor} alt="hero-image" />
                <div className='hero-img-background'></div>
            </div>
        </Container>
        </div>
    )
}
export default Home;