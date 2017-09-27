## SIMPLE REDUX LOGGER

Logs actions and state to the console on both server and desktop.

#### How to use?

```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
 
export default function (initialState = {}) {
  const middlewares = [thunk];
  if (process.env.NODE_ENV === 'development') {
    const logger = require('simple-redux-logger'); // eslint-disable-line global-require

    middlewares.push(logger());
  }


  return createStore(rootReducer, initialState, 
    applyMiddleware(...middlewares));
}
```  

#### Options

  `doStringify` - show entire state on server. Default is _true_ .If you would like to shrink the output set to _false_.  
  `doLogClient` - in case of using `redux-devtools-extension`, default _false_.   

Usage with options:  
```javascript
    middlewares.push(logger({ doStringify: false }));
```

### License

MIT