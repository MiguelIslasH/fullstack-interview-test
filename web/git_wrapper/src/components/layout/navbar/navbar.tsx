import { useState } from "react";

import Button from "../../global_components/button/button";

import classes from "./navbar.module.css";

function NavBar() {
  const [showPRModal, setShowPRModal] = useState(false);
  return (
    <div className={classes.navbar}>
      <h1>Git Wrapper</h1>
      <Button text="Create PR" variant="green" modalName="pullrequest" />
    </div>
  );
}

export default NavBar;
