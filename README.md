## SIMPLE REDUX LOGGER

Logs actions and state to the console on both server and desktop.

#### How to use?

```javascript
import logger from 'simple-redux-logger';
  
export default function (initialState = {}) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, logger));
}

```  