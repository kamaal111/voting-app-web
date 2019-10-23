import React from 'react';
import { Switch, Route } from 'react-router';

import Home from './Pages/Home';

interface RouteType {
  path: string;
  component: React.ElementType;
}

const routes: RouteType[] = [{ path: '/', component: Home }];

const Routes: React.ElementType = (route: RouteType) => {
  return (
    <Route
      exact
      path={route.path}
      render={props => <route.component {...props} />}
    />
  );
};

const AppNavigator: React.FC = () => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Routes key={i} {...route} />
      ))}
    </Switch>
  );
};

export default AppNavigator;
