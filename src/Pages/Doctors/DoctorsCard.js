import React from "react";
import '../../CustomCss/CustomUtility.css'
import './DoctorsCard.css'
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function DoctorsCard({ doctorObject }) {
  const { name, image, aboutDoctor } = doctorObject;
  return (
    <Col className='card-margin'>
      <Card 
      className='h-100 
      position-relative' 
      style={{ width: '18rem' }}>

        <div className='doctor-card-image'><Card.Img variant="top" src={image} /></div>
        <Card.Body className='card-padding'>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {aboutDoctor}
          </Card.Text>
          {/* btn on click it will be private route */}
          <Link to='/info'>
          <Button variant="primary" 
                  className='.primary-services-btn 
                              btn-position'
                  >Appointment</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}
export default DoctorsCard;