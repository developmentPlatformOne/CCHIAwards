import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import person1 from '../../dist/img/person1.jpg';
import person2 from '../../dist/img/person2.jpg';
import shamp2 from '../../dist/img/shamp2.jpg';

const About = () => {
  return (
    <section className="about">
        <div className="about_1">
        <Container>
            <Row>
                <Col md={12} lg={6}>
                    <img src={person2} alt="person2" />
                </Col>
                <Col md={12} lg={6}>
                    <h2>About CCHI Awards</h2>
                    <h3>His Excellence, DR. TAWFIG BIN FAWZAN ALRABIAH​.</h3>
                    <p>This step aims to raise the quality of health care and focus on prevention in a way that serves the council’s vision of enhancing the quality and sustainability of health services. The council’s mission coincides with the objectives of the Award for Excellence in the Private Health Insurance Sector, which is to stimulate the private health insurance sector.</p>
                    <p>To reach the highest standards in quality, service and care for beneficiaries in the Kingdom in a sustainable pioneering environment.</p>
                </Col>
            </Row>
        </Container>
        </div>
        <div className="about_2">
        <Container fluid>
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <h2>About CCHI Awards</h2>
                        <p>
                            CCHI AWARD OF EXCELLENCE IN COOPERATIVE HEALTH INSURANCE – 2021.
                        </p>
                        <p>
                            Council of Cooperative Health Insurance (CCHI) is proud to announce the first edition of CCHI awards to acknowledge excellence and innovation in healthcare and health insurance sector. It will provide unparallel networking opportunities to the individuals and raise standards of industry excellence in the country and region. The awards are backed by a panel of highly distinguished judges with clearly defined criteria and transparent procedure.
                        </p>
                        <p>
                            Whether you are Health Insurer, Medical service provider, Third-Party Administrator (TPA) or Non-Governmental Organization (NGO) there is a CCHI award that honors your remarkable contribution to the Saudi Arabia health insurance sector
                        </p>
                    </Col>
                    <img src={shamp2} alt="shamp2" />
                    <Col>
                        
                    </Col>
                </Row>
            </Container>
        </Container>
        </div>
        <div className="about_3">
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <h2>About CCHI Awards</h2>
                        <h3>DR. SHABAB AL-GHAMDI.</h3>
                        <h4>The Secretary General of the Council of Cooperative Health Insurance</h4>
                        <p>The Council of Cooperative Health Insurance is pleased to announce the first edition of the Excellence Award in the Private Health Insurance Sector to recognize excellence and innovation in the health care and health insurance sector. Which supports the strategic objectives of the Council a sector stimulated by quality, and the strategic goal to improve sustainability and innovation in the sector.</p>
                    </Col>
                    <Col md={12} lg={6}>
                        <img src={person1} alt="person1" />
                    </Col>
                </Row>
            </Container>
        </div>


        
    </section>
  );
};

export default About;