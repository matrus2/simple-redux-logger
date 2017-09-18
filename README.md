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

    middlewares.push(logger);
  }


  return createStore(rootReducer, initialState, 
    applyMiddleware(...middlewares));
}
```  