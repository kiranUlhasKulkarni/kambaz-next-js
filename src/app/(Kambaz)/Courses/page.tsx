import Link from "next/link";
import Image from "next/image";
import { CardBody, Row, Col, Card, CardImg, CardTitle, CardText, Button } from "react-bootstrap";
export default function Courses() {
  return (
    <div id="wd-dashboard" style={{ marginLeft: 130, marginRight: 20 }}>
      <h1 id="wd-dashboard-title">Courses</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link href="/Courses/1234" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/reactjs.jpg" alt="React JS" width="100%" height={160} />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Full Stack software developer
              </CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link href="/Courses/2345" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/nodejs.jpg" alt="NodeJS JS" width="100%" height={160} />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2345 Node JS</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Full Stack software developer
              </CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link href="/Courses/3456" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/html.jpg" alt="HTML" width="100%" height={160} />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3456 HTML</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Full Stack software developer
              </CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link href="/Courses/4567" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/CSS.jpg" alt="CSS" width="100%" height={160} />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4567 CSS</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Full Stack software developer
              </CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link href="/Courses/5678" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/js.jpg" alt="JavaScript" width="100%" height={160} />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5678 JavaScript</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Full Stack software developer
              </CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link href="/Courses/6789" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/next.jpg" alt="NextJS" width="100%" height={160} />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS6789 NextJS</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Full Stack software developer
              </CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link href="/Courses/7890" className="wd-dashboard-course-link text-decoration-none text-dark">
            <CardImg variant="top" src="/images/mongo.jpg" alt="MongoDB" width="100%" height={160} />
            <CardBody>
              <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS7890 MongoDB</CardTitle>
              <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Full Stack software developer
              </CardText>
              <Button variant="primary">Go</Button>
            </CardBody>
          </Link>
          </Card>
        </Col>
        </Row>
      </div>
    </div>
    
);}

