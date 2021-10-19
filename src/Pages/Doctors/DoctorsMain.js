import React, {useEffect, useState} from "react";
import { Container, Row } from "react-bootstrap";
import DoctorsCard from "./DoctorsCard";
import '../../CustomCss/CustomUtility.css'
function DoctorsMain() {
    const [doctors,setDoctors] = useState([])
    useEffect(() =>{
        fetch('./doctors.json')
        .then(Response => Response.json())
        .then(data => {
            console.log(data)
            setDoctors(data)
        })
    },[])

    return(
        <div className=
        'secondery-section-background'>
            <Container>
                <h2 className='text-center 
                secondery-color
                pt-4'
                >Our Specialist Doctor</h2>
            <Row xs={12} md={4} 
                className='d-flex 
                justify-content-center'>
                {
                    doctors.map(doctor => <DoctorsCard
                    key={doctor.id}
                    doctorObject={doctor}>
                    </DoctorsCard>)
                }
            </Row>
        </Container>
        </div>
    )
}
export default DoctorsMain;