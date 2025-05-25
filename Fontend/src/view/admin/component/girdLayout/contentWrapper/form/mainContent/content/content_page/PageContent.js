import React, { Component, Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { routes_admin } from "../../../../../../../../../setting/router/routesPage";
import { extractcode } from "../../../../../../../../../setting/reducer/reducer";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
export default class PageContent extends Component {
  render() {
    const state_data = JSON.parse(extractcode(localStorage.getItem("state_data")));
    
    if (state_data.user_info!=null && state_data.user_info.role_level >= 5)// "admin")
      return (
        <Suspense fallback={loading}>
          <Switch>
            {routes_admin.filter(route=>state_data.user_info.role_level>=route.role_level).map((route, idx) => {
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
    else
      return (
        <Suspense fallback={loading}>
          <Switch>
            <Redirect to="/not_found/404" />
          </Switch>
        </Suspense>
      );
  }
}
