import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const navigate = useNavigate();
    const handleChange = () =>{
        navigate("/courseList");
    }
    return(
        <>
         <Box>
        <h1 className="flex justify-center items-center text-lg mt-3 text-white font-semibold">Log-In</h1>
        <div className="flex ml-60 mt-2 mx-80 w-[80%] h-[88%] ">
        <div className="flex-col  bg-slate-100 shadow-lg border-4 rounded-2xl">
         
          <div className="flex-col pt-2 px-4">Enter your email:
          <div className="flex-col w-full mt-2">
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="large"
              inputProps={{
                style: {
                  height: "5px",
                  width: "[10rem]",
                },
              }}
            />
          </div>
          </div>
          
          
          <div className="flex-col pt-2 px-4">Enter password:
          <div className="flex-col w-full mt-2">
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="large"
              inputProps={{
                style: {
                  height: "5px",
                  width: "[10rem]",
                },
              }}
            />
          </div>
          </div>
          <div className=" flex my-4 justify-center">
          <Button variant="contained" style={{background:"blue-400"}} onClick={handleChange}>Log-in</Button>
          </div>
        
        </div>
        </div>
      </Box>
        </>
    )
}

export default Login