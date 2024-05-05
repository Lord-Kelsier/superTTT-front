import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import { useFetch } from '../../shared/services/useFetch';
import { superTTTApiBaseUrl } from '../../shared/consts';
import { isStringAnInteger } from '../../utils/urlChecks';

type SuperTTTDetailParam = {
  gameId: string;
};
interface SuperTTTDetailArgs extends LoaderFunctionArgs {
  params: SuperTTTDetailParam;
}

const gameLoader: any = async ({ params }: SuperTTTDetailArgs) => {
  if (!isStringAnInteger(params.gameId)) {
    throw new Response('Not Found', { status: 404 });
  }
  const [data, statusCode] = await useFetch(
    `${superTTTApiBaseUrl}/api/v1/game/${params.gameId}/`,
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

export default gameLoader;
