import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from "./containers/HomePage";

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          </Switch>
          </Router>
    </div>
  );
}

export default App;
