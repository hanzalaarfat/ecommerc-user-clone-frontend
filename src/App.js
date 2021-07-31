import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./containers/HomePage";
import Login from "./containers/Login";
import Register from "./containers/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
