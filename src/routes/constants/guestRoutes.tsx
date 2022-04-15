import { RouteProps } from 'react-router-dom';
import { RoutesDefinition } from './RoutesDefinition';

import { LandingPage } from 'pages/LandingPage';
import { Navigation } from 'common/components/Navigation/Navigation';
import { FightPage } from 'pages/FightPage';

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
  },
  {
    name: 'Fight',
    path: RoutesDefinition.fight,
    element: (
      <>
        <Navigation />
        <FightPage />
      </>
    )
  }
];
