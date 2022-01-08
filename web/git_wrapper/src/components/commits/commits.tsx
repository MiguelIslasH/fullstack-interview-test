import { useEffect, useState } from "react";

import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import CommitItem from "./local_components/commit_item/commit_item";

import { getAllCommits } from "./utils/functions";

import "./commits.css";

interface Commit {
  commitId: string;
  message: string;
  timestamp: string;
  authorName: string;
  authorEmail: string;
}

interface CommitsProps {
  show: boolean;
  branch: string;
  onHide: () => void;
}

function Commits(props: CommitsProps) {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    getAllCommits(props.branch).then((commits) => {
      setCommits(commits);
    });
  }, []);

  return (
    <Modal
      show={props.show}
      size="xl"
      onHide={props.onHide}
      dialogClassName="commitsModal"
    >
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
            {commits &&
              commits.map((commit, index) => {
                return (
                  <CommitItem
                    key={index}
                    commitId={("" + commit["commitId"]).substring(0, 8)}
                    message={commit["message"]}
                    timestamp={commit["timestamp"]}
                    authorName={commit["authorName"]}
                    authorEmail={commit["authorEmail"]}
                  />
                );
              })}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Commits;
