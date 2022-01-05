import { useState } from "react";

import Commits from "../../commits/commits";
import CreatePR from "../../pull_request/modal/create_PR";

import "./button.css";

interface ButtonProps {
  text: string;
  variant: "green" | "yellow" | "orange";
  modalName: string;
  branchName?: string;
}

function Button(props: ButtonProps) {
  const [showCommitsModal, setShowCommitsModal] = useState<boolean>(false);
  const [showPRModal, setShowPRModal] = useState<boolean>(false);
  const handleShowModal = () => {
    if (props.modalName === "commits") {
      setShowCommitsModal(true);
    } else if (props.modalName === "pullrequest") {
      setShowPRModal(true);
    }
  };

  return (
    <>
      <button
        className={"button button--" + props.variant}
        onClick={(e) => handleShowModal()}
      >
        <h4>{props.text}</h4>
      </button>
      <Commits
        show={showCommitsModal}
        branch={props.branchName!}
        onHide={() => setShowCommitsModal(false)}
      />

      <CreatePR show={showPRModal} onHide={() => setShowPRModal(false)} />
    </>
  );
}

export default Button;
