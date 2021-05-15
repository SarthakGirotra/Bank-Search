const fav = (fav = JSON.parse(localStorage?.getItem('favs')), action) => {

    switch (action.type) {
        case 'add':
            let data = JSON.parse(localStorage?.getItem('favs'))
            if (!data) {
                data = {}
            }
            if (data.hasOwnProperty(action.payload)) {
                delete data[action.payload]
            }
            else {
                data[action.payload] = true
            }
            fav = data
            localStorage.setItem('favs', JSON.stringify(data))


            return fav
        default:
            return fav
    }
}
export default fav