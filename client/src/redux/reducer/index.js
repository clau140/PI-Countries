const initialState = {
    allCountries: [],
    countries: [],
    detail: [],
    allActivities: [],
    activity: []
  };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_COUNTRIES': {
        return {
          ...state,
          countries: action.payload,
          allCountries: action.payload,
          allActivities: action.payload

        };
      }
      case 'GET_NAME': {
        return {
          ...state,
          countries: action.payload
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
        state.countries.sort((a, b)=>{
          if(a.name > b.name){
            return 1;
          }
          if(b.name > a.name){
            return -1;
          }
          return 0;
        }) :

        state.countries.sort((a,b)=>{
          if(a.name > b.name){
            return -1
          }
          if(b.name > a.name){
            return 1
          }return 0;
        })

        return {
          ...state,
          countries: orderCountries
        }
      }
      case 'BY_POPULATION_ORDER': {

        const orderPopulation= action.payload === 'Min'?
        state.countries.sort((a, b)=>{
          if(a.population > b.population){
            return 1;
          }
          if(b.population > a.population){
            return -1;
          }
          return 0;
        }) :
        state.countries.sort((a, b)=>{
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
          countries: orderPopulation

        }
      }
      case 'FILTER_BY_CONTINENT': {
        const allCountries = state.allCountries;
        const filterContinent= action.payload === 'All'?
        allCountries :
        allCountries.filter(e => e.continent === action.payload)
       

        return{
          ...state,
          countries: filterContinent
          
        }
        
      }
      case 'GET_ACTIVITY': {
        return {
          ...state,
          activity: action.payload,
          

        }
      }
      case 'POST_ACTIVITY':
        return {
          ...state,
        }
        case 'FILTER_BY_ACTIVITY':
          
          return{
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