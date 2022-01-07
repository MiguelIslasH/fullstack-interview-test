import { useEffect, useState } from "react";

import PRItem from "../item/PR_item";

import { getPRs } from "../utils/functions";

import "./PR_list.css";

interface IPR {
  compareBranch: string;
  title: string;
  description: string;
  status: string;
  baseBranch: string;
  _id: string;
}

function PRList() {
  const [PRs, setPRs] = useState<Array<IPR>>([]);

  useEffect(() => {
    getPRs().then((PRsData) => {
      setPRs(PRsData);
    });
  }, []);

  return (
    <div className="list">
      {PRs &&
        PRs.map((pr) => (
          <PRItem
            compare={pr.compareBranch}
            title={pr.title}
            status={pr.status}
            base={pr.baseBranch}
            description={pr.description}
            id={pr._id}
          />
        ))}
    </div>
  );
}

export default PRList;
