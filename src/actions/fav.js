export const addFav = (ifsc) => (dispatch) => {
    dispatch({ type: 'add', payload: ifsc })
}
