import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import amazonlogin from "../../images/amazon-login.png";
import { login } from "../../actions";
import Loading from "../../components/Loading";

import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
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

export default function Login({ history }) {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  // const history = useHistory();

  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.authenticate) {
      history.push("/");
    }
  }, [history, auth.authenticate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    // setLoading(true);

    dispatch(login({ email, password }));
  };

  return (
    <>
      <div className="Login">
        {auth.loading && <Loading />}
        <div className="logoL">
          <a href="/">
            <img src={amazonlogin} className="logoimageL" alt="" />
          </a>
        </div>
        <div className={classes.root}>
          <Paper>
            <h3 className="sigin">Sign-In</h3>
            <form
              className={classes.text}
              noValidate
              autoComplete="off"
              onSubmit={submitHandler}
            >
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
                disabled={auth.loading}
              >
                {auth.loading && <CircularProgress size={30} />}
                {!auth.loading && "Continue"}
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
