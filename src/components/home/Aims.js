import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import sound from '../../dist/img/sound.svg'
import gear from '../../dist/img/gear.svg'
import handshake from '../../dist/img/handshake.svg'
import badge from '../../dist/img/badge.svg'

const Banner = () => {
  return (
    <section className="aims">
        <Container>
            <h2>Aims and Objective</h2>
            <Row>
                <Col>
                    <figure>
                        <img src={badge} alt="aims" />
                        <figcaption>Acknowledge</figcaption>
                        <p>
                            Acknowledge and recognize those operating at the highest standards within the private health insurance
                        </p>
                    </figure>
                </Col>
                <Col>
                    <figure>
                        <img src={handshake} alt="aims" />
                        <figcaption>Encourage</figcaption>
                        <p>
                            Encourage and support the development of Private health insurance sector towards quality and transparency.
                        </p>
                    </figure>
                </Col>
                <Col>
                    <figure>
                        <img src={gear} alt="aims" />
                        <figcaption>Provide</figcaption>
                        <p>
                            Provide unparallel networking opportunities to the individuals and raise standards of industry excellence in the country and region.
                        </p>
                    </figure>
                </Col>
                <Col>
                    <figure>
                        <img src={sound} alt="aims" />
                        <figcaption>Promote</figcaption>
                        <p>
                            Promote a culture of innovation in Saudi Arabia health insurance industry.
                        </p>
                    </figure>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Banner;