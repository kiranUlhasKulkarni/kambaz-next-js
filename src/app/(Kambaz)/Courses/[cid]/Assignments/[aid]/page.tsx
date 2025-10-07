"use client";

import { useState, use } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";

interface AssignmentEditorProps {
  params: Promise<{ cid: string; aid: string }>;
}

export default function AssignmentEditor({ params }: AssignmentEditorProps) {
  const { cid, aid } = use(params); 
  const router = useRouter();

  const [assignmentName, setAssignmentName] = useState("A1 - ENV + HTML");
  const [description, setDescription] = useState(
    "The assignment is available online. Submit a link to the landing page of your web application running on vercel."
  );
  const [points, setPoints] = useState(100);
  const [group, setGroup] = useState("ASSIGNMENTS");
  const [displayGrade, setDisplayGrade] = useState("Percentage");
  const [submissionType, setSubmissionType] = useState("Online");
  const [onlineOptions, setOnlineOptions] = useState({
    textEntry: true,
    websiteURL: true,
    mediaRecordings: false,
    studentAnnotation: false,
    fileUploads: false,
  });
  const [assignTo, setAssignTo] = useState("Everyone");
  const [dueDate, setDueDate] = useState("2024-05-13");
  const [availableFrom, setAvailableFrom] = useState("2024-05-06");
  const [availableUntil, setAvailableUntil] = useState("2024-05-20");

  const toggleOnlineOption = (key: keyof typeof onlineOptions) => {
    setOnlineOptions({ ...onlineOptions, [key]: !onlineOptions[key] });
  };

  return (
    <div className="p-4">
      <Form>
        <Form.Group className="mb-3" controlId="wd-assignment-name">
          <Form.Label style={{ fontSize: "1rem", fontWeight: "bold"  }}>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            value={assignmentName}
            onChange={(e) => setAssignmentName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="wd-assignment-description">
          <Form.Label style={{ fontSize: "1rem", fontWeight: "bold"  }}>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Row className="align-items-center mb-3">
          <Col md={3} className="d-flex justify-content-end">
  <Form.Label style={{ fontSize: "1rem" , fontWeight: "bold" }}>Points</Form.Label>
</Col>

          <Col md={9}>
            <Form.Control
              type="number"
              value={points}
              onChange={(e) => setPoints(Number(e.target.value))}
            />
          </Col>
        </Row>

        <Row className="align-items-center mb-3">
          <Col md={3} className="d-flex justify-content-end">
            <Form.Label style={{ fontSize: "1rem", fontWeight: "bold"  }}>Assignment Group</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select
              value={group}
              onChange={(e) => setGroup(e.target.value)}
            >
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
              <option>PROJECT</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="align-items-center mb-3">
          <Col md={3} className="d-flex justify-content-end">
            <Form.Label style={{ fontSize: "1rem", fontWeight: "bold"  }}>Display Grade as</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select
              value={displayGrade}
              onChange={(e) => setDisplayGrade(e.target.value)}
            >
              <option>Percentage</option>
              <option>Marks</option>
              <option>Grades</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="align-items-start mb-3">
          <Col md={3} className="d-flex justify-content-end">
            <Form.Label style={{ fontSize: "1rem", fontWeight: "bold"  }}>Submission Type</Form.Label>
          </Col>
          <Col md={9}>
            <Card className="mb-3">
              <Card.Body>
                <Form.Select
                  value={submissionType}
                  onChange={(e) => setSubmissionType(e.target.value)}
                  className="mb-3"
                >
                  <option>Online</option>
                  <option>OnSite</option>
                </Form.Select>

                <Form.Label style={{ fontSize: "1.085rem", fontWeight: "bold"  }} >Online Entry Options</Form.Label>
                <Row>
                  <Col md={12}>
                    <Form.Check
                      type="checkbox"
                      id="wd-text-entry"
                      label="Text Entry"
                      checked={onlineOptions.textEntry}
                      onChange={() => toggleOnlineOption("textEntry")}
                       style={{ fontSize: "0.95rem" }}
                    />
                    </Col>
                    <Col md={12}>
                    <Form.Check
                      type="checkbox"
                      id="wd-media-recordings"
                      label="Media Recordings"
                      checked={onlineOptions.mediaRecordings}
                      onChange={() => toggleOnlineOption("mediaRecordings")}
                       style={{ fontSize: "0.95rem" }}
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Check
                      type="checkbox"
                      id="wd-website-url"
                      label="Website URL"
                      checked={onlineOptions.websiteURL}
                      onChange={() => toggleOnlineOption("websiteURL")}
                       style={{ fontSize: "0.95rem" }}
                    />
                    <Form.Check
                      type="checkbox"
                      id="wd-student-annotation"
                      label="Student Annotation"
                      checked={onlineOptions.studentAnnotation}
                      onChange={() => toggleOnlineOption("studentAnnotation")}
                       style={{ fontSize: "0.95rem" }}
                    />
                    <Form.Check
                      type="checkbox"
                      id="wd-file-upload"
                      label="File Uploads"
                      checked={onlineOptions.fileUploads}
                      onChange={() => toggleOnlineOption("fileUploads")}
                       style={{ fontSize: "0.95rem" }}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
<Row className="align-items-start mb-3">
          <Col md={3} className="d-flex justify-content-end">
            <Form.Label style={{ fontSize: "1rem", fontWeight: "bold"  }}>Assign</Form.Label>
          </Col>
          
          <Col md={9}>
        <Card className="mb-3">
          <Card.Body>
            <Form.Group controlId="wd-assign-to" className="mb-3">
              <Form.Label style={{ fontSize: "1rem", fontWeight: "bold"  }}>Assign to</Form.Label>
              <Form.Control
                type="text"
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
              />
            </Form.Group>

            <Row>
              <Col md={12}>
                <Form.Group controlId="wd-due-date">
                  <Form.Label style={{ fontSize: "1rem", fontWeight: "bold"  }}>Due</Form.Label>
                  <Form.Control
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </Form.Group>
              </Col>
              </Row>
              <Row>
              <Col md={6}>
                <Form.Group controlId="wd-available-from">
                  <Form.Label style={{ fontSize: "1rem", fontWeight: "bold"  }}>Available from</Form.Label>
                  <Form.Control
                    type="date"
                    value={availableFrom}
                    onChange={(e) => setAvailableFrom(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="wd-available-until">
                  <Form.Label style={{ fontSize: "1rem", fontWeight: "bold"  }}>Until</Form.Label>
                  <Form.Control
                    type="date"
                    value={availableUntil}
                    onChange={(e) => setAvailableUntil(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </Col>
        </Row>

        <div className="d-flex justify-content-end">
          <Button
            variant="secondary"
            className="me-2"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}
