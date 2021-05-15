const banks = (banks = [], action) => {

    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        default:
            return banks;
    }
}
export default banks