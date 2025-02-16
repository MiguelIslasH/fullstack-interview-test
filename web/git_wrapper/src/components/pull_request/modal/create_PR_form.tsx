import { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getAllBranches } from "../../branches/utils/functions";

interface CreatePRFormProps {
  title: any;
  description: any;
  setBase: (base: string) => void;
  setCompare: (compare: string) => void;
  setAction: (action: string) => void;
}

function CreatePRForm(props: CreatePRFormProps) {
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
              ref={props.title}
              placeholder="Enter the title of this PR"
            />
          </Form.Group>
        </Col>
        <Col className="col-sm-7">
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description: </Form.Label>
            <Form.Control
              type="text"
              ref={props.description}
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
            <Form.Select
              id="selectBranch1"
              onChange={(e) => props.setBase(e.target.value)}
            >
              {branches &&
                branches.map((branch, index) => {
                  return (
                    <option value={branch} key={"select1" + index}>
                      {branch}
                    </option>
                  );
                })}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="selectBranch2">
              Select your compare branch:
            </Form.Label>
            <Form.Select
              id="selectBranch2"
              onChange={(e) => props.setCompare(e.target.value)}
            >
              <option disabled defaultChecked>
                - Select -{" "}
              </option>
              {branches &&
                branches.map((branch, index) => {
                  return (
                    <option value={branch} key={"select2" + index}>
                      {branch}
                    </option>
                  );
                })}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="selectBranch1">
              What do yo want to do?:
            </Form.Label>
            <Form.Select
              id="selectBranch1"
              onChange={(e) => props.setAction(e.target.value)}
            >
              <option value={"Open"}>Create (Open)</option>
              <option value="Merged">Merge</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default CreatePRForm;
