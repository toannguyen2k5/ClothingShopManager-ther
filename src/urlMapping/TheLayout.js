import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { extractcode } from "../setting/reducer/reducer";

import {
  routes_admin,
  routesPage,
  routes_sector,
} from "../setting/router/routesPage";
import { urlapi } from "../setting/store/const";
import PageWrapperAdmin from "../view/admin/component/girdLayout/PageWrapper";
import LayoutHome from "./LayoutHome";

const loading = <div></div>;

export default class TheLayout extends Component {
  async componentDidMount() {
    // try {
    //   const req = {
    //     method: "GET",
    //     headers: { "Content-Type": "application/json" },
    //   };
    //   const response = await fetch(`${urlapi}/getAddress`, req);
    //   const { mac } = await response.json();
    //   this.props.actions.set_code_build_state(mac);
    // } catch (error) {
    //   console.log(error);
    // }
  }
  render() {
    if (
      localStorage.getItem("state_data") != undefined &&
      localStorage.getItem("state_data") != null &&
      localStorage.getItem("state_data") != "" &&
      extractcode(localStorage.getItem("state_data")) !=
        JSON.stringify(this.props.state_data)
    ) {
      console.log(extractcode(localStorage.getItem("state_data")));
      console.log(this.props.state_data);
      this.props.actions.revert_state();
    }
    return (
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            key={0}
            path={"/"}
            exact={true}
            name={""}
            render={(props) => <LayoutHome {...props} {...this.props} />}
          />
          <Route
            key={0}
            path={"/home"}
            exact={true}
            name={""}
            render={(props) => <LayoutHome {...props} {...this.props} />}
          />
          {routes_admin.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <PageWrapperAdmin {...props} {...this.props} />
                  )}
                />
              )
            );
          })}
          {routes_sector.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} {...this.props} />
                    </>
                  )}
                />
              )
            );
          })}
          {routesPage.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <route.component {...props} {...this.props} />
                  )}
                />
              )
            );
          })}
          <Redirect to="/not_found/404" />
        </Switch>
      </React.Suspense>
    );
  }
}
