import Title from "./local_components/title/title";
import Body from "./local_components/body/body";

import "./branch_item.css";

interface BranchItemProps {
  title: string;
  isCurrent: boolean;
  lastCommitId: string;
  lastCommitComment: string;
}

function BranchItem(props: BranchItemProps) {
  return (
    <div className="item_container">
      <Title title={props.title} isCurrent={props.isCurrent} />
      <Body
        title={props.title}
        commitId={props.lastCommitId}
        commitMessage={props.lastCommitComment}
      />
    </div>
  );
}

export default BranchItem;
