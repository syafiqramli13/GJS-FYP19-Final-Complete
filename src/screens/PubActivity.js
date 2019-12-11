import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Row
} from "reactstrap";

class Collapses extends Component {
  constructor(props) {
    super(props);
    this.onEnteringAccordion = this.onEnteringAccordion.bind(this);
    this.onEnteredAccordion = this.onEnteredAccordion.bind(this);
    this.onExitingAccordion = this.onExitingAccordion.bind(this);
    this.onExitedAccordion = this.onExitedAccordion.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: false,
      accordion: [false, false, false],
      custom: [true, false],
      status: "Closed",
      fadeIn: true,
      timeout: 300
    };
  }

  onEnteringAccordion() {
    this.setState({ status: "Opening..." });
  }

  onEnteredAccordion() {
    this.setState({ status: "Opened" });
  }

  onExitingAccordion() {
    this.setState({ status: "Closing..." });
  }

  onExitedAccordion() {
    this.setState({ status: "Closed" });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleAccordion(tab) {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state
    });
  }

  toggleCustom(tab) {
    const prevState = this.state.custom;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      custom: state
    });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl="12">
            <Card className="card-accent-primary">
              <CardHeader className="text-center">
                <strong>Activities</strong>
              </CardHeader>

              <CardBody>
                <div id="accordion">
                  <Card className="mb-0">
                    <CardHeader id="headingOne">
                      <Button
                        block
                        color="link"
                        className="text-center m-0 p-0"
                        onClick={() => this.toggleAccordion(0)}
                        aria-expanded={this.state.accordion[0]}
                        aria-controls="collapseOne"
                      >
                        <h5 className="m-0 p-0">
                          <strong>Jungle Trekking</strong>
                        </h5>
                      </Button>
                    </CardHeader>
                    <Collapse
                      isOpen={this.state.accordion[0]}
                      data-parent="#accordion"
                      id="collapseOne"
                      aria-labelledby="headingOne"
                    >
                      <CardBody style={{ textAlign: "center" }}>
                        <img
                          className="card-img-top"
                          src="../assets/img/gallery/gjs12.jpg"
                          alt="cardcap"
                        ></img>
                        <p>
                          Get inside and experience the magnificent and
                          wonderful of jungle and learn about the flora and
                          fauna in Gombak and the interpretation walk along the
                          jungle. Also, have a Jungle Bath!
                        </p>
                        <p>
                          <strong>Interpretation Walk</strong>
                        </p>
                        <p>
                          Learn about the history of the jungle of Gombak and
                          listen to our stories about the diverse jungle
                          knowledge.
                        </p>
                        <p>
                          <strong>Flora and Fauna</strong>
                        </p>
                        <p>
                          You will learn about the plants and the animal in the
                          rainforest
                        </p>
                        <p>
                          <strong>Swimming in the Streams</strong>
                        </p>
                        <p>
                          Go swim in the streams after a long walk in jungle!
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingTwo">
                      <Button
                        block
                        color="link"
                        className="text-center m-0 p-0 "
                        onClick={() => this.toggleAccordion(1)}
                        aria-expanded={this.state.accordion[1]}
                        aria-controls="collapseTwo"
                      >
                        <h5 className="m-0 p-0">
                          <strong>Food Hunting in the Forest</strong>
                        </h5>
                      </Button>
                    </CardHeader>
                    <Collapse
                      isOpen={this.state.accordion[1]}
                      data-parent="#accordion"
                      id="collapseTwo"
                    >
                      <CardBody style={{ textAlign: "center" }}>
                        <img
                          className="card-img-top"
                          src="../assets/img/gallery/gjs15.jpg"
                          alt="cardcap"
                        ></img>
                        <p>
                          Learn how the Indigenous People hunt and cook their
                          food in the jungle!
                        </p>
                        <p>
                          <strong>Cooking inside the Jungle</strong>
                        </p>
                        <p>
                          Learn how they cook their food i.e chicken, rice or
                          fishes using bamboo. You will learn how to choose the
                          suitable bamboo for you to use specifically for
                          cooking!
                        </p>
                        <p>
                          <strong> Fishing using 'Bubu' </strong>
                        </p>
                        <p>
                          Bubu is a cage or a trap that they use to catch
                          fishes.
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingThree">
                      <Button
                        block
                        color="link"
                        className="text-center m-0 p-0"
                        onClick={() => this.toggleAccordion(2)}
                        aria-expanded={this.state.accordion[2]}
                        aria-controls="collapseThree"
                      >
                        <h5 className="m-0 p-0">
                          <strong>The Culture of the Indigenous People</strong>
                        </h5>
                      </Button>
                    </CardHeader>
                    <Collapse
                      isOpen={this.state.accordion[2]}
                      data-parent="#accordion"
                      id="collapseThree"
                    >
                      <CardBody style={{ textAlign: "center" }}>
                        <img
                          className="card-img-top"
                          src="../assets/img/gallery/weave.jpg"
                          alt="cardcap"
                        ></img>
                        <p>
                          Learn and experience the culture of music and art of
                          the Indigenous People i.e playing a Bamboo Guitar and
                          'Chentong', a kind of flute that they play with their
                          nose. Try to solve 'Kerchang', a traditional puzzle.
                        </p>
                        <p>
                          <strong> Kerchang </strong>
                        </p>
                        <p>
                          Kerchang is a traditional game or puzzle of the
                          Indigenous People. try to solvw the different levels
                          of Kerchang and challenge your mind! These sets of
                          Kerchang had been gazatted as the Malaysia National
                          Heritage back in November 2018.
                        </p>
                        <p>
                          <strong> Weaving with the elderly </strong>
                        </p>
                        <p>
                          Learn how the elderly weave and design their
                          accessories, baskets, and many things more! some of
                          the items that we recommend are --- Bujam, Tempok,
                          Cincin belah Rotan, the rooftop of the Orang Asli
                          traditional house or something as simple as a small
                          mat.
                        </p>
                        <p>
                          <strong>
                            Performances from the Indigenous People with their
                            traditional instruments
                          </strong>
                        </p>
                        <p>
                          Experience the astonishing performance from the
                          indigenous people and Sewang together with them!
                          Sewang is their traditonal dance
                        </p>
                        <p>
                          <strong>
                            Visit to the Museum of Indigenous People
                          </strong>
                        </p>
                        <p>
                          Learn about the history of the Orang Asli in
                          Peninsular Malaysia and their cultural lifestyle!
                        </p>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Collapses;
