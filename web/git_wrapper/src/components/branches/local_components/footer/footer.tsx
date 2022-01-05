import Button from "../../../global_components/button/button";

import "./footer.css";

interface FooterProps {
  title: string;
}

function Footer(props: FooterProps) {
  return (
    <div className="footer__container">
      <Button
        text="View all"
        variant="orange"
        modalName="commits"
        branchName={props.title}
      />
    </div>
  );
}

export default Footer;
