import "./divider.css";

interface DividerProps {
  text: string;
  variant: "yellow" | "purple";
}

function Divider(props: DividerProps) {
  return (
    <div className={"divider divider--" + props.variant}>
      <h2>{props.text}</h2>
    </div>
  );
}

export default Divider;
