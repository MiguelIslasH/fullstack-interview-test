import "./body.css";
import PRFooter from "../footer/PR_footer";

interface BodyPRProps {
  description: string;
  base: string;
  compare: string;
  id: string;
}

function BodyPR(props: BodyPRProps) {
  return (
    <div className="body__container">
      {props.description}
      <hr />
      <PRFooter base={props.base} compare={props.compare} id={props.id} />
    </div>
  );
}

export default BodyPR;
