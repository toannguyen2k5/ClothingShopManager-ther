import React, { Component, Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { routes_shop } from "../../../../../../../../../../../setting/router/routes_shop";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
export default class PageContent extends Component {
  render() {
    console.log("PageContent shop");
    return (
      <Suspense fallback={loading}>
        <Switch>
          {routes_shop.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <route.component
                      {...props}
                      {...this.props}
                      file_name={route.file_name}
                    />
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
