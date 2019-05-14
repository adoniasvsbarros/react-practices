const INITIAL_STATE = {
    description: 'read the book',
    list: [{
        _id: 1,
        description: 'pay my bills',
        done: true
    },{
        _id: 2,
        description: 'call claire',
        done: false
    },{
        _id: 3,
        description: 'find the books',
        done: true
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default:
            return state
    }
}