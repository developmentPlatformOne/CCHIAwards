import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import judge1 from "../../dist/img/judge1.webp";
import judge2 from "../../dist/img/judge2.webp";
import judge3 from "../../dist/img/judge3.webp";

export default class JudgeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <section className="judgeSlider">
        <Container>
          <h2>2021 Judge Panel</h2>
          <Slider {...settings}>
            <div className="judgeSlider-holder">
              <figure>
                <img src={judge3} alt="judge" />
                <figcaption>
                  <h4>Lamar Hasbrouch</h4>
                  <h5>the Council of Cooperative Health Insurance</h5>
                  <p>Sr. Advisor National Health Insurance Company</p>
                  <span>Based on EFESO Recommendation</span>
                </figcaption>
              </figure>
            </div>
            <div className="judgeSlider-holder">
              <figure>
                <img src={judge2} alt="judge" />
                <figcaption>
                  <h4>Daniel Whitehead</h4>
                  <h5>Health Insurance Companies</h5>
                  <p>Executive Director of National Association of County and City Health Officials (NACCHO)</p>
                  <span>Based on CCHI Recommendation</span>
                </figcaption>
              </figure>
            </div>
            <div className="judgeSlider-holder">
              <figure>
                <img src={judge1} alt="judge" />
                <figcaption>
                  <h4>Hanadi Al-Salmi</h4>
                  <h5>Healthcare Provider</h5>
                  <p>Assistant Director, infection control and hospital epidemiology - King Faisal Specialist Hospital and Research Center</p>
                  <span>Part of the judge panel pf ADAA Health Awards 2020</span>
                </figcaption>
              </figure>
            </div>
            <div className="judgeSlider-holder">
              <figure>
                <img src={judge3} alt="judge" />
                <figcaption>
                  <h4>Lamar Hasbrouch</h4>
                  <h5>the Council of Cooperative Health Insurance</h5>
                  <p>Sr. Advisor National Health Insurance Company</p>
                  <span>Based on EFESO Recommendation</span>
                </figcaption>
              </figure>
            </div>
            <div className="judgeSlider-holder">
              <figure>
                <img src={judge2} alt="judge" />
                <figcaption>
                  <h4>Daniel Whitehead</h4>
                  <h5>Health Insurance Companies</h5>
                  <p>Executive Director of National Association of County and City Health Officials (NACCHO)</p>
                  <span>Based on CCHI Recommendation</span>
                </figcaption>
              </figure>
            </div>
            <div className="judgeSlider-holder">
              <figure>
                <img src={judge1} alt="judge" />
                <figcaption>
                  <h4>Hanadi Al-Salmi</h4>
                  <h5>Healthcare Provider</h5>
                  <p>Assistant Director, infection control and hospital epidemiology - King Faisal Specialist Hospital and Research Center</p>
                  <span>Part of the judge panel pf ADAA Health Awards 2020</span>
                </figcaption>
              </figure>
            </div>
            <div className="judgeSlider-holder">
              <figure>
                <img src={judge3} alt="judge" />
                <figcaption>
                  <h4>Lamar Hasbrouch</h4>
                  <h5>the Council of Cooperative Health Insurance</h5>
                  <p>Sr. Advisor National Health Insurance Company</p>
                  <span>Based on EFESO Recommendation</span>
                </figcaption>
              </figure>
            </div>
            <div className="judgeSlider-holder">
              <figure>
                <img src={judge2} alt="judge" />
                <figcaption>
                  <h4>Daniel Whitehead</h4>
                  <h5>Health Insurance Companies</h5>
                  <p>Executive Director of National Association of County and City Health Officials (NACCHO)</p>
                  <span>Based on CCHI Recommendation</span>
                </figcaption>
              </figure>
            </div>
            <div className="judgeSlider-holder">
              <figure>
                <img src={judge1} alt="judge" />
                <figcaption>
                  <h4>Hanadi Al-Salmi</h4>
                  <h5>Healthcare Provider</h5>
                  <p>Assistant Director, infection control and hospital epidemiology - King Faisal Specialist Hospital and Research Center</p>
                  <span>Part of the judge panel pf ADAA Health Awards 2020</span>
                </figcaption>
              </figure>
            </div>
          </Slider>
        </Container>
      </section>
    );
  }
}