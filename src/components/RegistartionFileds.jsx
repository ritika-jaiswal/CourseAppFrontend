import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Authentication from "./Authentication";

const RegistrationFields = () =>{
    const navigate = useNavigate();
    // const [isLogin, setIsLogin] = useState(false);
    // let setIsLogin = false;
    // useEffect(() => {

    // },[isLogin])
    const handleChange = () =>{
        // setIsLogin = true;
       
    }
    return(
        <>
         <Box>
        <h1 className="flex justify-center items-center text-lg mt-3 text-white font-semibold">Sign-In</h1>
        <div className="flex ml-60 mt-2 mx-80 w-[80%] h-[88%] ">
        <div className="flex-col  bg-slate-100 shadow-lg border-4 rounded-2xl">
          <div className="flex-col pt-2 px-4">Enter your name:
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
          <div className="flex-col pt-2 px-4">Enter your mobile number:
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
          <div className="flex-col pt-2 px-4">Enter new password:
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
          <div className="flex-col pt-2 px-4">Re-Enter password:
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
          <Button variant="contained" style={{background:"blue-400"}} onClick={handleChange}>Sing-in</Button>
          </div>
          <div className="flex justify-center items-center pb-4 -pt-4">
            If you'r already registered, 
            <Button onClick={handleChange}>login</Button>
          </div>
          {/* <div> <Authentication data = {setIsLogin}/></div> */}
        
        </div>
      
        </div>
        
      </Box> 
        </>
    )
}

export default RegistrationFields