import React, { Fragment, useState } from 'react';
import { Container, Tabs, Tab, Accordion, Card, useAccordionToggle, Button  } from 'react-bootstrap';
import plus from '../../dist/img/plus.svg';

function CustomToggle({ children, eventKey, handleClick }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () => {
    handleClick();
  });

  return (
    <div className="card-header" type="button" onClick={decoratedOnClick}>
      {children}
    </div>
  );
}

const ThirdParty = () => {
  const [activeKeyChild, setActiveKeyChild] = useState("00");
  return (
    <section className="awardsTabs customAwardsTabs_2">
      <div className="awardsTabsHeader">
        Third Party Administrators (TPAs) Awards
      </div>
      <Container>
        <Tabs defaultActiveKey="tab_5" id="uncontrolled-tab-example">
            <Tab className="tabChild" eventKey="tab_5"  
                 title={<Fragment>
                  <div className="tabImg"></div>
                  <span>Health Insurance Company of the Year</span>
                 </Fragment>}>
                 <Accordion defaultActiveKey="50">
                  <Card>
                      <CustomToggle
                        as={Card.Header}
                        eventKey="50"
                        handleClick={() => {
                          if (activeKeyChild === "50") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("50");
                          }
                        }}
                      >
                        <span>Description</span>
                        <img alt="img" src={plus} className={activeKeyChild === "50" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="50">
                          <Card.Body>
                            <p>
                              Awarded for market leadership in customer service, unmatched leadership in claim handling/facilitation, business growth, active promotion of the importance of health insurance, product innovation and Corporate Social Responsibility.
                            </p>
                            <strong>
                              This award will be based on the classification of Insurance Companies:
                            </strong>
                            <p>
                              Awarded to both Large and Mid/Small size health insurance companies (based on premiums) 
                            </p>
                          </Card.Body>
                      </Accordion.Collapse>
                  </Card>

                  <Card>
                      <CustomToggle
                        as={Card.Header}
                        eventKey="51"
                        handleClick={() => {
                          if (activeKeyChild === "51") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("51");
                          }
                        }}
                      >
                        <span>The evaluation criteria </span>
                        <img alt="img" src={plus} className={activeKeyChild === "51" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="51">
                          <Card.Body>
                            <ul>
                              <li>
                              Showing evidence of sustainable business growth and profitability in its health insurance portfolio
                              </li>
                              <li>
                              Showing evidence of active promotion of the importance of health insurance as a means of protecting the population against ill health
                              </li>
                              <li>
                              Claim Processing and Settlement Time
                              </li>
                              <li>
                              Use of modern tools and technology to improve claims experience and customer service for policyholders 
                              </li>
                              <li>
                              Clients’ testimonials
                              </li>
                              <li>
                              Initiative which can include Corporate Social Responsibility (CSR Initiative, Population Health Initiative or Public Health Initiative taken by the business at a national level in promoting social inclusion, sustainable communities, promoting public health and wellbeing of the community and the impact achieved through the initiative
                              </li>
                              <li>
                              Product Innovation
                              </li>
                            </ul>
                          </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                  <Card>
                      <CustomToggle
                        as={Card.Header}
                        eventKey="52"
                        handleClick={() => {
                          if (activeKeyChild === "52") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("52");
                          }
                        }}
                      >
                        <span>What we will look for ? </span>
                        <img alt="img" src={plus} className={activeKeyChild === "52" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="52">
                          <Card.Body>
                            <ul>
                              <li>
                              Evidence of sustainable business growth and profitability (through facts and figures - Revenue/revenue growth, Premium growth, Net Profit Figures for the Last five Years ) in health insurance portfolio
                              </li>
                              <li>
                              How does the company promoted about the importance of health insurance in the last 1 Year (Give at least 4 Examples, 2 Online and 2 Offline)? 
                              </li>
                              <li>
                              What's the key message in the promotion (Give at least 4 Examples)?
                              </li>
                              <li>
                              Provide information related to:
                              <ul>
                                <li>
                                Number of complaints received in the past 1 Year
                                </li>
                                <li>
                                Claim settlement ratio in the past 1 Year
                                </li>
                                <li>
                                Claim Settlement time" in the past 1 Year
                                </li>
                              </ul>
                              </li>
                              <li>
                              Give 1-2 examples of tools and technologies implemented in the past 1 year to improve claim filing experience for the policy holder
                              </li>
                              <li>
                              Give 1-2 examples of Impact that these tools and technologies have on the claim settlement ratio and claim settlement time
                              </li>
                              <li>
                              Provide 5 client testimonials
                              </li>
                              <li>
                              Give 1-2 examples of initiatives taken in the past 1 years  at national level by the company in order to promote social inclusion, sustainable communities, promoting public health  and wellbeing of the society
                              </li>
                              <li>
                              Give 1-2 Examples of impact that have been achieved through the initiative
                              </li>
                              <li>
                              What  new product has been launched/introduced in the past 1 Year? 
                              </li>
                              <li>
                              Give 3 examples of unique features of the product?
                              </li>
                              <li>
                              Give 2 examples of how the product has an impact on the business and customer satisfaction level
                              </li>
                            </ul>
                          </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                  <Card>
                      <CustomToggle
                        as={Card.Header}
                        eventKey="53"
                        handleClick={() => {
                          if (activeKeyChild === "53") {
                            setActiveKeyChild(null);
                          } else {
                            setActiveKeyChild("53");
                          }
                        }}
                      >
                        <span>Format of Submission</span>
                        <img alt="img" src={plus} className={activeKeyChild === "53" ? "plus activeAccChild" : "plus"} />
                      </CustomToggle>
                      <Accordion.Collapse className="collapseHolder" eventKey="53">
                          <Card.Body>
                            <ul>
                              <li>
                              This will be part of 1000 word writeup Facts and figures should be presented in a bar chart format
                              </li>
                              <li>
                              This will be a part of 1000 word write up
                              </li>
                              <li>
                              This will be a part of 1000 word write up and will be justified by supporting documents where the figures for the past 1 year should be presented in a form of a table
                              </li>
                              <li>
                              This will be a part of 1000 word write up
                              </li>
                              <li>
                              This needs to be presented through supporting documents
                              </li>
                              <li>
                              This will be a part of 1000 word write up
                              </li>
                              <li>
                              This will be a part of 1000 word write up
                              </li>
                            </ul>
                          </Card.Body>
                      </Accordion.Collapse>
                  </Card>
                  <div className="btnHolder">
                    <Button id="HealthInsuranceCompanyOfTheYear">Nominate</Button>
                  </div>
                </Accordion>
            </Tab>
        </Tabs>
        
      </Container>
    </section>
  );
};

export default ThirdParty;