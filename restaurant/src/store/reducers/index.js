import { combineReducers } from 'redux';

import waiters from './waiters';
import tables from './tables';

export default combineReducers({
    waiters,
    tables
});
