import React from "react";
import { Grid, Table, Box } from "@mui/material";
import Button from 'react-bootstrap/Button';
import Account from "./Account.jpg";
import img from "./img.jpg";
import ReactRoundedImage from "react-rounded-image";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import "./navbar.css";
import Links from "./Links";
// import Muitable from "./Muitable";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Uitable from "./Uitable";
// import Adduser from "./Adduser";

function Container(data) {
  return (
    <>
      <div>
        <Grid
          item
          xm={12}
          container
          spacing={0}
          sx={{ border: 0 }}
          style={{ height: "100px" }}
        >
          <Grid lg={3} className="grid1" sx={{ border: 1 }}>
            <div
              style={{
                marginTop: "20px",
                marginLeft: "35%",
              }}
            >
              <ReactRoundedImage
                image={img}
                roundedColor="#DCDCDC"
                imageWidth="110"
                imageHeight="110"
                roundedSize="10"
                borderRadius="78"
              />
            </div>
            <h4>M.D.Erick</h4>
            {/* <p>
              </p> */}
            <div className="accountimg">
              <h6 style={{ backgroundColor: "white", justifyItems: "center" }}>
                <img src={Account} width="40px" alt="Logo" />
                <p>
                  <h6 style={{ textAlign: "center" }}>Fiona Gallaghar</h6>
                </p>
              </h6>
              <h6 style={{ backgroundColor: "white" }}>
                <img src={Account} width="40px" alt="Logo" />
                <p>
                  <h6 style={{ textAlign: "center" }}>Fiona Gallaghar</h6>
                </p>
              </h6>
            </div>
            <hr />
            <Links />
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
          </Grid>
          <Grid lg={9} sx={{ border: 1 }}>
            <div className="top">
              <ul>
                <li>Bussiness Hours</li>
                <li>Preferences</li>
                <li>
                  <b>Accounts</b>
                </li>
              </ul>
            </div>
            <hr color="black" />
            {/* <div > */}
            <h1>
              Users
              <Box
                display={"flex"}
                justifyContent={"flex-end"}
                alignItems={"flex-end"}
                marginTop={"-50px"}
                marginRight={"10px"}
              >
                  <Button
                    className="btn"
                    variant="contained"
                    href="#"
                    sx={{ height: "40px" }}
                  >
                <Link to="/adduser">
                    <GroupAddIcon style={{ color: "black" }} />
                    <b>Add User</b>
                </Link>
                  </Button>
              </Box>
            </h1>
            {/* <button
                className="btn"
                variant="outlined"
                href="#"
                fontSize="medium"
              >
                <GroupAddIcon style={{ color: "white" }} />
                Add User
              </button> */}
            {/* </div> */}
            {/* <Muitable />
             */}
            <Uitable />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Container;
