import { RouteProps } from 'react-router-dom';
import { RoutesDefinition } from './RoutesDefinition';

import { LandingPage } from 'pages/LandingPage';
import { FightPage } from 'pages/FightPage';
import { CustomizePage } from 'pages/CustomizePage';

import { Navigation } from 'common/components';

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
  },
  {
    name: 'Customize',
    path: RoutesDefinition.customize,
    element: (
      <>
        <Navigation />
        <CustomizePage />
      </>
    )
  }
];
