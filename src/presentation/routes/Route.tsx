import React from 'react';
import {
  RouteProps as RouteDOMProps,
  Route as RouteDOM,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../context/hooks';

type RouteProps = Props & RouteDOMProps;

type Props = {
  isPrivate?: boolean;
  component: React.FunctionComponent;
};

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...props
}) => {
  const { user } = useAuth();

  return (
    <RouteDOM
      {...props}
      render={({ location }) => {
        if (isPrivate && !user)
          return <Redirect to={{ pathname: '/', state: { from: location } }} />;
        if (!isPrivate && user)
          return (
            <Redirect
              to={{ pathname: '/dashboard', state: { from: location } }}
            />
          );
        return <Component />;
      }}
    />
  );
};

export default Route;
