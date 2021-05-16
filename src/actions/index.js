import * as api from '../api';


export const getBanks = (city) => async (dispatch) => {

    try {
        const storage = localStorage.getItem(city)
        if (storage) {
            dispatch({ type: 'FETCH_ALL', payload: JSON.parse(storage) })
        }
        else {
            const { data } = await api.fetchBanks(city);
            dispatch({ type: 'FETCH_ALL', payload: data })
            localStorage.setItem(city, JSON.stringify(data))
        }
        dispatch({ type: 'false' })

    } catch (error) {
        console.log(error.message)

    }


}