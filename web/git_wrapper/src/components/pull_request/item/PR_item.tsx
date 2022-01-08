import { useState } from "react";
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
  const [status, setStatus] = useState(props.status);

  return (
    <div className="item_container--PR">
      <Title
        key={props.id}
        title={props.title}
        isCurrent={true}
        secondTitle={status}
      />

      <BodyPR
        description={props.description}
        base={props.base}
        compare={props.compare}
        id={props.id}
        setStatus={setStatus}
      />
    </div>
  );
}

export default PRItem;
