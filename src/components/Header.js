import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        Trivia - Quien quiere ser millonario
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
