async function parseWithStatus(response: Response) {
  const statusCode = response.status;
  const contentType = response.headers.get('Content-type');
  if (contentType && !/.*json.*/.test(contentType)) {
    return [{ detail: response.statusText }, statusCode];
  }
  const formatted = await response.json();
  return [formatted, statusCode];
}
/* eslint-disable-next-line -- Aqui body puede ser cualquier objeto por lo 
  que es necesario que exista el any */
async function useFetchPost(
  url: string,
  body: any,
  token?: string | null,
  method = 'POST'
) {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: '',
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const response = await fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  });
  return parseWithStatus(response);
}
async function useFetch(url: string, token?: string | null) {
  let response: Response;
  if (token === undefined || token === null) {
    response = await fetch(url);
  } else {
    response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  return parseWithStatus(response);
}
export { useFetch, useFetchPost };
