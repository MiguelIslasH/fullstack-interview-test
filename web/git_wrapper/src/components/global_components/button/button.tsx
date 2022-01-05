import { useState } from "react";

import Commits from "../../commits/commits";

import "./button.css";

interface ButtonProps {
  text: string;
  variant: "green" | "yellow" | "orange";
  modalName: string;
}

function Button(props: ButtonProps) {
  const [showCommitsModal, setShowCommitsModal] = useState<boolean>(false);

  const handleShowModal = () => {
    if (props.modalName === "commits") {
      setShowCommitsModal(true);
    } else if (props.modalName === "pullrequest") {
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
        branch="master"
        onHide={() => setShowCommitsModal(false)}
      />
    </>
  );
}

export default Button;
