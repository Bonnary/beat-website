import GreenPage from "./Page/GreenPage";
import OragePage from "./Page/OragePage"
import GrayPage from "./Page/GrayPage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={GreenPage} exact />
        <Route path="/OragePage" component={OragePage} exact />
        <Route path="/GrayPage" component={GrayPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
