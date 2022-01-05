import Details from "../details/details";
import Footer from "../footer/footer";

import "./body.css";

interface BodyProps {
  commitId: string;
  commitMessage: string;
  title: string;
}

function Body(props: BodyProps) {
  return (
    <div className="body__container">
      <h4 className="body__title">Last commit:</h4>
      <Details commitId={props.commitId} commitMessage={props.commitMessage} />
      <Footer title={props.title} />
    </div>
  );
}

export default Body;
