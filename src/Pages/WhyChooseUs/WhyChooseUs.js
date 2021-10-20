import React from "react";
import { Container } from "react-bootstrap";
import { CalendarDay, ChatText, PersonBoundingBox, ShareFill } from "react-bootstrap-icons";
import './WhyChooseUs.css'

function WhyChooseUs() {
    return(
        <Container>
                <h2 className='chose-us-title'>Healthy Dosen't Have To Be <br className='hide-mobile' /> Hard. We Make It Easy </h2>
            <div className="item-container">
                {/* Container header */}
                {/* single item body */}
                <div className="item-body">
                    <div>
                        <CalendarDay className="item-image mb-4"></CalendarDay>
                    </div>
                    <div className="item-info">
                        <h4>Schedule</h4>
                        <p>Choose a time that work for you and share some content for your session</p>
                    </div>
                </div>
                {/* single item body */}
                <div className="item-body">
                    <div>
                        <ShareFill className="item-image mb-4"></ShareFill>
                    </div>
                    <div className="item-info">
                        <h4>Connect</h4>
                        <p>Join a video or phone seesion with your specialist at the schedule time</p>
                    </div>
                </div>
                {/* single item body */}
                <div className="item-body">
                    <div>
                        <ChatText className="item-image mb-4"></ChatText>
                    </div>
                    <div className="item-info">
                        <h4>Talk</h4>
                        <p>Explore what's on your mind whithout any kind of hassitation</p>
                    </div>
                </div>
                {/* single item body */}
                <div className="item-body">
                    <div>
                        <PersonBoundingBox className="item-image mb-4"></PersonBoundingBox>
                    </div>
                    <div className="item-info">
                        <h4>Experience</h4>
                        <p>Our highly specialize experts are deeply experienced in there field</p>
                    </div>
                </div>

            </div>
        </Container>
    )
}
export default WhyChooseUs;