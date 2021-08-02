import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import amazonlogin from "../../images/amazon-login.png";
import { signup } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState("");
  // const history = useHistory();

  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  // useEffect(() => {
  //     if (user) {
  //         history.push('/')
  //     }
  // }, [history, user])

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(signup({ firstName, lastName, email, password }));
  };

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
            <form
              className={classes.text}
              noValidate
              autoComplete="off"
              onSubmit={submitHandler}
            >
              <TextField
                id="outlined-name"
                label="FirstName"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <TextField
                id="outlined-name"
                label="LastName"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              <TextField
                id="outlined-email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="outlined-password"
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                onClick={submitHandler}
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
