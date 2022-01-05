import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

import CommitItem from "./local_components/commit_item/commit_item";

interface CommitsProps {
  show: boolean;
  branch: string;
  onHide: () => void;
}

function Commits(props: CommitsProps) {
  return (
    <Modal show={props.show} size="xl" onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h3>Commits of {props.branch}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover size="sm" variant="dark">
          <thead>
            <tr>
              <th>Commit Id</th>
              <th>Message</th>
              <th>Timestamp</th>
              <th>Author name</th>
              <th>Author email</th>
            </tr>
          </thead>
          <tbody>
            <CommitItem
              commitId="jdija32"
              message="Added Commit modal view"
              timestamp="19:20:32 2020/02/05"
              authorName="Miguel Islas"
              authorEmail="maih201628@gmail.com"
            />
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
}

export default Commits;
