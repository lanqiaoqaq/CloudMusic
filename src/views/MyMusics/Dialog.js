import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
    // console.log(props)
  const handleClickOpen = () => {
    setOpen(true);
  };
  function addList(){
    //   console.log(1)
    const a=document.getElementById("listid").value;
    if(a){
         props.newList(a); 
    }
  }
  const handleClose = (b) => {
    setOpen(false);
    if(b){
        addList();
    }
  };

  return (
    <div>
         <span className={"iconfont iconjiahao iconCollM2"} onClick={handleClickOpen}></span>
      {/* <Button variant="outlined" color="primary" >
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <p style={{fontSize:".6rem",color:"black",padding:".5rem"}}>新建歌单</p>
        <DialogContent>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label=""
            type="text"
            fullWidth
          /> */}
          <input id="listid" type="text" placeholder="请输入歌单标题" style={{border:"none",outline:"none",borderBottom:"1px solid black"}}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleClose(0)} style={{fontSize:".6rem",color:"red"}} >
            取消
          </Button>
          <Button onClick={()=>handleClose(1)} style={{fontSize:".6rem",color:"red"}}>
            提交
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}