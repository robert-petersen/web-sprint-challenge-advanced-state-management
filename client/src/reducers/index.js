import { GET_SMURFS_START, GET_SMURFS_SUCCESS, GET_SMURFS_FAIL, POST_SMURFS_START, POST_SMURFS_SUCCESS, POST_SMURFS_FAIL } from "./../actions/index";

export const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  postingSmurf: false,
  error: "",
}

export const reducer = ( state = initialState, action)=>{
  switch(action.type){
    case GET_SMURFS_START :
      return ({
        ...state,
        gettingSmurfs: true,
        error: "none"
      });
    case GET_SMURFS_SUCCESS :
      return ({
        ...state,
        smurfs: action.payload,
        gettingSmurfs: false,
        error: "none"
      });
    case GET_SMURFS_FAIL :
      return ({
        ...state,
        gettingSmurfs: false,
        error: action.payload
      });
    case POST_SMURFS_START :
      return ({
        ...state,
        postingSmurf: true,
        error: "none"
      });
    case POST_SMURFS_SUCCESS :
      return ({
        ...state,
        postingSmurf: false,
        error: "none"
      });
    case POST_SMURFS_FAIL :
      return ({
        ...state,
        postingSmurf: false,
        error: action.payload
      });
    default :
      return state;
  }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary