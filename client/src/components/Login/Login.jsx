import {
  Box,
  Button,
  Dialog,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import React from "react";

const useStyle = makeStyles({
  component: {
     
    // marginLeft:"20%"
  },
  image: {
      flex:1,
    backgroundImage: `url(${`https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png`})`,
    height: "56vh",
    backgroundRepeat: "no-repeat",
    background: "#2874f0",
    width: "350px",
    backgroundPosition: "center 85%",
    padding:"45px 35px",


    "&>*": {
      color: "#FFFFFF",
      fontWeight: 600,
    },
  },
  Input:{
      width:"97%",
      marginTop:"10px"
  }
});

export default function Login({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyle();
  return (
    <Dialog
      style={{ width: "700px", marginLeft: "25%" }}
      open={open}
      onClose={handleClose}
    >
      <DialogContent className={classes.component}>
        <Box style={{ display: "flex" }}>
          <Box className={classes.image}>
            <Typography variant="h5" className={classes.loginText}>
              Login
            </Typography>
            <Typography style={{ marginTop: 20 }} className={classes.text}>
              Get access to your Orders, Wishlist and Recommendations
            </Typography>
          </Box>
          <Box style={{padding:"10px"}}>
            {/* <TextField></TextField> */}
            <TextField
            className={classes.Input}

              id="standard-password-input"
              label="Enter email/Enter mobile No"
              type="password"
              autoComplete="current-password"
              variant="standard"
              
            />
            <br />
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

            <Button>Login</Button>
            <Typography>OR</Typography>
            <Button>Request OTP</Button>
            <Typography>New to Flipkart? Create an account</Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
