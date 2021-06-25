import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Firstpage from "./components/Firstpage";
import Secondpage from "./components/Secondpage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/firstpage" component={Firstpage} />
        <Route path="/secondpage" component={Secondpage} />
      </Switch>
    </Router>
  );
};

export default App;
