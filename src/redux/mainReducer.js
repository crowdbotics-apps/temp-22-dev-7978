import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth39199Reducer from '../features/EmailAuth39199/redux/reducers';
import EmailAuth39195Reducer from '../features/EmailAuth39195/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth39199: EmailAuth39199Reducer,
EmailAuth39195: EmailAuth39195Reducer,

});