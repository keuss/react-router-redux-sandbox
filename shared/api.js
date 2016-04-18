import fetch from 'isomorphic-fetch'

class Api {

  constructor(basePath) {
    this.basePath = basePath
    console.log('HELLO THIS IS CONSTRUCTOR')
  }

  // Copied from Qajax
  // Serialize a map of properties (as a JavaScript object) to a query string
  serializeQuery(paramsObj) {
    var k, params = []
    for (k in paramsObj) {
      if (paramsObj.hasOwnProperty(k) && paramsObj[k] !== undefined) {
        params.push(encodeURIComponent(k) + '=' + encodeURIComponent(paramsObj[k]))
      }
    }
    return params.join('&')
  }

  encodeUrl(path, params, queryParams) {
    return this.basePath + '/' + path +
    (params ? '/' + params : '' ) +
    (queryParams ? '?' + this.serializeQuery(queryParams) : '')
  }

  filterEmpty(object) {
    return Object.keys(object).length === 0 ? Promise.reject(object) : Promise.resolve(object)
  }

  filterSuccess(httpResponse) {
    const status = httpResponse.status
    return (status >= 200 && status < 300 || status === 304) ?
    Promise.resolve(httpResponse) :
    Promise.reject(httpResponse)
  }

  // Returns a Promise with the response
  getJSON(path, params, queryParams) {
    return fetch(this.encodeUrl(path, params, queryParams), { credentials: 'same-origin' })
    .then(this.filterSuccess)
    .then(response => response.json())
  }

  // Generic post, returns a Promise with the response
  post(path = '', params, extraHeaders = {}) {

    const headerProps = Object.assign({}, {'Content-Type': 'application/json'}, extraHeaders)
    const separator = (path.length && path[0] === '/') ? '' : '/'

    return fetch(`${this.basePath}${separator}${path}`, {
      method: 'POST',
      headers: new Headers(headerProps),
      body: JSON.stringify(params),
      credentials: 'same-origin'
    })
    .then(this.filterSuccess)
    .then(response => response.json())
  }
}

// Create instance
/*let instances = {
  // basePath is '/api'
  // add other api if needed '/...'
  api: new Api('/')
}*/
//console.log(instances.api)
const api = new Api('http://localhost:3000')
export default api
