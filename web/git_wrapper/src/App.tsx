import NavBar from "./components/layout/navbar/navbar";
import Divider from "./components/layout/divider/divider";
import BranchesList from "./components/branches/branches_list";
import PRList from "./components/pull_request/list/PR_list";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Divider text="Branches" variant="yellow" />
      <BranchesList />
      <Divider text="Pull Requests" variant="purple" />
      <PRList />
    </div>
  );
}

export default App;
