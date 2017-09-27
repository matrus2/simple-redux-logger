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

  **`doStringify`** - it is for server logging to show entire state. Default is _true_ .If you would like to shrink the output set to _false_ 
  
  **`doLogClient`** - default _false_, if you don't use `redux-devtools-extension` for chrome you can set this options to _true_

######Usage with options:

```javascript
    middlewares.push(logger({ doStringify: false }));

```


####License

MIT