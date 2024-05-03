async function parseWithStatus(response: Response) {
  const statusCode = response.status;
  const formatted = await response.json();
  formatted.statusCode = statusCode;
  return formatted;
}
/* eslint-disable-next-line -- Aqui body puede ser cualquier objeto por lo 
  que es necesario que exista el any */
async function useFetchPost(url: string, body: any) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
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
  const parsedResponse = await parseWithStatus(response);
  return parsedResponse;
}
export { useFetch, useFetchPost };
