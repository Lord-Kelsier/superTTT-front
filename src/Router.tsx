import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './errorRoute';
import LobbySelection from './components/Lobby/LobbySelection';
import Board from './components/Board/Board';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'lobby',
    element: <LobbySelection />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'game',
    element: <Board />,
  },
]);

export default router;
