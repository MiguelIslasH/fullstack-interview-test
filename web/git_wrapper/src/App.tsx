import NavBar from "./components/layout/navbar/navbar";
import Divider from "./components/layout/divider/divider";
import BranchesList from "./components/branches/branches_list";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Divider text="Branches" />
      <BranchesList />
    </div>
  );
}

export default App;
