import { createBrowserRouter } from 'react-router-dom';
import Dashborad from '../dashboard';
import OnBoardiing from '../onboarding';

const router = createBrowserRouter([
  {
    path: '',
    element: <OnBoardiing />,
  },
  {
    path: '/dashboard',
    element: <Dashborad />,
  },
]);

export default router;
