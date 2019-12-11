import React, { Component } from "react";
import {
  // Badge,
  Card,
  CardBody,
  Jumbotron,
  CardHeader,
  Col,
  Row
  // Collapse,
  // Fade
} from "reactstrap";
// import { AppSwitch } from "@coreui/react";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card className="card-accent-primary">
          {/* <CardHeader className="text-center">
            <strong>Meet Our Expertise</strong>
          </CardHeader> */}

          <Jumbotron fluid>
            <h2 className=" text-center">Meet Our Expertise</h2>
            <hr className="my-2" />
            <p className="lead text-center">
              The Diamonds in the Rough (Our Coaches)
            </p>

            <CardBody>
              <Row>
                <Col xs="12" sm="6">
                  <Card>
                    <CardHeader className="text-center">
                      <strong>Raman Bah Tuin</strong>
                    </CardHeader>
                    <CardBody>
                      <img
                        className="card-img-top py-3"
                        src="./assets/img/contact/Raman Bah Tuin.png"
                        alt="cardcap"
                      ></img>
                      <p>Our Main Coach</p>
                      <p>​Masters in building the Kerchang puzzles</p>
                      <p>
                        One of the five experts in the world that can play a
                        Nose Flute
                      </p>
                      <p>Tribe : Semai</p>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs="12" sm="6">
                  <Card>
                    <CardHeader className="text-center">
                      <strong>Tok Batin Ulang bin Sipang</strong>
                    </CardHeader>
                    <CardBody>
                      <img
                        className="card-img-top py-3"
                        src="./assets/img/contact/tok batin ulana bin sipang.png"
                        alt="cardcap"
                      ></img>
                      <p>
                        The Chief of the villages in Kampung Batu 12, Kampung
                        Batu 16 and Sungai Relang
                      </p>
                      <p>​Tribe : Temuan</p>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs="12" sm="6">
                  <Card>
                    <CardHeader className="text-center">
                      <strong>Amek Khatija</strong>
                    </CardHeader>
                    <CardBody>
                      <img
                        className="card-img-top py-3"
                        src="./assets/img/contact/Amek Khatija.png"
                        alt="cardcap"
                      ></img>
                      <p>Masters in weaving arts</p>
                      <p>Tribe : Temiar</p>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs="12" sm="6">
                  <Card>
                    <CardHeader className="text-center">
                      <strong>Atak Andok</strong>
                    </CardHeader>
                    <CardBody>
                      <img
                        className="card-img-top py-3"
                        src="./assets/img/contact/Atak Andok.png"
                        alt="cardcap"
                      ></img>
                      <p>Masters in weaving arts</p>
                      <p>Tribe : Temiar</p>
                      <p>Husband of Amek Abok</p>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs="12" sm="6">
                  <Card>
                    <CardHeader className="text-center">
                      <strong>Amek Abok</strong>
                    </CardHeader>
                    <CardBody>
                      <img
                        className="card-img-top py-3"
                        src="./assets/img/contact/Amek Abok.png"
                        alt="cardcap"
                      ></img>
                      <p>Masters in weaving arts</p>
                      <p>Tribe : Temiar</p>
                      <p>Wife of Atak Andok</p>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs="12" sm="6">
                  <Card className="card-accent-success">
                    <CardHeader className="text-center ">
                      <strong>Contact Us</strong>
                    </CardHeader>
                    <CardBody className="bg-success text-dark">
                      <h4 className="text-center">
                        <strong>Jungle School Gombak Malaysia</strong>
                      </h4>
                      <p>Email : jungleschoolgombak@gmail.com</p>
                      <p>Phone : 0193822591 </p>
                      <p>
                        Address : Kampung Batu 12, Jalan Gombak-Bentong Lama
                        Gombak 53100
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Jumbotron>
        </Card>
      </div>
    );
  }
}
export default Cards;
