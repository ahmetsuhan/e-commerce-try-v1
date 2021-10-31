import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/index";
import ShopPage from "./pages/ShopPage/index.js";
import CheckOutPage from "./pages/CheckOutPage/index";
import Header from "./components/Header/index";
import SignInSignUpPage from "./pages/SignInSignUpPage/index";
import React from "react";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/User/userSelector";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/User/userAction";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;

    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route
            path="/sign-in"
            render={() =>
              this.props.currentUser ? (
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
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
