import "./button.css";

interface ButtonProps {
  text: string;
}

function Button(props: ButtonProps) {
  return (
    <button className={"button button--green"}>
      <h4>{props.text}</h4>
    </button>
  );
}

export default Button;
