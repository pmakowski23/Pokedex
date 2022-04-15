import { RouteProps } from 'react-router-dom';
import { RoutesDefinition } from './RoutesDefinition';

import { LandingPage } from 'pages/LandingPage';
import { Navigation } from 'common/components/Navigation/Navigation';

interface Route extends RouteProps {
  name: string;
}

export const guestRoutes: Route[] = [
  {
    name: 'Home',
    path: RoutesDefinition.landing,
    element: (
      <>
        <Navigation />
        <LandingPage />
      </>
    )
  }
];
