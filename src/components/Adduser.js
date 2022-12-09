import React,{useRef} from 'react'
// import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { Button , Box} from '@mui/material';



function Adduser({data,setList}) {
    const idRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    // const id = event.target.elements.id.value;
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const mobile = event.target.elements.mobile.value;
    const newlist = {
      id: 3,
      name,
      email,
      mobile,
    };
    setList((prevList) => {
      return prevList.concat(newlist);
    });
    idRef.current.value = "";
    nameRef.current.value = "";
    emailRef.current.value = "";
    mobileRef.current.value = "";
  }
  return (
    <>
     {/* <Grid item md={6} xs={6}> */}
        <Box
          textAlign="center"
          style={{ backgroundColor: "lightGray", marginTop: "30px" }}
          p={3}
        >
          <h4>Add Users</h4> 
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              <div textAlign="center">
            
        <input
          type="text"
          name="name"
          placeholder="Enter Name......"
          ref={idRef}
        
        ></input>
        <input
          type="text"
          name="email"
          placeholder="Enter Email......"
          ref={nameRef}
        ></input>
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number......"
          ref={emailRef}
        ></input>
              </div>
            </Box>
          <Box sx={{ marginTop: "10px" }}>
            <Button type="submit" variant="contained" color="primary">
              {" "}
              ADD USER
            </Button>
          </Box>
          </form>
        </Box>
      {/* </Grid> */}
  </>
  )
}


export default Adduser;