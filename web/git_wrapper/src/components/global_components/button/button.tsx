import { useState } from "react";

import Commits from "../../commits/commits";

import "./button.css";

interface ButtonProps {
  text: string;
  variant: "green" | "yellow";
}

function Button(props: ButtonProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <button
        className={"button button--" + props.variant}
        onClick={(e) => setShowModal(true)}
      >
        <h4>{props.text}</h4>
      </button>
      <Commits
        show={showModal}
        branch="master"
        onHide={() => setShowModal(false)}
      />
    </>
  );
}

export default Button;
