import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Table,
  Badge,
  Card,
  Tab,
  Nav,
} from "react-bootstrap";
import wave from "../assets/wave.gif";
import pro from "../assets/pro.png";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFile, faLink, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const style = {
  marginBottom: "6rem",
  backgroundImage: "url(" + wave + ")",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
};
const classes = {
  "Elements of Software Design": true,
  "Database Design and Implementation": true,
  "Web Application Development": true,
  "Data Science for Business Applications": true,
  "Elements of Software Engineering I": true,
  "Elements of Software Engineering II": true,
  "Advanced Analytics Programming": true,
  "Technical Dimensions of Cybersecurity": true,
};

const proj = {
  "Longhorn Banking": {
    Description:
      "A web application that allows users to create an account, login, and perform basic banking functions such as deposit, withdraw, and transfer money.",
    Tools:
      "The application was developed using ASP.NET Core MVC, Entity Framework Core, and SQL Server. The application was deployed to Azure using Azure App Service.",
    Link: "https://longhornbanktrust.azurewebsites.net",
    Repo: "https://github.com/wresendiz1/LonghornBankWebApp",
  },
  JobsNMore: {
    Description:
      "A job search and career advancement website. It simplifies job hunting by aggregating the latest job listings from multiple sources and provides valuable insights into the skills required for each job. In addition, JobsNMore also recommends relevant online courses to help job seekers acquire necessary skills and stand out from the competition.",
    Tools:
      "The application was developed using React, Node.js, Flask, and PostgresSQL. The application was deployed to GCP (Google Cloud Platform) using App Engine Flex.",
    Link: "https://jobsnmore.me",
    Repo: "https://gitlab.com/javier.ramirez5/cs331e-idb",
  },
  "Heart Disease Data Analysis": {
    Description:
      "Analyzed a kaggle dataset with over 4000 records to identify the most significant predictors for heart disease.",
    Tools:
      "Leveraged statistical methods and data science libraries such as pandas, matplotlib, and scikit-learn to perform exploratory data analysis and build a predictive model.",
    Link: false,
    Repo: false,
  },
};

function Home() {
  return (
    <>
      <Container fluid style={style}>
        <Container>
          <Row className="align-items-center">
            <Col>
              <h3 className="text-primary mb-3 fw-bold">Hello! I&apos;m </h3>
              <h1 className="display-3 mb-3 fw-light">Willy Resendiz</h1>
            </Col>
            <Col>
              <Image src={pro} className="rounded-circle img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid>
        <Container>
          <Row>
            <Col>
              <h1 className="text-primary mb-3 fw-bold py-3">About Me</h1>
              <p className="lead alert alert-info">
                I am a third-year student at the University of Texas at Austin,
                majoring in Management Information Systems and pursuing a
                certificate in Computer Science. I am interested in the
                intersection of technology and business strategy. Please feel
                free to contact me at{" "}
                <a href="mailto:wresendiz@utexas.edu"> wresendiz@utexas.edu</a>
              </p>
              <Button
                variant="primary"
                href="https://www.linkedin.com/in/willy-resendiz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Button>
              <Button
                variant="primary"
                href="ResendizTorresWilly_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ms-2"
              >
                <FontAwesomeIcon icon={faFile} className="me-1" /> Resume
              </Button>
            </Col>
            <Col>
              <h1 className="text-primary mb-3 fw-bold py-3">
                Relevant Coursework
              </h1>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(classes).map((course, index) => (
                    <tr key={index}>
                      <td>{course}</td>
                      {classes[course] ? (
                        <td>
                          <Badge pill bg="success">
                            Completed
                          </Badge>
                        </td>
                      ) : (
                        <td>
                          <Badge pill bg="danger">
                            In-progress
                          </Badge>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
        <Container className="py-3">
          <Card>
            <Card.Header className="text-primary fw-bold fs-1 text-center">
              Projects
            </Card.Header>
            <Card.Body>
              <Tab.Container id="tabs" defaultActiveKey="Longhorn Banking">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      {Object.keys(proj).map((project, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={project}>{project}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      {Object.keys(proj).map((project, index) => (
                        <Tab.Pane eventKey={project} key={index}>
                          <h3 className="text-center fw-bold py-3">
                            {project}
                          </h3>
                          <p className="text-center">
                            {proj[project].Description}
                          </p>
                          <p className="text-center">{proj[project].Tools}</p>
                          <div className="d-flex justify-content-center align-items-center">
                            {proj[project].Link ? (
                              <Button
                                href={proj[project].Link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="me-2"
                              >
                                <FontAwesomeIcon
                                  icon={faLink}
                                  className="me-1"
                                />
                                Link
                              </Button>
                            ) : (
                              <></>
                            )}
                            {proj[project].Repo ? (
                              <Button
                                href={proj[project].Repo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FontAwesomeIcon
                                  icon={faBriefcase}
                                  className="me-1"
                                />
                                Repo
                              </Button>
                            ) : (
                              <></>
                            )}
                          </div>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    </>
  );
}

export default Home;
