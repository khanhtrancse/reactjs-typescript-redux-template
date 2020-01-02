import { Login } from '../pages/Login';
import { routeName } from './route-name';
import { ComponentClass, FunctionComponent } from 'react';

export interface RouteConfig {
  path: string;
  component: ComponentClass | FunctionComponent;
}

export const authRoutes: RouteConfig[] = [
  {
    path: routeName.login,
    component: Login,
  },
];
