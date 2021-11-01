import { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/index";
import ShopPage from "./pages/ShopPage/index.js";
import CheckOutPage from "./pages/CheckOutPage/index";
import Header from "./components/Header/index";
import SignInSignUpPage from "./pages/SignInSignUpPage/index";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "./redux/User/userSelector";
import { checkUserSession } from "./redux/User/userAction";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route
          path="/sign-in"
          render={() =>
            currentUser ? (
              <Redirect
                to={{
                  pathname: "/",
                }}
              />
            ) : (
              <SignInSignUpPage />
            )
          }
        />
        <Route exact path="/check-out" component={CheckOutPage} />

        <Route
          path="*"
          render={(routeProps) => (
            <h1>
              Not Found <br />
              {JSON.stringify(routeProps)}
            </h1>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
