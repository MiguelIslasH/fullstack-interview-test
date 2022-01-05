import "./divider.css";

interface DividerProps {
  text: string;
}

function Divider(props: DividerProps) {
  return (
    <div className="divider divider--yellow">
      <h2>{props.text}</h2>
    </div>
  );
}

export default Divider;
