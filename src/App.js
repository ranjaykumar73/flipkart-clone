import{Routes,Route} from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import { Login } from "./components/Login";
import { Cart } from "./components/Cart";
import { Registration } from "./components/Registration";
import  { Login1 } from "./components/Login1";
import {  Modal } from "@mui/material";
import React from "react";


function App() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

  return (
    <div className="App">
      <Navbar handleOpen={handleOpen}/>
      
      <Routes>
      <Route  path="/"  element={<Home/>}/> 
      <Route path="Login" element={<Login/>}/>
      <Route path="Cart" element={<Cart/>}/>
      <Route path="Registration" element={<Registration/>}/>
      <Route path="Login1" element={<Login1/>}/>
 
      </Routes>

      <React.Fragment>
      
      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Login sx={{ ...style, width: 200 }} handleClose={handleClose}/>

        
      </Modal>
      </div>
    </React.Fragment>
    
    </div>
  );
}

export default App;
