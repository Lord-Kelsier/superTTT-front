import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import { useFetch } from '../../shared/services/useFetch';
import { superTTTApiBaseUrl } from '../../shared/consts';
import { isStringAnInteger } from '../../utils/urlChecks';

type LobbyDetailParam = {
  lobbyId: string;
};
interface LobbyDetailArgs extends LoaderFunctionArgs {
  params: LobbyDetailParam;
}

export const lobbyDetailLoader: any = async ({ params }: LobbyDetailArgs) => {
  if (!isStringAnInteger(params.lobbyId)) {
    throw new Response('Not Found', { status: 404 });
  }
  const [data, statusCode] = await useFetch(
    `${superTTTApiBaseUrl}/api/v1/lobby/${params.lobbyId}/`,
    localStorage.getItem('accessToken')
  );
  if (statusCode === 200) {
    return data;
  } else if (statusCode === 401) {
    return redirect('/login');
  }
  console.log(data);
  throw new Response('Error', { status: statusCode });
};

export const lobbyListLoader: any = async () => {
  const [lobbies, statusCode] = await useFetch(
    `${superTTTApiBaseUrl}/api/v1/lobby/`,
    localStorage.getItem('accessToken')
  );
  if (statusCode === 200) {
    return lobbies;
  } else if (statusCode === 401) {
    return redirect('/login');
  }
  throw new Response('Error', { status: statusCode });
};
