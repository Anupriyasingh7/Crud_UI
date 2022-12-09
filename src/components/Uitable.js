// import {
//   Button,
//   // ButtonGroup,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@mui/material";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
function createData(id, name, email, mobile, remark, status, actions) {
  return { id, name, email, mobile, remark, status, actions };
}

const data = [
  createData(
    1,
    "Fdjg Gallaghar",
    "Fiona07@Gallarghar.com",
    9802187755,
    "Head Physician"
  ),
  createData(
    2,
    "Fiona Gallaghar",
    "Fiona07@Gallarghar.com",
    9802187755,
    "Head Physician"
  ),
];
function Uitable() {
  const [rows, setRows] = React.useState(data);
  // const [newRow,setNewRow]=useState(id)
  const handleChangeConnect = (id) => {
    console.log("The id is ", id);
    setRows(
      rows.map((row) => {
        if (row.id === id) {
          return { ...row, status: !row.status };
        } else return { ...row };
      })
    );
  };
  function handleDelete(id) {
    const newrows = rows.filter((row) => row.id !== id);
    setRows(newrows);
  }

  return (
    // <TableContainer component={Paper}>
    <div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {/* <TableHead> */}
        <thead>
          <tr>
            <th align="center">Name</th>
            <th align="center">Email ID</th>
            <th align="center">Mobile No.</th>
            <th align="center">Remark</th>
            <th align="center">Status</th>
            <th align="center">Actions</th>
          </tr>
          </thead>
        {/* </TableHead> */}
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
            >
              <td align="right">{row.name}</td>
              <td align="right">{row.email}</td>
              <td align="right">{row.mobile}</td>
              <td align="right">{row.remark}</td>
              <td align="right">
                <Button
                  variant="contained"
                  // color={row.status ? "primary" : "secondary"}
                  color='primary'
                  onClick={() => {
                    handleChangeConnect(row.id);
                  }}
                >
                  {row.status ? <ThumbUpIcon /> : <ThumbDownIcon />}
                </Button>
              </td>
              <td align="right">
                {" "}
                <Button
                  onClick={() => handleDelete(row.id)}
                  style={{ backgroundColor: "red" }}
                  variant="contained"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    {/* </TableContainer> */}
    </div>
  );
}
// function Adduser(){
//   return (
//     <form>
//       <input type={"text"} name='name' placeholder="Enter Name...."/>
//       <input type={"text"} name="email" placeholder="Enter Name...."/>
//       <input type={"text"} name='mobile' placeholder="Enter Name...."/>
//       <button type="submit">Add User</button>
//     </form>
//   )
// }

export default Uitable;
