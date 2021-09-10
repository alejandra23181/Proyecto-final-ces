import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        <img  src="https://image.flaticon.com/icons/png/512/15/15766.png" height="40px" width="40px"/>
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
