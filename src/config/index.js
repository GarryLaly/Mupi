export const baseUrl = 'https://imdb-api.com/en/API/';
export const formatAPIUrl = (url, params) => {
  return `${url}/k_zwbamiz7${params ? `/${params}` : ''}`;
};
