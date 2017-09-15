const createLogger = store => next => (action) => {
  let result;
  if (typeof window !== 'undefined') {
    console.info('%cdispatching', 'color:blue', action.type); // eslint-disable-line no-console
    result = next(action);
    console.log('%cnext state', 'color:blue', store.getState()); // eslint-disable-line no-console
  } else {
    console.info('dispatching \x1b[32m', action.type, '\x1b[0m'); // eslint-disable-line no-console
    result = next(action);
    const newState = store.getState();
    console.log('\x1b[35m', JSON.stringify(newState, 2, 2), '\x1b[0m:');
  }
  return result;
};

module.exports = createLogger;
