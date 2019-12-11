import React, { Component } from "react";
import {
  // Badge,
  Card,
  CardBody,
  // CardFooter,
  CardHeader,
  Col,
  Row
  // Button
} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card className="card-accent-primary">
          <CardHeader className="text-center">
            <strong>Video Source Gallery</strong>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs="12" sm="6">
                <Card className="card-accent-primary">
                  {/* <img
                    className="card-img-top"
                    src="./assets/img/video/day 1.jpg"
                    alt="cardcap"
                  ></img> */}

                  <div class="embed-responsive embed-responsive-16by9">
                    {/* eslint-disable-next-line */}
                    <iframe
                      class="embed-responsive-item"
                      width="1261"
                      height="719"
                      src="https://www.youtube.com/embed/WWRaagW2n2o"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
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
                  {/* <img
                    className="card-img-top"
                    src="./assets/img/video/day2.jpg"
                    alt="cardcap"
                  ></img> */}
                  <div class="embed-responsive embed-responsive-16by9">
                    {/* eslint-disable-next-line */}
                    <iframe
                      class="embed-responsive-item"
                      width="1261"
                      height="719"
                      src="https://www.youtube.com/embed/H9IbrcEFB6k"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <CardBody>
                    On day 2 Raman teach another group of students to learn
                    basic survival skill. For parent who interest to let their
                    children to learn. You may check out at Google search
                    'Jungle School Gombak' for more information.
                    {/* <div className="py-3 text-center">
                      <Link to="https://youtu.be/H9IbrcEFB6k ">
                        <Button color="success">Open Video link</Button>
                      </Link>
                    </div> */}
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="6">
                <Card className="card-accent-primary">
                  {/* <img
                    className="card-img-top"
                    src="./assets/img/video/edible1.jpg"
                    alt="cardcap"
                  ></img> */}
                  <div class="embed-responsive embed-responsive-16by9">
                    {/* eslint-disable-next-line */}
                    <iframe
                      width="1261"
                      height="719"
                      src="https://www.youtube.com/embed/boBYxLJNCnM?list=PLCfHQ1fWrXuUmhCkI9Cu9x6B-Q641TeHl"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>

                  <CardBody>
                    To have knowledge in jungle foods is important for survivor.
                    Today Mr Raman going to teach how to find the plant and the
                    knowledge that he had learn from his tribe since young age.
                    We take about 20 minute to search for the plant and collect
                    to cooked it. I am apology for the poor audio sound at the
                    end part.
                    {/* <div className="py-3 text-center">
                      <Link to="https://youtu.be/boBYxLJNCnM?list=PLCfHQ1fWrXuUmhCkI9Cu9x6B-Q641TeHl ">
                        <Button color="success">Open Video link</Button>
                      </Link>
                    </div> */}
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12" sm="6">
                <Card className="card-accent-primary">
                  {/* <img
                    className="card-img-top"
                    src="./assets/img/video/edible2.png"
                    alt="cardcap"
                  ></img> */}
                  <div class="embed-responsive embed-responsive-16by9">
                    {/* eslint-disable-next-line */}
                    <iframe
                      width="1261"
                      height="719"
                      src="https://www.youtube.com/embed/yFMKE1exroU?list=PLCfHQ1fWrXuUmhCkI9Cu9x6B-Q641TeHl"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <CardBody>
                    The more jungle survival food we known the more higher
                    change to survive in the jungle.
                    {/* <div className="py-3 text-center">
                      <Link to="https://youtu.be/yFMKE1exroU?list=PLCfHQ1fWrXuUmhCkI9Cu9x6B-Q641TeHl">
                        <Button color="success">Open Video link</Button>
                      </Link>
                    </div> */}
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="6">
                <Card className="card-accent-primary">
                  <div class="embed-responsive embed-responsive-16by9">
                    {/* eslint-disable-next-line */}
                    <iframe
                      width="1261"
                      height="719"
                      src="https://www.youtube.com/embed/QxDq-LzLRAY?list=PLCfHQ1fWrXuUmhCkI9Cu9x6B-Q641TeHl"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  {/* <img
                    className="card-img-top"
                    src="./assets/img/video/edible3.jpg"
                    alt="cardcap"
                  ></img> */}
                  <CardBody>
                    This is another edible wild berry plant name Clidemia Hirta.
                    {/* <div className="py-3 text-center">
                      <Link to="https://youtu.be/QxDq-LzLRAY?list=PLCfHQ1fWrXuUmhCkI9Cu9x6B-Q641TeHl ">
                        <Button color="success">Open Video link</Button>
                      </Link>
                    </div> */}
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12" sm="6">
                <Card className="card-accent-primary">
                  <div class="embed-responsive embed-responsive-16by9">
                    {/* eslint-disable-next-line */}
                    <iframe
                      width="1261"
                      height="719"
                      src="https://www.youtube.com/embed/jD1-yTtoi6I?list=PLCfHQ1fWrXuUmhCkI9Cu9x6B-Q641TeHl"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  {/* <img
                    className="card-img-top"
                    src="./assets/img/video/-ramanlife.jpg"
                    alt="cardcap"
                  ></img> */}
                  <CardBody>
                    After many videos I had done for Encik Raman about 'Raman
                    Jungle Survival'. This video in to Introduce more about him
                    and what he did for his living. Personal this video is to
                    dedicate to my Master Encik Raman and his beloved Wife.
                    {/* <div className="py-3 text-center">
                      <Link to="https://youtu.be/jD1-yTtoi6I?list=PLCfHQ1fWrXuUmhCkI9Cu9x6B-Q641TeHl">
                        <Button color="success">Open Video link</Button>
                      </Link>
                    </div> */}
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="6">
                <Card className="card-accent-primary">
                  <div class="embed-responsive embed-responsive-16by9">
                    {/* eslint-disable-next-line */}
                    <iframe
                      width="1261"
                      height="719"
                      src="https://www.youtube.com/embed/BsjLa84sKwY?list=PLCfHQ1fWrXuUmhCkI9Cu9x6B-Q641TeHl"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  {/* <img
                    className="card-img-top"
                    src="./assets/img/video/-shelter.jpg"
                    alt="cardcap"
                  ></img> */}
                  <CardBody>
                    Raman Jungle Survival teaching a basic way to make shelter
                    from Palm leave. The native tribe use this palm leave call
                    'Bertam' to make temporary shelter or woven (Anyaman) to
                    become house roof.
                    {/* <div className="py-3 text-center">
                      <Link to="https://youtu.be/BsjLa84sKwY?list=PLCfHQ1fWrXuUmhCkI9Cu9x6B-Q641TeHl ">
                        <Button color="success">Open Video link</Button>
                      </Link>
                    </div> */}
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12" sm="6">
                <Card className="card-accent-primary">
                  <div class="embed-responsive embed-responsive-16by9">
                    {/* eslint-disable-next-line */}
                    <iframe
                      width="1261"
                      height="719"
                      src="https://www.youtube.com/embed/U4ie6dK4npQ?list=PLCfHQ1fWrXuUmhCkI9Cu9x6B-Q641TeHl"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  {/* <img
                    className="card-img-top"
                    src="./assets/img/video/-giant.jpg"
                    alt="cardcap"
                  ></img> */}
                  <CardBody>
                    For the Orang Asli in Peninsular Malaysia.There are a
                    variety of arts and crafts belonging to the indigenous
                    people in which relates to their natural surrounding. The
                    environmental elements have always been a part of their main
                    source of inspiration for all their arts and crafts. In this
                    paper, the Kerchang (the orang asli puzzle) has been
                    selected as the case study. The symbiosis of the making of
                    the Kerchang, reflects the true relation with nature, and
                    it's unique cultural significance to the Orang Asli.
                    {/* <div className="py-3 text-center">
                      <Link to="https://youtu.be/U4ie6dK4npQ?list=PLCfHQ1fWrXuUmhCkI9Cu9x6B-Q641TeHl">
                        <Button color="success">Open Video link</Button>
                      </Link>
                    </div> */}
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xs="12" sm="6">
                <Card className="card-accent-primary">
                  <div class="embed-responsive embed-responsive-16by9">
                    {/* eslint-disable-next-line */}
                    <iframe
                      width="1261"
                      height="719"
                      src="https://www.youtube.com/embed/6CyWfoe2Nys?list=PLCfHQ1fWrXuUmhCkI9Cu9x6B-Q641TeHl"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  {/* <img
                    className="card-img-top"
                    src="./assets/img/video/edible4.jpg"
                    alt="cardcap"
                  ></img> */}
                  <CardBody>
                    <p>
                      Mikania micrantha Kunth (Asteraceae) is a perennial
                      creeping vine. It originates from Central and South
                      America. This weed plant gets its nickname "Mile-a-Minute"
                      because of its fast growth. It colonise tropical forest
                      and agricultural land. The plant climb trees and shrubs,
                      and When left unattended, trees can be quickly covered
                      from the sunlight.
                    </p>
                    <p>
                      The plant climbs by twining spirally around a support,
                      which in the field is most often the main stem or a branch
                      of a tree plant. The climber plant scales along the entire
                      height of a the plant supporting it until the climbing
                      plant reaches the top of the support plant. The climbing
                      plant then grows profusely, producing leaves and flowers,
                      thereby "suffocating" the support plant. The plant also
                      climbs onto non-living support, whether it is a pole, dead
                      trees or stumps. In Malay language, stump is equivalent to
                      "tunggul". Hence, the plant is locally known as "selaput
                      tunggul", which means "stump covering".
                    </p>
                    {/* <div className="py-3 text-center">
                      <Link to="https://youtu.be/6CyWfoe2Nys?list=PLCfHQ1fWrXuUmhCkI9Cu9x6B-Q641TeHl">
                        <Button color="success">Open Video link</Button>
                      </Link>
                    </div> */}
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
