import React, { useState } from "react";
import "./navbar.css";
import DeleteIcon from "@mui/icons-material/Delete";
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  ButtonGroup,
} from "@mui/material";
function createdata(id, name, email, mobile, remark, status, actions) {
  return { id, name, email, mobile, remark, status, actions };
}
const tableData = [
  createdata(
    1,
    "Fiona Gallaghar",
    "Fiona07@Gallaghar.com",
    9802187755,
    "Head Physician"
  ),
  createdata(
    2,
    "Fiona Gallaghar",
    "Fiona07@Gallaghar.com",
    9802187755,
    "Head Physician"
  ),
  createdata(
    3,
    "Fiona Gallaghar",
    "Fiona07@Gallaghar.com",
    9802187755,
    "Head Physician"
  ),
  createdata(
    4,
    "Fiona Gallaghar",
    "Fiona07@Gallaghar.com",
    9802187755,
    "Head Physician"
  ),
];
function Muitable() {
  const [row, setRow] = useState(tableData);

  const handleChangeConnect = (id) => {
    setRow(
      row.map((row) => {
        if (row.id === id) {
          return { ...row, status: !row.status };
        } else return { ...row };
      })
    );
  };
  function handleDelete(id) {
    const newlist = row.filter((row) => row.id !== id);
    setRow(newlist);
  }
  return (
    <>
      <div className="tablebody">
        <TableContainer component={Paper} sx={{ border: 0 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{ "& th": { color: "white" } }}>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email ID</TableCell>
                <TableCell align="center">Mobile No.</TableCell>
                <TableCell align="center">Remark</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td,&:last-child th": { border: 1 } }}
                >
                  <TableCell sx={{ border: 1 }}>{row.name}</TableCell>
                  <TableCell sx={{ border: 1 }}>{row.email}</TableCell>
                  <TableCell sx={{ border: 1 }}>{row.mobile}</TableCell>
                  <TableCell sx={{ border: 1 }}>{row.remark}</TableCell>
                  <TableCell sx={{ border: 1 }}>
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      <Button
                        color={row.status ? "primary" : "secondary"}
                        onClick={() => {
                          handleChangeConnect(row.id);
                        }}
                      >
                        {row.status ? <ThumbUpIcon /> : "yes"}
                      </Button>
                      <Button></Button>
                    </ButtonGroup>
                  </TableCell>
                  <TableCell sx={{ border: 1 }}><DeleteIcon   onClick={() => handleDelete(row.id)}/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

// const tableData = [
//   {
//     name: "Fiona Gallaghar",
//     email: "Fiona07@Gallaghar.com",
//     mobile: "9802187755",
//     remark: "Head Physician",
//     status: "",
//     //  (
//     //   <ButtonGroup
//     //     style={({ border:'1px solid grey'})}

//     //     disableElevation
//     //     variant="contained"
//     //     arial-lablel="small button group"
//     //   >
//     //     return(
//     //     <Button
//     //       style={({ backgroundColor: "white" })}

//     //       // onClick={handleClick}

//     //     >
//     //       <ThumbUpIcon style={{color:"green"}} />
//     //     </Button>
//     //     )
//     //     <Button  style={({ backgroundColor: "white" })}> </Button>
//     //   </ButtonGroup>),
//     actions: (
//       <Button
//         style={{ backgroundColor: "red" }}
//         variant="contained"
//         startIcon={<DeleteIcon />}
//       >
//         Delete
//       </Button>
//     ),
//   },
//   {
//     name: "Frank Gallaghar",
//     email: "Frank07@Gallaghar.com",
//     mobile: "7011255178",
//     remark: "Staff account",
//     // status: (
//     //   <ButtonGroup
//     //     style={({ border:'1px solid grey'})}

//     //     disableElevation
//     //     variant="contained"
//     //     arial-lablel="small button group"
//     //   >
//     //     <Button
//     //       style={({ backgroundColor: "white" })}
//     //     >
//     //     </Button>
//     //     <Button  style={({ backgroundColor: "white" })}>

//     //       <ThumbDownIcon style={{color:"green"}} />
//     //     </Button>
//     //   </ButtonGroup>
//     // ),
//     actions: (
//       <Button
//         style={{ backgroundColor: "red" }}
//         variant="contained"
//         startIcon={<DeleteIcon />}
//       >
//         Delete
//       </Button>
//     ),
//   },
// ];

export default Muitable;
