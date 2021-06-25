import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Firstpage from "./components/Firstpage";
import Secondpage from "./components/Secondpage";
import Thirdpage from "./components/Thirdpage";

const App = () => {

  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Firstpage} />
        <Route path="/secondpage" component={Secondpage} />
        <Route path="/thirdpage" component={Thirdpage} />
      </Switch>
    </Router>
  );
};

export default App;
