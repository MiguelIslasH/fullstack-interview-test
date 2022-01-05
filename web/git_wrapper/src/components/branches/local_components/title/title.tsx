import "./title.css";

interface TitleProps {
  title: string;
  isCurrent: boolean;
}

function Title(props: TitleProps) {
  return (
    <div className="title__container">
      <h4 className="title__text">{props.title}</h4>
      {props.isCurrent ? <h5 className="subtitle__text">Current</h5> : ""}
    </div>
  );
}

export default Title;
