import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './errorRoute';
import LobbySelection from './components/Lobby/LobbySelection';
import Lobby from './components/Lobby/Lobby';
import { lobbyDetailLoader, lobbyListLoader } from './components/Lobby/loaders';
import SuperTTT from './components/SuperTTT/SuperTTT';
import superTTTLoader from './components/SuperTTT/superTTTLoader';

const router = createBrowserRouter([
  {
    path: 'login',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'lobby',
    element: <LobbySelection />,
    loader: lobbyListLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: 'lobby/:lobbyId',
    element: <Lobby />,
    loader: lobbyDetailLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: 'superTTT/:gameId',
    element: <SuperTTT />,
    loader: superTTTLoader,
    errorElement: <ErrorPage />,
  },
]);

export default router;
