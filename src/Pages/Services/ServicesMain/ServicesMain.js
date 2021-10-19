import React, {useEffect, useState} from "react";
import { Container, Row } from "react-bootstrap";
import ServicesCard from "../ServicesCard/ServicesCard";
function ServicesMain() {
    const [services,setServices] = useState([])
    useEffect(() =>{
        fetch('./services.json')
        .then(Response => Response.json())
        .then(data => {
            console.log(data)
            setServices(data)
        })
    },[])
    /* main services section on under the Home */
    return(
        <div className='secondery-section-background'>
            <Container>
                <h2 className='text-center pt-4'>Our Services</h2>
            <Row xs={12} md={4}>
                {
                    services.map(service => <ServicesCard
                    key={service.id}
                    serviceObject={service}>
                    </ServicesCard>)
                }
            </Row>
        </Container>
        </div>
    )
}
export default ServicesMain;