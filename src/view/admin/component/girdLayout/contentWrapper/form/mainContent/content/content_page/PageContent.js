import React, { Component, Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import {
  routes_admin,
} from "../../../../../../../../../setting/router/routesPage";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
export default class PageContent extends Component {
  render() {
    return (
      <Suspense fallback={loading}>
        <Switch>
          {routes_admin.map((route, idx) => {
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
      </Suspense>
    );
  }
}
