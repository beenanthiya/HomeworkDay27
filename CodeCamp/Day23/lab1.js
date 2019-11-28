function createStore(reducer, initialState) {
    let state = initialState
    let subscribers = []

    return {
        getState: () => state,
        dispatch: action => {
            state = reducer(state, action)
            subscribers.forEach(callback => {
                if (callback) {
                    callback()
                }
            })
        },
        subscribe: callback => {
            subscribers.push(callback)
            return subscribers.length - 1
        },
        unsubscribe: id => {
            subscribers[id] = null
        }
    }
}

function counterReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

let store = createStore(counterReducer, 0)
console.log(store.getState())
store.dispatch({
    type: 'INCREMENT'
})
store.dispatch({
    type: 'INCREMENT'
})
console.log(store.getState())
store.dispatch({
    type: 'DECREMENT'
})
console.log(store.getState())


function matchReducer(state, action) {
    switch (action.type) {
        case 'ยกกำลัง':
            return state ** action.pow
        case 'ไซน์':
            return Match.sin(state)
        case 'โคไซน์':
            return Match.cos(state)
        default:
            return state
    }
}

store = createStore(matchReducer, 20)
console.log(store.getState())
store.dispatch({
    type: 'ยกกำลัง',
    pow: 2
})
console.log(store.getState())
store.dispatch({
    type: 'ไซน์'
})
console.log(store.getState())
store.dispatch({
    type: 'โคไซน์'
})
console.log(store.getState())