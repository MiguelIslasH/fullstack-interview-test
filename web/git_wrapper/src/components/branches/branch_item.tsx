import Title from "./local_components/title/title";
import Body from "./local_components/body/body";

import "./branch_item.css";

function BranchItem() {
  return (
    <div className="item_container">
      <Title title="Master" isCurrent={true} />
      <Body />
    </div>
  );
}

export default BranchItem;
