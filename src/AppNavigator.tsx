import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Session from './Pages/Session';
import NotFound from './Pages/NotFound';

interface RouteType {
  path: string;
  component: React.ElementType;
}

const routes: RouteType[] = [
  { path: '/', component: Home },
  { path: '/:id', component: Session },
];

const AppNavigator: React.FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        {routes.map((route: RouteType) => (
          <Route
            key={`${route.path}`}
            exact
            path={route.path}
            render={props => <route.component {...props} />}
          />
        ))}
      </Switch>
      <Route exact path="/:id/*" render={props => <NotFound {...props} />} />
    </>
  );
};

export default AppNavigator;
