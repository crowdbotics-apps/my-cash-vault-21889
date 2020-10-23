import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth2158262Reducer from '../features/EmailAuth2158262/redux/reducers';
import SignIn24158260Reducer from '../features/SignIn24158260/redux/reducers'
import SignIn25158259Reducer from '../features/SignIn25158259/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth2158262: EmailAuth2158262Reducer,
SignIn24158260: SignIn24158260Reducer,
SignIn25158259: SignIn25158259Reducer,

});