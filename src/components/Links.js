import React from 'react'
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
function Links() {
  return (
    <div>
    <>
      <nav >
        <ul >
          <li>
          <GridViewIcon className="list" sx={{ fontSize: 30 }} /> <Link to="/">Dashboard</Link>
          </li>
          <li > <FormatListBulletedIcon
                  className="list"
                  sx={{ fontSize: 40 }}
                />
            <Link to="/result">Results</Link>
          </li>
          <li> <SettingsIcon
                  className="list"
                  sx={{ fontSize: 40, color: "#8ea3e7" }}
                />
            <Link to="/setting">Settings</Link>
          </li>
        </ul>
      </nav>
    </>

        
        {/* <div style={{ justifyContent: "space-between" }}>
              <div>
                <GridViewIcon className="list" sx={{ fontSize: 30 }} />
                <Link style={{ marginTop: "-5px" }} to="/">Dashboard
                </Link>
              </div>
              <div>
                <FormatListBulletedIcon
                  className="list"
                  sx={{ fontSize: 40 }}
                />
                <Link style={{ marginTop: "-5px" }} to="/result">Result
                </Link>
                </div>
              <div>
                <SettingsIcon
                  className="list"
                  sx={{ fontSize: 40, color: "#8ea3e7" }}
                />
              <Link style={{ marginTop: "-5px" }} to='/setting'>Setting
                </Link>
              </div>
            </div> */}
    </div>
  )
}

export default Links;