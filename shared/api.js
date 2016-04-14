import fetch from 'isomorphic-fetch'

//TODO add post


//For now it only concats a URL
//TODO actually encode the url
function encodeUrl(path, params, queryParams) {
  return this.basePath + '/' + path +
  (params ? '/' + params : '' ) +
  (queryParams ? '?' + this.serializeQuery(queryParams) : '');
}

function filterEmpty(object) {
  return Object.keys(object).length === 0 ? Promise.reject(object) : Promise.resolve(object);
}

function filterSuccess(httpResponse) {
  const status = httpResponse.status;
  return (status >= 200 && status < 300 || status === 304) ?
    Promise.resolve(httpResponse) :
    Promise.reject(httpResponse);
}

//Returns a Promise with the response
export function getJSON(path, params, queryParams) {
  return fetch(this.encodeUrl(path, params, queryParams), { credentials: 'same-origin' })
  .then(this.filterSuccess)
  .then(response => response.json());
}
