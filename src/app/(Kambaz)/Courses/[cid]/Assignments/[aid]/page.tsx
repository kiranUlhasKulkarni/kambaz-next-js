import { Button, Col, Row, FormCheck, FormControl, FormLabel, FormSelect } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div className="p-4" id="wd-assignments-editor">
      <form>
        <div className="mb-3">
          <FormLabel>Assignment Name</FormLabel>
          <FormControl id="wd-name" defaultValue="A1 - ENV + HTML" />
        </div>

        <div className="mb-3">
          <FormLabel>Description</FormLabel>
          <FormControl
            as="textarea"
            rows={4}
            id="wd-description"
            defaultValue="The assignment is available online. Submit a link to the landing page of your web application running on Vercel."
          />
        </div>

        <Row className="align-items-center mb-3">
          <Col md={3} className="d-flex justify-content-end">
            <FormLabel>Points</FormLabel>
          </Col>
          <Col md={9}>
            <FormControl type="number" id="wd-points" defaultValue={100} />
          </Col>
        </Row>

        <Row className="align-items-center mb-3">
          <Col md={3} className="d-flex justify-content-end">
            <FormLabel>Assignment Group</FormLabel>
          </Col>
          <Col md={9}>
            <FormSelect id="wd-group" defaultValue="ASSIGNMENTS">
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
              <option>PROJECT</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="align-items-center mb-3">
          <Col md={3} className="d-flex justify-content-end">
            <FormLabel>Display Grade As</FormLabel>
          </Col>
          <Col md={9}>
            <FormSelect id="wd-display-grade-as" defaultValue="Percentage">
              <option>Percentage</option>
              <option>Marks</option>
              <option>Grades</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="align-items-start mb-3">
          <Col md={3} className="d-flex justify-content-end">
            <FormLabel>Submission Type</FormLabel>
          </Col>
          <Col md={9}>
            <div className="border rounded p-3">
              <FormSelect id="wd-submission-type" defaultValue="Online" className="mb-3">
                <option>Online</option>
                <option>OnSite</option>
              </FormSelect>

              <FormLabel>Online Entry Options</FormLabel>
              <FormCheck type="checkbox" id="wd-text-entry" label="Text Entry" />
              <FormCheck type="checkbox" id="wd-media-recordings" label="Media Recordings" />
              <FormCheck type="checkbox" id="wd-website-url" label="Website URL" />
              <FormCheck type="checkbox" id="wd-student-annotation" label="Student Annotation" />
              <FormCheck type="checkbox" id="wd-file-upload" label="File Uploads" />
            </div>
          </Col>
        </Row>

        <Row className="align-items-start mb-3">
          <Col md={3} className="d-flex justify-content-end">
            <FormLabel>Assign</FormLabel>
          </Col>
          <Col md={9}>
            <div className="border rounded p-3">
              <div className="mb-3">
                <FormLabel>Assign To</FormLabel>
                <FormControl type="text" id="wd-assign-to" defaultValue="Everyone" />
              </div>

              <div className="mb-3">
                <FormLabel>Due</FormLabel>
                <FormControl type="date" id="wd-due-date" defaultValue="2024-05-13" />
              </div>

              <Row>
                <Col md={6}>
                  <div className="mb-3">
                    <FormLabel>Available From</FormLabel>
                    <FormControl type="date" id="wd-available-from" defaultValue="2024-05-06" />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <FormLabel>Until</FormLabel>
                    <FormControl type="date" id="wd-available-until" defaultValue="2024-05-20" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>
      </form>
    </div>
  );
}
