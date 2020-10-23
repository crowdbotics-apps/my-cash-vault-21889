import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn25158259Reducer from '../features/SignIn25158259/redux/reducers'
import SignIn26158258Reducer from '../features/SignIn26158258/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn25158259: SignIn25158259Reducer,
SignIn26158258: SignIn26158258Reducer,

});