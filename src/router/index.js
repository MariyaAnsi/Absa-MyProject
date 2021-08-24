import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { AuthProvider } from "../pages/Auth";

import Header from "../components/Header";
//import Footer from "../components/Footer";
//import Dashboard from '../pages/Dashboard.jsx';



import routes from "./config";
import GlobalStyles from "../globalStyles";
//import { Footer } from "antd/lib/layout/layout";

const Router = () => {
  return (
    <AuthProvider>
    <Suspense fallback={null}>
      <GlobalStyles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
     
      </Switch>
     
    </Suspense>
    </AuthProvider>
  );
};

export default Router;
