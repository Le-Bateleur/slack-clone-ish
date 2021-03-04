import React, { useState }from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
function DialogForm(props) {
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState("");
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAdd = () => {
    setOpen(false);
    props.done(input);
  };

  return (
    <div>
      <Dialog open={open}  Close={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a new chat</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the chat name
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            onChange={text=>setInput(text.target.value)}
            value={input}
            id="name"
            label="Chat Name"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogForm;