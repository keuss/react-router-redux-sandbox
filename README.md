# react-router-redux-sandbox

react-router-redux-sandbox

Inspired by
[https://github.com/reactjs/react-router-redux/tree/master/examples/basic](https://github.com/reactjs/react-router-redux/tree/master/examples/basic "https://github.com/reactjs/react-router-redux/tree/master/examples/basic")

Fake Online REST API : http://jsonplaceholder.typicode.com/ with json-server  https://github.com/typicode/json-server

# react version
```
0.14.7
```
# start
```
npm strat
```
# dependencies
```
"dependencies": {
  "babel-polyfill": "6.5.0",
  "es6-promise": "3.0.2",
  "isomorphic-fetch": "2.2.0",
  "lodash": "3.10.1",
  "react": "0.14.7",
  "react-dom": "0.14.7",
  "react-redux": "4.3.0",
  "react-router": "2.0.0",
  "redux": "3.2.1",
  "react-router-redux": "4.0.0",
  "redux-logger": "2.1.4",
  "redux-thunk": "1.0.0"
}
```

# test front
```
npm run serve
```

TEST HTTP (need python for SimpleHTTPServer) : http://localhost:8000/

# test back
```
npm run run-back
```

# Fake bd service

File `db.json` in `fakedb` folder

Endpoints :

 - http://localhost:3000/users
 - http://localhost:3000/accounts
 - http://localhost:3000/profile

Use for instance (GET) :

 - http://localhost:3000/users/1
 - http://localhost:3000/accounts/2
 - http://localhost:3000/users?name=mike&pwd=pass
