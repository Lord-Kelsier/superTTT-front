import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './errorRoute';
import LobbySelection from './components/Lobby/LobbySelection';

const router = createBrowserRouter([
  {
    path: 'login',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'lobby',
    element: <LobbySelection />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
