import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  // eslint-disable-next-line -- error es de tipo unknown
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}