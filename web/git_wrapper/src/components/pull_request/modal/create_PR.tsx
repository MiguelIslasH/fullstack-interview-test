import { useRef, useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import CreatePRForm from "./create_PR_form";
import { addPR } from "../utils/functions";

interface CreatePRProps {
  show: boolean;
  onHide: () => void;
}

function CreatePR(props: CreatePRProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const [baseBranch, setBaseBranch] = useState("");
  const [compareBranch, setCompareBranch] = useState("");
  const [action, setAction] = useState("");

  const handleCreatePR = () => {
    addPR(
      titleRef.current!.value,
      descriptionRef.current!.value,
      baseBranch,
      compareBranch,
      action
    ).then((response) => {
      console.log(response);
      alert(response);
    });
  };

  return (
    <Modal show={props.show} onHide={props.onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          <h3>Create a pull request</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreatePRForm
          title={titleRef}
          description={descriptionRef}
          setBase={setBaseBranch}
          setCompare={setCompareBranch}
          setAction={setAction}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={(e) => props.onHide()}>
          Close
        </Button>
        <Button variant="primary" onClick={(e) => handleCreatePR()}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreatePR;
