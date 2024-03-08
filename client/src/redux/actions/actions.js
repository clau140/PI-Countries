import axios from 'axios';

export function getCountries() {
    return async (dispatch)=>{
        const response= await axios.get('http://localhost:3001/countries/')
        dispatch({
            type: 'GET_COUNTRIES',
            payload: response.data
        })

    }
}

export function getDetail(id){
    return async (dispatch)=>{
        try {
            if(id){
                const response = await axios.get(`http://localhost:3001/countries/${id}`);
                dispatch({
                    type: 'GET_DETAIL',
                    payload: response.data
                })
            } else{
                dispatch({
                    type: 'GET_DETAIL',
                    payload: []
                })
            }
        } catch (error) {
            return error
        }

    }
}

export function postCountry(payload){
    return async function(dispatch){
        const response= await axios.post('http://localhost:3001/countries', payload);
        return response;
    }

}