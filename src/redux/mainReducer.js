import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth39202Reducer from '../features/EmailAuth39202/redux/reducers';
import EmailAuth39199Reducer from '../features/EmailAuth39199/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth39202: EmailAuth39202Reducer,
EmailAuth39199: EmailAuth39199Reducer,

});