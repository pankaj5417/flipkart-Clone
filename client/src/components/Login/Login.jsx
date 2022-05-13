import {
  Box,
  Button,
  Dialog,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";



const useStyle = makeStyles({
  component: {
     padding:"0 !important",
     maxWidth:"800px !important",
   
  },
  image: {
      flex:1.5,
    backgroundImage: `url(${`https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png`})`,
    height: "50vh",
    backgroundRepeat: "no-repeat",
    background: "#2874f0",
    width: "650px",
    backgroundPosition: "center 85%",
    padding:"45px 35px",


    "&>*": {
      color: "#FFFFFF",
      fontWeight: 600,
    },
  },
  Input:{
      width:"97%",
      
  },
  InputBox:{
    flex:3,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between"
  },
  DialogBox:{
    maxWidth:"900px !important",

  }
});

export default function Login({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyle();
  return (
    <Dialog
      style={{ marginLeft: "20%"  }}
      open={open}
      onClose={handleClose}
      className={classes.DialogBox}
      maxWidth={false}
    >
      <DialogContent className={classes.component}>
        <Box style={{ display: "flex",maxWidth:"900px !important" }}>
          <Box className={classes.image}>
            <Typography variant="h5" className={classes.loginText}>
              Login
            </Typography>
            <Typography style={{ marginTop: 20 }} className={classes.text}>
              Get access to your Orders, Wishlist and Recommendations
            </Typography>
          </Box>
          <Box className={classes.InputBox} style={{padding:"60px 40px"} }>
            {/* <TextField></TextField> */}
            <TextField
            className={classes.Input}

              id="standard-password-input"
              label="Enter email/Mobile Number"
              type="text/number"
              autoComplete=""
              variant="standard"
              
            />
          
            <TextField
            className={classes.Input}
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <Typography>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Typography>

            <Button variant="contained" style={{backgroundColor:"#ff5722",height:"50px",fontWeight:"600"}} >Login</Button>
            <Typography style={{textAlign:"center"}}>OR</Typography>
            <Button variant="outlined" style={{fontWeight:"600",height:"50px"}} >Request OTP</Button>
            <Typography style={{textAlign:"center"}}>New to Flipkart? Create an account</Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
