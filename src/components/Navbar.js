import React from "react";
// import 'flag-icon-css/css/flag-icon.min.css'
import "./navbar.css";
import { Select, MenuItem } from "@mui/material";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import logo from "./logo.jpg";

const Navbar = () => {
  const [country, setCountry] = React.useState(" ");
  const updateSelectVal = (e) => {
    console.warn(e.target.value);
    setCountry(e.target.value);
  };
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img src={logo} width="200px" alt="Logo" />
        </div>
        <div className="icons">
          <ul className="icons-desktop">
            <li>
              <a href="#">
                <Select
                  width="50px"
                  value={country}
                  displayEmpty
                  onChange={updateSelectVal}

                >
                  <MenuItem value=" " disabled>
                    <img src="https://flagcdn.com/in.svg" width={"20"} />
                  </MenuItem>
                  <MenuItem value={"IN"}>
                    <img src="https://flagcdn.com/in.svg" width={"20"} />
                  </MenuItem>
                  <MenuItem value={"CN"}>
                    <img src="https://flagcdn.com/cn.svg" width={"20"} />
                  </MenuItem>
                  <MenuItem value={"AU"}>
                    <img src="https://flagcdn.com/au.svg" width={"20"} />
                  </MenuItem>
                  <MenuItem value={"DE"}>
                    <img src="https://flagcdn.com/de.svg" width={"20"} />
                  </MenuItem>
                  <MenuItem value={"CA"}>
                    <img src="https://flagcdn.com/ca.svg" width={"20"} />
                  </MenuItem>
                </Select>
              </a>
            </li>
            <li>
              <a href="#">
                <EnhancedEncryptionIcon style={{color:"white"}}></EnhancedEncryptionIcon>
              </a>
            </li>
            <li>
              <a href="#">
                <ExitToAppIcon style={{color:"white"}}></ExitToAppIcon>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
