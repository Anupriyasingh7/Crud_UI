import React, { useRef, useState } from "react";
import "./curd.css";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

function Curd() {
  const list = [
    {
      id: 1,
      empid: 1,
      name: "Anupriya",
      email: "anupriya@gmail.com",
      phone: 6474438734,
    },
    {
      id: 2,
      empid: 2,
      name: "David",
      email: "david@gmail.com",
      phone: 6474438734,
    },
    {
      id: 3,
      empid: 3,
      name: "Shyam",
      email: "shyam@gmail.com",
      phone: 6474438734,
    },
    {
      id: 4,
      empid: 4,
      name: "Dev",
      email: "dev@gmail.com",
      phone: 6474438734,
    },
    {
      id: 5,
      empid: 5,
      name: "Ananya",
      email: "ananya@gmail.com",
      phone: 6474438734,
    },
  ];
  const [lists, setList] = useState(list);
  const [updateState, setUpdateState] = useState(-1);
  return (
    <div className="curd">
      <div>
        
        <AddList setList={setList} />
        <form onSubmit={handleSubmit}>
          <table>
            {lists.map((current) =>
              updateState === current.id ? (
                <EditList current={current} lists={lists} setList={setList} />
              ) : (
                <tr>
                  <td>{current.empid}</td>
                  <td>{current.name}</td>
                  <td>{current.email}</td>
                  <td>{current.phone}</td>
                  <td>
                    <button
                      className="edit" onClick={handleEdit}
                    >
                      <CreateIcon sx={{ fontSize: 20 }} />
                    </button>
                    <button
                      className="delete"
                      type="button"
                      onClick={() => handleDelete(current.id)}
                    >
                      <DeleteIcon sx={{ fontSize: 20 }} />
                    </button>
                  </td>
                </tr>
              )
            )}
          </table>
        </form>
      </div>
    </div>
  );
  function handleEdit(id) {
    setUpdateState(id);
  }
  function handleDelete(id) {
    const newlist = lists.filter((li) => li.id !== id);
    setList(newlist);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const empid = event.target.elements.empid.value;
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;
    const newlist = lists.map((li) =>
      li.id === updateState
        ? { ...li, empid: empid, name: name, email: email, phone: phone }
        : li
    );
    setList(newlist);
    setUpdateState(-1);
  }
}

function EditList({ current, lists, setList }) {
  function handleInput(event) {
    const name = event.target.name;
    const value = name.value;
    const newlist = lists.map((li) =>
      li.id === current.id
        ? { ...li, empid: value, name: value, email: value, phone: value }
        : li
    );
    setList(newlist);
  }

  return (
    <tr>
      <td>
        <input
          type="text"
          onChange={handleInput}
          name="empid"
          value={current.empid}
        ></input>
      </td>
      <td>
        <input
          type="text"
          onChange={handleInput}
          name="name"
          value={current.name}
        ></input>
      </td>
      <td>
        <input
          type="text"
          onChange={handleInput}
          name="email"
          value={current.email}
        ></input>
      </td>
      <td>
        <input
          type="text"
          onChange={handleInput}
          name="phone"
          value={current.phone}
        ></input>
      </td>
      <td>
        <button type="submit">Update</button>
      </td>
    </tr>
  );
}

function AddList({ setList }) {
  const empidRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    const empid = event.target.elements.empid.value;
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;
    const newlist = {
      id: 3,
      empid,
      name,
      email,
      phone,
    };
    setList((prevList) => {
      return prevList.concat(newlist);
    });
    empidRef.current.value = "";
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  }
  return (
    <>
      <h1>ADD EMPLOYEE DATA📝</h1>
      <form className="addform" onSubmit={handleSubmit}>
        <input
          type="text"
          name="empid"
          placeholder="Enter Emplyee Id......"
          ref={empidRef}
        ></input>
        <input
          type="text"
          name="name"
          placeholder="Enter Name......"
          ref={nameRef}
        ></input>
        <input
          type="text"
          name="email"
          placeholder="Enter Email......"
          ref={emailRef}
        ></input>
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number......"
          ref={phoneRef}
        ></input>
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default Curd;
