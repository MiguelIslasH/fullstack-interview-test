import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import CreatePRForm from "./create_PR_form";

interface CreatePRProps {
  show: boolean;
  onHide: () => void;
}

function CreatePR(props: CreatePRProps) {
  return (
    <Modal show={props.show} onHide={props.onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          <h3>Create a pull request</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreatePRForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Create</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreatePR;
