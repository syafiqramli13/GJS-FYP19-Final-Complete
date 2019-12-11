import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

const photos = [
  {
    src: "../assets/img/gallery/gjs1.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
    width: 5,
    height: 3
  },
  {
    src: "../assets/img/gallery/gjs2.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
    width: 5,
    height: 3
  },
  {
    src: "../assets/img/gallery/gjs3.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
    width: 4,
    height: 3
  },
  {
    src: "../assets/img/gallery/gjs4.jpg",
    altText: "Slide 4",
    caption: "Slide 4",
    width: 5,
    height: 3
  },
  {
    src: "../assets/img/gallery/gjs5.jpg",
    altText: "Slide 5",
    caption: "Slide 5",
    width: 4,
    height: 3
  },
  {
    src: "../assets/img/gallery/gjs6.jpg",
    altText: "Slide 6",
    caption: "Slide 6",
    width: 4,
    height: 3
  },
  {
    src: "../assets/img/gallery/gjs7.jpg",
    altText: "Slide 7",
    caption: "Slide 7",
    width: 5,
    height: 3
  },
  {
    src: "../assets/img/gallery/gjs8.jpg",
    altText: "Slide 8",
    caption: "Slide 8",
    width: 4,
    height: 3
  },
  {
    src: "../assets/img/gallery/gjs9.jpg",
    altText: "Slide 9",
    caption: "Slide 9",
    width: 5,
    height: 3
  },
  {
    src: "../assets/img/gallery/gjs10.jpg",
    altText: "Slide 10",
    caption: "Slide 10",
    width: 4,
    height: 3
  },
  {
    src: "../assets/img/gallery/gjs11.jpg",
    altText: "Slide 11",
    caption: "Slide 11",
    width: 5,
    height: 3
  },
  {
    src: "../assets/img/gallery/gjs12.jpg",
    altText: "Slide 12",
    caption: "Slide 12",
    width: 4,
    height: 3
  },
  {
    src: "../assets/img/gallery/gjs13.jpg",
    altText: "Slide 13",
    caption: "Slide 13",
    width: 5,
    height: 3
  },
  {
    src: "../assets/img/gallery/gjs14.jpg",
    altText: "Slide 14",
    caption: "Slide 14",
    width: 4,
    height: 3
  },
  {
    src: "../assets/img/gallery/gjs15.jpg",
    altText: "Slide 15",
    caption: "Slide 15",
    width: 4,
    height: 3
  }
];

function PhotoViewer() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card className="card-accent-primary">
            <CardHeader className="text-center">
              <strong>Photo Gallery</strong>
            </CardHeader>
            <CardBody>
              <Gallery photos={photos} onClick={openLightbox} />
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={photos.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default PhotoViewer;
