const initialState = {
    allCountries: [],
    detail: [],
    population: [],
    allContinents: [],
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
      case 'BY_ALPHABETICAL_ORDER': {

        const orderCountries = action.payload === 'Asc' ?
        state.allCountries.sort((a, b)=>{
          if(a.name > b.name){
            return 1;
          }
          if(b.name > a.name){
            return -1;
          }
          return 0;
        }) :

        state.allCountries.sort((a,b)=>{
          if(a.name > b.name){
            return -1
          }
          if(b.name > a.name){
            return 1
          }return 0;
        })

        return {
          ...state,
          allCountries: orderCountries
        }
      }
      case 'BY_POPULATION_ORDER': {

        const orderPopulation= action.payload === 'Min'?
        state.allCountries.sort((a, b)=>{
          if(a.population > b.population){
            return 1;
          }
          if(b.population > a.population){
            return -1;
          }
          return 0;
        }) :
        state.allCountries.sort((a, b)=>{
          if(a.population > b.population){
            return -1;
          }
          if(b.population > a.population){
            return 1;
          }
          return 0;

        })

        return{
          ...state,
          allCountries: orderPopulation

        }
      }
      case 'FILTER_BY_CONTINENT': {
        const allContinents = state.allContinents;
        return{
          ...state,

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