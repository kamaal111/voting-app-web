import React from 'react';
import { Switch, Route } from 'react-router';

import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

interface RouteType {
  path: string;
  component: React.ElementType;
}

const routes: RouteType[] = [{ path: '/', component: Home }];

const Routes: React.ElementType = (route: RouteType): JSX.Element => {
  return (
    <Route
      exact
      path={route.path}
      render={props => <route.component {...props} />}
    />
  );
};

const AppNavigator: React.FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        {routes.map((route: RouteType, i: number) => (
          <Routes key={i} {...route} />
        ))}
      </Switch>
      <Route exact path={'/:id/*'} render={props => <NotFound {...props} />} />
    </>
  );
};

export default AppNavigator;
