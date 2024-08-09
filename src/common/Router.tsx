import { Navigate, createBrowserRouter } from 'react-router-dom';
import MainPage from '../mainPage';
import OnBoarding from '../onboarding';
import TradeBots from '../mainPage/pages/TradeBots';
import Dashboard from '../mainPage/pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/onboarding',
    element: <OnBoarding />,
  },
  {
    path: '/',
    element: <Navigate to='/onboarding' replace />,
  },
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: 'tradeBots',
        element: <TradeBots />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
