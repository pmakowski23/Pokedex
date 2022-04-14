import { RouteProps } from 'react-router-dom';
import { RoutesDefinition } from './RoutesDefinition';

import { LandingPage } from 'pages/LandingPage';

export const guestRoutes: RouteProps[] = [
  {
    path: RoutesDefinition.landing,
    element: <LandingPage />
  }
];
