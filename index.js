const defaultOptions = {
  doStringify: true,
  doLogClient: false,
};


const createLogger = (options = {}) => ({ getState }) => next => action => {
  let result;
  options = Object.assign({}, defaultOptions, options);
  if (typeof window !== 'undefined' && options.doLogClient) {
    console.info('%cdispatching', 'color:blue', action.type); // eslint-disable-line no-console
    result = next(action);
    console.log('%cnext state', 'color:blue', getState()); // eslint-disable-line no-console
  } else if (typeof window === 'undefined') {
    console.info('dispatching \x1b[31m', action.type, '\x1b[0m'); // eslint-disable-line no-console
    result = next(action);
    const newState = getState();
    if (options.doStringify) {
      console.log('\x1b[37m', JSON.stringify(newState, 2, 2), '\x1b[0m:');
    } else {
      console.log('\x1b[37m', newState, '\x1b[0m:');
    }
  } else {
    result = next(action);
  }
  return result;
};

module.exports = createLogger;
