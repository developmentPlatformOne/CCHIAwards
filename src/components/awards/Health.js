import React from 'react';
import { Container, Tabs, Tab, Accordion, Card  } from 'react-bootstrap';

const Health = () => {
  return (
    <section className="awardsTabs">
      <Container>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Home">
            <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                TAB 1
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>This is first tab body</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                TAB 2
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body>This is second tab body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              2
            </Tab>
            <Tab eventKey="contact" title="Contact">
              3
            </Tab>
        </Tabs>
        
      </Container>
    </section>
  );
};

export default Health;