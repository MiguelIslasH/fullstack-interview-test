import { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { updatePR } from "../../utils/functions";

interface PRFooterProps {
  base: string;
  compare: string;
  id: string;
}

function PRFooter(props: PRFooterProps) {
  const [action, setAction] = useState("");

  const handleUpdateStatus = () => {
    updatePR(action, props.id).then((response) => {
      console.log(response);
      alert(response);
    });
  };

  return (
    <Row>
      <Col className="col-sm-5">
        <b>{props.compare + " -> " + props.base}</b>
      </Col>
      <Col className="col-sm-4">
        <Form.Group className="mb-3">
          <Form.Select
            id="selectStatus"
            onChange={(e) => setAction(e.target.value)}
          >
            <option value={"Closed"}>Close</option>
            <option value={"Merged"}>Merge</option>
          </Form.Select>
        </Form.Group>
      </Col>
      <Col className="col-sm-2">
        <Button onClick={(e) => handleUpdateStatus()} variant="primary">
          Save
        </Button>
      </Col>
    </Row>
  );
}

export default PRFooter;
