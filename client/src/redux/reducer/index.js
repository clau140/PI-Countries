const initialState = {
    allCountries: [],
    detail: []
  };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_COUNTRIES': {
        return {
          ...state,
          allCountries: action.payload,
        };
      }
      case 'GET_DETAIL': {
        return{
          ...state,
          detail: action.payload
        }
      }
      case 'POST_COUNTRY':
        return {
          ...state,
        }

      default:
      return state;
    }
}

export default rootReducer;