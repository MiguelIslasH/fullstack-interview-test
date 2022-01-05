import { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getAllBranches } from "../../branches/utils/functions";

function CreatePRForm() {
  const [branches, setBranches] = useState([]);
  useEffect(() => {
    getAllBranches().then((branchesData) => {
      setBranches(branchesData.all);
    });
  }, []);

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
              Select your base branch:
            </Form.Label>
            <Form.Select id="selectBranch1">
              {branches &&
                branches.map((branch) => {
                  return <option>{branch}</option>;
                })}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="selectBranch1">
              Select your compare branch:
            </Form.Label>
            <Form.Select id="selectBranch1">
              {branches &&
                branches.map((branch) => {
                  return <option>{branch}</option>;
                })}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="selectBranch1">
              What do yo want to do?:
            </Form.Label>
            <Form.Select id="selectBranch1">
              <option>Create (Open)</option>
              <option>Merge</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default CreatePRForm;
