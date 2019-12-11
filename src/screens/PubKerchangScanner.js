import React, { Component } from "react";
import QrReader from "react-qr-reader";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Modal,
  ModalBody,
  // ModalFooter,
  ModalHeader
} from "reactstrap";

export default class KerchangScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      scannedresult: "No result",
      name: "",
      origin: "",
      ethnic: "",
      image: ""
    };
    // this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal = () => {
    this.setState({
      success: !this.state.success
    });
  };

  handleScan = data => {
    if (data) {
      this.setState(
        {
          scannedresult: data
        },
        () => {
          if (this.state.scannedresult === "Bin Sulung") {
            // alert(data);
            this.setState({
              name: data,
              origin: "Sabah",
              ethnic: "Sabah",
              image: "./assets/img/kerchang/Bin Sulung.jpg"
            });
          } else if (this.state.scannedresult === "Tali Jodoh") {
            // alert(data);
            this.setState({
              name: data,
              origin: "Selangor, Johor, Negeri Sembilan",
              ethnic: "Jakun, Temuan, Mahmeri",
              image: "./assets/img/kerchang/Tali Jodoh.jpg"
            });
          } else if (this.state.scannedresult === "Tekak Buaya") {
            // alert(data);
            this.setState({
              name: data,
              origin: "Selangor",
              ethnic: "Temuan",
              image: "./assets/img/kerchang/Tekak Buaya.jpg"
            });
          } else if (this.state.scannedresult === "Tipah Tertipu") {
            // alert(data);
            this.setState({
              name: data,
              origin: "Johor",
              ethnic: "Jakun",
              image: "./assets/img/kerchang/Tipah Tertipu.jpg"
            });
          } else if (this.state.scannedresult === "Komak") {
            // alert(data);
            this.setState({
              name: data,
              origin: "Selangor",
              ethnic: "Jakun, Temuan, Mahmeri, Temiar",
              image: "./assets/img/kerchang/Komak.jpg"
            });
          } else if (this.state.scannedresult === "Lidah Buaya") {
            // alert(data);
            this.setState({
              name: data,
              origin: "Selangor",
              ethnic: "Temuan",
              image: "./assets/img/kerchang/Lidah Buaya.jpg"
            });
          } else if (this.state.scannedresult === "Jak Renut") {
            // alert(data);
            this.setState({
              name: data,
              origin: "Perak, Pahang",
              ethnic: "Semai",
              image: "./assets/img/kerchang/Jak Renut.jpg"
            });
          } else {
            alert("Invalid QR Code. Please scan again");
            this.setState({
              scannedresult: "Invalid",
              name: "Please scan again",
              origin: " Please scan again",
              ethnic: " Please scan again"
            });
          }
        }
      );
      // ;
    }
  };
  handleError = err => {
    console.error(err);
  };
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl>
            <Card className="card-accent-primary">
              <CardHeader className="text-center">
                <strong>Kerchang's Scanner</strong>
              </CardHeader>
              <CardBody>
                <p className="text-center">
                  Place and scan the QR Code to get Kerchang's informations
                </p>

                {/* qr scanner container */}
                <div>
                  <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: "100%" }}
                  />

                  {/* modal will open after click button */}
                  <p className="text-center py-5">
                    <p>Result:</p>
                    <Button color="success" onClick={this.toggleModal}>
                      <strong>Kerchang : {this.state.scannedresult}</strong>
                    </Button>
                    <Modal
                      isOpen={this.state.success}
                      toggle={this.toggleModal}
                      className={
                        "modal-dialog-centered modal-sm modal-success " +
                        this.props.className
                      }
                    >
                      <ModalHeader toggle={this.toggleModal}>
                        Kerchang Informations
                      </ModalHeader>
                      <ModalBody>
                        {/* eslint-disable-next-line */}
                        <img
                          className="card-img-top py-3"
                          src={this.state.image}
                        />
                        <p>
                          Kerchang's Name : <strong> {this.state.name}</strong>
                        </p>
                        <p>
                          Origin : <strong>{this.state.origin}</strong>
                        </p>
                        <p>
                          Ethnicity : <strong>{this.state.ethnic}</strong>
                        </p>
                      </ModalBody>
                      {/* <ModalFooter>
                        <Button
                          className="btn-block text-center m-auto p-auto"
                          color="success"
                          onClick={this.toggleModal}
                        >
                          Learn More
                        </Button>
                      </ModalFooter> */}
                    </Modal>
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
