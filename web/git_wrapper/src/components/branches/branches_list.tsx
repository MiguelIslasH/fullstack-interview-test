import { useEffect, useState } from "react";

import BranchItem from "./branch_item";

import { getAllBranches } from "./utils/functions";

import "./branches_list.css";

interface BranchData {
  all: [];
  branches: {};
  current: string;
  detached: boolean;
}

function BranchesList() {
  const [branches, setBranches] = useState<BranchData>();

  useEffect(() => {
    getAllBranches().then((branchesData) => {
      setBranches(branchesData);
    });
  }, []);

  return (
    <div className="list">
      {branches &&
        branches.all.map((branch, index) => {
          return (
            <BranchItem
              key={branch + index}
              title={branch}
              isCurrent={branches.current === branch}
              lastCommitId={branches.branches[branch]["commit"]}
              lastCommitComment={branches.branches[branch]["label"]}
            />
          );
        })}
    </div>
  );
}

export default BranchesList;
