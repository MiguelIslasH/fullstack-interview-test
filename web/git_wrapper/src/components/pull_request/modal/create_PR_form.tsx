import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CreatePRForm() {
  return (
    <Form>
      <Row>
        <Col className="col-sm-5">
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the title of this PR"
            />
          </Form.Group>
        </Col>
        <Col className="col-sm-7">
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your description of this PR"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="selectBranch1">
              Select your first branch:
            </Form.Label>
            <Form.Select id="selectBranch1">
              <option>Master</option>
              <option>Second</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default CreatePRForm;
