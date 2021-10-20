import React from "react";
import './ServicesCard.css'
import '../../../CustomCss/CustomUtility.css'
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ServicesCard({serviceObject}) {
    const {id,service,description,image} = serviceObject;
    const littleDescription = description.slice(0, 50)
    return(
      /* card-pop-up use for scale up the services card*/
        <Col className='mt-4 card-pop-up'>
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
    {/* on button click load each single data of the services on services detail page */}
    <Card.Footer>
      <Link to={`/servicesdetail/${id}`}>
        {/* pop-out-btn class is come from Home.css  */}
      <Button className='
              primary-services-btn
              pop-out-btn'>See Details</Button>
      </Link>
    </Card.Footer>
  </Card>
        </Col>
    )
}
export default ServicesCard;