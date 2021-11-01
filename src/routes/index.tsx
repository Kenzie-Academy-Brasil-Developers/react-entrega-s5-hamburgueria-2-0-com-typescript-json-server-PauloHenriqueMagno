import { Switch, Route } from "react-router-dom";
import HeaderComponent from "../components/Header";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import Signup from "../pages/Signup";

const Routes = () => {
    return (
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/signup">
                <Signup />
            </Route>
            <Route path="/">
                <HeaderComponent />
                <Home />
            </Route>
        </Switch>
    )
};

export default Routes;