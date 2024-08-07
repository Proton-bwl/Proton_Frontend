import { createBrowserRouter } from 'react-router-dom';
import Dashborad from '../dashboard';
import OnBoarding from '../onboarding';

const router = createBrowserRouter([
  {
    path: '',
    element: <OnBoarding />,
  },
  {
    path: '/dashboard',
    element: <Dashborad />,
  },
]);

export default router;
