import Title from "../../branches/local_components/title/title";
import BodyPR from "./body/body";

import "./PR_item.css";

interface PRItemProps {
  title: string;
  status: string;
  base: string;
  compare: string;
  description: string;
  id: string;
}

function PRItem(props: PRItemProps) {
  return (
    <div className="item_container--PR">
      <Title title={props.title} isCurrent={true} secondTitle={props.status} />

      <BodyPR
        description={props.description}
        base={props.base}
        compare={props.compare}
        id={props.id}
      />
    </div>
  );
}

export default PRItem;
