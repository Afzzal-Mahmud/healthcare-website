import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
// import singleImage from '../../../Image/details-image.jpg'
function ServicesDetail() {

    const params = useParams();
    const { services } = useAuth()

    /* finding the matched service based on click */
    const matchedService = services.find(service => service.id == params.id)

    /* this components is under construction */

    return (
        <Container className='d-flex justify-content-center'>
            {/* <div className='service-detail-body'> */}
            <Card style={{maxWidth:'40rem'}}>
                <div className='text-center'>
                    <Card.Img className='w-25' variant="top" src={matchedService.image} /></div>
                <Card.Body>
                    <Card.Title> <h3 className='py-4 text-center'>{matchedService.service}</h3> </Card.Title>
                    <Card.Text>
                        <h5>{matchedService.description}</h5>
                    </Card.Text>
                </Card.Body>
            <Link to='/home'>
                <Button className='my-4 ms-4'>Go Home</Button>
                </Link>
            </Card>
            {/* <div>
            </div>
            for more work is
            <div><img src={singleImage} alt="" /></div>
            </div> */}
        </Container>
    )
}
export default ServicesDetail;