import Button from "../../global_components/button/button";

import classes from "./navbar.module.css";

function NavBar() {
  return (
    <div className={classes.navbar}>
      <h1>Git Wrapper</h1>
      <Button text="Create PR" variant="green" />
    </div>
  );
}

export default NavBar;
