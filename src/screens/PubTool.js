import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card className="card-accent-primary">
          <CardHeader className="text-center">
            <strong>Tools Information</strong>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs="12" sm="6">
                <Card className="card-accent-primary">
                  <img
                    className="card-img-top"
                    src="../assets/img/video/-giant.jpg"
                    alt="cardcap"
                  ></img>
                  <CardBody>
                    Encik Raman is a Native Orang Asli who have many experience
                    in the jungle survival skill. He teach a lot people and
                    students in making tools and handcrafts. This video is to
                    show his usual way he teach the students. For those who are
                    interest to learn the survival skill you may check at Google
                    serach 'Jungle School Gombak'.
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12" sm="6">
                <Card className="card-accent-primary">
                  <img
                    className="card-img-top"
                    src="./assets/img/video/day 1.jpg"
                    alt="cardcap"
                  ></img>
                  <CardBody>
                    Encik Raman is a Native Orang Asli who have many experience
                    in the jungle survival skill. He teach a lot people and
                    students in making tools and handcrafts. This video is to
                    show his usual way he teach the students. For those who are
                    interest to learn the survival skill you may check at Google
                    serach 'Jungle School Gombak'.
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="6">
                <Card className="card-accent-primary">
                  <img
                    className="card-img-top"
                    src="./assets/img/video/day 1.jpg"
                    alt="cardcap"
                  ></img>
                  <CardBody>
                    Encik Raman is a Native Orang Asli who have many experience
                    in the jungle survival skill. He teach a lot people and
                    students in making tools and handcrafts. This video is to
                    show his usual way he teach the students. For those who are
                    interest to learn the survival skill you may check at Google
                    serach 'Jungle School Gombak'.
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12" sm="6">
                <Card className="card-accent-primary">
                  <img
                    className="card-img-top"
                    src="./assets/img/video/day 1.jpg"
                    alt="cardcap"
                  ></img>
                  <CardBody>
                    Encik Raman is a Native Orang Asli who have many experience
                    in the jungle survival skill. He teach a lot people and
                    students in making tools and handcrafts. This video is to
                    show his usual way he teach the students. For those who are
                    interest to learn the survival skill you may check at Google
                    serach 'Jungle School Gombak'.
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default Cards;
