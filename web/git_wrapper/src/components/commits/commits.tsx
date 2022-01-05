import { useEffect, useState } from "react";

import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

import CommitItem from "./local_components/commit_item/commit_item";

import { getAllCommits } from "./utils/functions";

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
            {commits &&
              commits.map((commit) => {
                return (
                  <CommitItem
                    commitId="jdija32"
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
    </Modal>
  );
}

export default Commits;
