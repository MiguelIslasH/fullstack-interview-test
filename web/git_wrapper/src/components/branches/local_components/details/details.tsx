import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./details.css";

interface DetailsProps {
  commitId: string;
  commitMessage: string;
}

function Details(props: DetailsProps) {
  return (
    <div className="details__container">
      <Row>
        <Col className="col-sm-5">
          <b>Commit Id:</b>
        </Col>
        <Col className="col-sm-7">{props.commitId}</Col>
      </Row>
      <Row>
        <Col className="col-sm-5">
          <b>Commit message:</b>
        </Col>
        <Col className="col-sm-7">{props.commitMessage}</Col>
      </Row>
    </div>
  );
}

export default Details;
