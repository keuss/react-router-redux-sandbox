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

# Fake backend JSON service

File `db.json` in `fakedb` folder

Endpoints :

 - http://localhost:3000/users
 - http://localhost:3000/accounts
 - http://localhost:3000/profile

Use for instance (GET) :

 - http://localhost:3000/users/1
 - http://localhost:3000/accounts/2
 - http://localhost:3000/users?name=mike&pwd=pass

 ```
 {
   "users": [
     {
       "id": 1,
       "name": "admin",
       "pwd": "admin"
     },
     {
       "id": 2,
       "name": "mike",
       "pwd": "pass"
     }
   ],
   "profile": {
     "user": {
       "id": "fake-user-id",
       "lang": "fr",
       "email": "mike@gmail.com",
       "firstName": "mike",
       "name": "that mike"
     },
     "permissions": [
       "READ_ACCOUNT",
       "UPDATE_ACCOUNT"
     ]
   },
   "accounts": [
     {
       "id": 1,
       "name": "Compte principal",
       "balance": 20,
       "expenses": [
         {
           "id": 1,
           "date": "10/04/2016",
           "issuer": "Spotify",
           "description": "Abonnement",
           "value": -9.99
         },
         {
           "id": 2,
           "date": "12/04/2016",
           "issuer": "Amazon.fr",
           "description": "Remboursement retour produit",
           "value": 250
         },
         {
           "id": 3,
           "date": "16/04/2016",
           "issuer": "Steam",
           "description": "Achat Dark Souls III",
           "value": -59.99
         }
       ]
     },
     {
       "id": 2,
       "name": "Plan épargne logement",
       "balance": 8000,
       "expenses": [
         {
           "id": 1,
           "date": "16/02/2016",
           "issuer": "Moi",
           "description": "Versement automatique",
           "value": 1000
         },
         {
           "id": 2,
           "date": "16/03/2016",
           "issuer": "Moi",
           "description": "Versement automatique",
           "value": 1000
         },
         {
           "id": 3,
           "date": "16/04/2016",
           "issuer": "Moi",
           "description": "Versement automatique",
           "value": 1000
         }
       ]
     },
     {
       "id": 3,
       "name": "Prêt croissants",
       "balance": -200,
       "expenses": [
         {
           "id": 1,
           "date": "10/03/2016",
           "issuer": "Moi",
           "description": "Ouverture du prêt",
           "value": 20
         },
         {
           "id": 2,
           "date": "12/03/2016",
           "issuer": "Boulangerie XSang",
           "description": "Achat",
           "value": -240
         },
         {
           "id": 3,
           "date": "10/04/2016",
           "issuer": "Moi",
           "description": "Versement échéance prêt",
           "value": 20
         }
       ]
     }
   ]
 }
 ```
