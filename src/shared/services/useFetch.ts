async function parseWithStatus(response: Response) {
  const statusCode = response.status;
  const formatted = await response.json();
  formatted.statusCode = statusCode;
  return formatted;
}
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
async function useFetch(url: string) {
  const response = await fetch(url);
  return parseWithStatus(response);
}
export { useFetchPost, useFetch };
