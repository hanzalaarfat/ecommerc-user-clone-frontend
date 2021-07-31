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
      height: theme.spacing(50),
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

export default function Register() {
  const classes = useStyles();

  return (
    <>
      <div className="Login">
        <div className="logoR">
          <a href="/">
            <img src={amazonlogin} className="logoimageR" alt="" />
          </a>
        </div>
        <div className={classes.root}>
          <Paper>
            <h3 className="sigin">Create New Account </h3>
            <form className={classes.text} noValidate autoComplete="off">
              <TextField
                id="outlined-user-name"
                label="User Name"
                variant="outlined"
              />
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
          <h6>Already have an account? </h6>
          <Button
            href="/login"
            className={classes.btn}
            variant="contained"
            color="default"
          >
            SignIn
          </Button>
        </div>
      </div>

      <hr></hr>
    </>
  );
}
