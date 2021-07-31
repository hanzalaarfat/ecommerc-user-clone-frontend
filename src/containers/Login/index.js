import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import amazonlogin from "../../images/amazon-login.png";

import "./style.css";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(40),
    },
  },
  text: {
    "& > *": {
      margin: theme.spacing(2),
      width: "20ch",
    },
  },
  btn: {
    "& > *": {
      width: "30ch",
    },
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <>
      <div className="Login">
        <div className="logoL">
          <a href="/">
            <img src={amazonlogin} className="logoimageL" alt="" />
          </a>
        </div>
        <div className={classes.root}>
          <Paper>
            <h3 className="sigin">Sign-In</h3>
            <form className={classes.text} noValidate autoComplete="off">
              <TextField id="outlined-email" label="Email" variant="outlined" />
              <TextField
                id="outlined-password"
                label="Password"
                variant="outlined"
              />
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
              >
                Continue
              </Button>
            </form>
          </Paper>
        </div>

        <div>
          <h6>New to Amazon? </h6>
          <Button
            href="/register"
            className={classes.btn}
            variant="contained"
            color="default"
          >
            Create New Account
          </Button>
        </div>
      </div>

      <hr></hr>
    </>
  );
}
