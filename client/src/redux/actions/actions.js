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

export function getName(name){
    return async (dispatch)=>{
        try {
            const response= await axios.get(`http://localhost:3001/countries?name=${name}`)

            dispatch({
                type: 'GET_NAME',
                payload: response.data
            })
        } catch (error) {
            alert('Country not found 🙁')
        }
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

export function postActivity(payload){
    return async function(dispatch){
        const response= await axios.post('http://localhost:3001/activities', payload);
        return response;
    }

}

export function getActivity(){
    return async (dispatch)=>{
        try {
            const response= await axios.get('http://localhost:3001/activities')
            return dispatch({
                type: 'GET_ACTIVITY',
                payload: response.data
            })
        } catch (error) {
            alert('Activity not found 🙁');
            
        }
    }
}

export function deleteActivity(id){
    return async (dispatch)=>{
        try {
            return await axios.delete(`http://localhost:3001/activities/${id}`)
            .then( (activity)=> dispatch({
                type: 'DELETE_ACTIVITY',
                payload: activity.data
            }))
        } catch (error) {
            return error;
        }
    }
}