import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/orders'>
          <Orders />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;