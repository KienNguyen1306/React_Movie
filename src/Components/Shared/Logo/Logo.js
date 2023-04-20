// ---------------------- react router dom --------------
import { Link } from "react-router-dom";

//------------------------ data -------------------------
import logo from "../../../Data/logo.png";
//------------------------ css -------------------------
import "./Logo.css";
function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="logo" />
      <span>PHIMHAY</span>
    </Link>
  );
}

export default Logo;
