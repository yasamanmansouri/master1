// Constants
import {
  SAVE_ROUND,
  SET_DIMENSION,
  GO_TO_USER_ID_INPUT
} from "../constants/ActionTypes.js";

const initialState = {
  dimension: ""
};

export const results = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DIMENSION:
      return {
        ...state,
        dimension: action.payload.dimension
      };
    case SAVE_ROUND: {
      const dimensionProperty = action.payload.dimensionProperty;
      return {
        ...state,
        [action.payload.round]: {
          results: {
            clicks: action.payload.clicks,
            hits: action.payload.hits,
            misses: action.payload.misses
          },
          [state.dimension]: dimensionProperty
        }
      };
    }
    case GO_TO_USER_ID_INPUT:
      return initialState;
    default:
      return { ...state };
  }
};

export default results;
