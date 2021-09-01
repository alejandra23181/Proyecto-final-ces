import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        Trivia - proyecto final :(
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
