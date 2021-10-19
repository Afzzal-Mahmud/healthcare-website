import React from "react";
import './ServicesCard.css'
import '../../../CustomCss/CustomUtility.css'
import { Button, Card, Col } from "react-bootstrap";

function ServicesCard({serviceObject}) {
    const {id,service,description,image} = serviceObject;
    const littleDescription = description.slice(0, 50)
    return(
        <Col className='mt-4'>
            <Card className="text-center my-4 p-4 h-100">
            <div className='img-container'>
                    <img src={image} alt="" />
                </div>
    <Card.Body className='mt-4'>
      <Card.Title>{service}</Card.Title>
      <Card.Text>
       {littleDescription}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button className='primary-services-btn'>See Details</Button>
    </Card.Footer>
  </Card>
        </Col>
    )
}
export default ServicesCard;