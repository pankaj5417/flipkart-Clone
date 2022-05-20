import {
  Box,
  Button,
  Dialog,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { getBasicDetails, postBasicDetails } from "../../redux/basicDetails/actionCreators";

const useStyle = makeStyles({
  component: {
    padding: "0 !important",
    maxWidth: "800px !important",
  },
  image: {
    flex: 1.5,
    backgroundImage: `url(${`https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png`})`,
    height: "50vh",
    backgroundRepeat: "no-repeat",
    background: "#2874f0",
    width: "650px",
    backgroundPosition: "center 85%",
    padding: "45px 35px",

    "&>*": {
      color: "#FFFFFF",
      fontWeight: 600,
    },
  },
  Input: {
    width: "97%",
  },
  InputBox: {
    flex: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  DialogBox: {
    maxWidth: "900px !important",
  },
});

export default function Login({ open, setOpen,setIsLogin }) {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const {userData}=useSelector(state=>({userData:state.userDetail.userDetails}))

  const loginInitialValues = {
    email: "",
    password: "",
  };

  const signupInitialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  };

  const accountInitialValues = {
    login: {
      view: "login",
      heading: "Login",
      subHeading: " Get access to your Orders, Wishlist and Recommendations",
    },
    signup: {
      view: "signup",
      heading: "Looks like you're new here",
      subHeading: "Signup to get started",
    },
  };

  //const LoginDialog = ({ open, setOpen, setAccount }) => {
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, showError] = useState(false);
  const [account, toggleAccount] = useState(accountInitialValues.login);

  useEffect(() => {
    showError(false);
  }, [login]);


  const authenticateUser=()=>{
    userData.forEach(user=>{
      user.email===login.email&&user.password===login.password?
   
     showUser()
        
    
      :alert("Invalid credentials")
    })
  }

  const showUser=()=>{
   // setIsLogin(true)
    alert("Login successful")
    navigate("/products")
  }
  const handleLoginInput = (e) => {
    const {name,value}=e.target
    setLogin({ ...login, [name]: value });
  };

  const handleSignUpInput = (e) => {
    const {name,value}=e.target

    setSignup({ ...signup, [name]: value });
  };

  console.log("login",login)
  console.log("signup",signup)
  // const loginUser = async() => {
  //     let response = await authenticateLogin(login);
  //     if(!response)
  //         showError(true);
  //     else {
  //         showError(false);
  //         handleClose();
  //         setAccount(login.username);
  //     }
  // }
const loginUser=()=>{
  dispatch(getBasicDetails())
  authenticateUser()
}
  const signupUser = () => {
    dispatch(postBasicDetails(signup))
    // let response = await authenticateSignup(signup);
    // if(!response) return;
    // handleClose();
    // setAccount(signup.username);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };
  const toggleLogin = () => {
    toggleAccount(accountInitialValues.login);
  };

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };
  const classes = useStyle();
  return (
    <Dialog
      style={{ marginLeft: "20%" }}
      open={open}
      onClose={handleClose}
      className={classes.DialogBox}
      maxWidth={false}
    >
      <DialogContent className={classes.component}>
        <Box style={{ display: "flex", maxWidth: "900px !important" }}>
          <Box className={classes.image}>
            <Typography variant="h4" className={classes.loginText}>
              {account.heading}
            </Typography>
            <Typography style={{ marginTop: 20 }} className={classes.text}>
              {account.subHeading}
            </Typography>
          </Box>
          {account.view === "login" ? (
            <Box className={classes.InputBox} style={{ padding: "50px 40px" }}>
              {/* <TextField></TextField> */}
              <TextField
                className={classes.Input}
                id="standard-password-input"
                label="Enter email/Mobile Number"
                type="email/number"
                name="email"
                autoComplete=""
                variant="standard"
                onChange={handleLoginInput}
              />

              <TextField
                className={classes.Input}
                id="standard-password-input"
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                onChange={handleLoginInput}
              />
              <Typography>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>

              <Button
                variant="contained"
                style={{
                  backgroundColor: "#ff5722",
                  height: "50px",
                  fontWeight: "600",
                }}
                onClick={loginUser}
              >
                Login
              </Button>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <Button
                variant="outlined"
                style={{ fontWeight: "600", height: "50px" }}
              >
                Request OTP
              </Button>
              <Typography
                color="primary"
                onClick={toggleSignup}
                style={{ textAlign: "center", cursor:"pointer", fontWeight: "600" }}
              >
                New to Flipkart? Create an account
              </Typography>
            </Box>
          ) : (
            <Box className={classes.InputBox} style={{ padding: "30px 40px" }}>
              <TextField
                variant="standard"
                className={classes.Input}
                onChange={(e) => handleSignUpInput(e)}
                name="firstname"
                label="Enter Firstname"
              />
              <TextField
                variant="standard"
                className={classes.Input}
                onChange={(e) => handleSignUpInput(e)}
                name="lastname"
                label="Enter Lastname"
              />
              <TextField
                variant="standard"
                className={classes.Input}
                onChange={(e) => handleSignUpInput(e)}
                name="username"
                label="Enter Username"
              />
              <TextField
                variant="standard"
                className={classes.Input}
                onChange={(e) => handleSignUpInput(e)}
                name="email"
                type="email"
                label="Enter Email"
              />
              <TextField
                variant="standard"
                className={classes.Input}
                onChange={(e) => handleSignUpInput(e)}
                type="password"
                name="password"
                label="Enter Password"
              />
              <TextField
                variant="standard"
                className={classes.Input}
                onChange={(e) => handleSignUpInput(e)}
                name="phone"
                type="number"
                label="Enter Mobile number"
              />
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#ff5722",
                  height: "50px",
                  fontWeight: "600",
                }}
                onClick={ signupUser}
              >
                Continue
              </Button>
              <Button
                variant="outlined"
                onClick={toggleLogin}
                style={{ fontWeight: "600", height: "50px" }}
              >
                Existing User? Log in
              </Button>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
