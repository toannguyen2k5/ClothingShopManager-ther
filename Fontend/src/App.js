import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./setting/reducer/actions";
import { urlapi } from "./setting/store/const";
// import getMAC from "getmac";
const Page = React.lazy(() => import("./urlMapping/TheLayout"));
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/404"
              name="Page 404"
              render={() => <Page {...this.props} />}
            />
            <Route
              exact
              path="/*"
              name="Page"
              render={() => <Page {...this.props} />}
            />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    state_data: state.changeState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
