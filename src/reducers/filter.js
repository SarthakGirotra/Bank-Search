const filter = (filter = "", action) => {

    switch (action.type) {
        case 'edit':
            filter = action.payload.toLowerCase()
            return filter;
        default:
            return filter;
    }
}
export default filter