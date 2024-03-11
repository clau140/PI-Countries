const initialState = {
    allCountries: [],
    detail: [],
    allActivities: []
  };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_COUNTRIES': {
        return {
          ...state,
          allCountries: action.payload,
        };
      }
      case 'GET_NAME': {
        return {
          ...state,
          allCountries: action.payload
        }
      }
      
      case 'GET_DETAIL': {
        return{
          ...state,
          detail: action.payload
        }
      }
      
      case 'GET_ACTIVITY': {
        return {
          ...state,
          allActivities: action.payload

        }
      }
      case 'POST_ACTIVITY':
        return {
          ...state,
        }
      case 'DELETE_ACTIVITY':
        return{
          ...state,
        }

      default:
      return state;
    }
}

export default rootReducer;