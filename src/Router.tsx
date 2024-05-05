import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './errorRoute';
import LobbySelection from './components/Lobby/LobbySelection';
import Lobby from './components/Lobby/Lobby';
import { lobbyDetailLoader, lobbyListLoader } from './components/Lobby/loaders';
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
]);

export default router;
