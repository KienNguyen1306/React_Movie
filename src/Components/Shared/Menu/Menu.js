// -------------------------- react-router-dom -------

import { Link } from "react-router-dom";
// -------------------------- css --------------------
import "./Menu.css";
import MenuItem from "./MenuItem";
function Menu({ menuData }) {
  return (
    <ul>
      {menuData.map((item, index) => {
        return <MenuItem key={index} data={item} />;
      })}
      <Link to="/contact" className="menu-item ">
        <p>Contact</p>
      </Link>
    </ul>
  );
}

export default Menu;
