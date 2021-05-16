const load = (load = false, action) => {

    switch (action.type) {
        case 'true':
            console.log('true')
            load = true
            return load;
        case 'false':
            load = false
            return load;
        default:
            return load;
    }
}
export default load