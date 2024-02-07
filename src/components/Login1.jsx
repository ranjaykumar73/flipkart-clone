import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Login } from './Login';


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

export function Login1() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <React.Fragment>
      <div className=''>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
    
      <Login sx={{ ...style, width: 200 }} handleClose={handleClose} handleOpen={handleOpen} />

      </Modal>
      </div>
    </React.Fragment>
  );
}
