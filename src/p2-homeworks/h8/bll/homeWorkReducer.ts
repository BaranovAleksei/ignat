import {initialPeople} from '../HW8'

export type ItemType = {
    _id: number
    name: string
    age: number
}
type sortType = {
    type: 'SORT'
    payload: 'up' | 'down'
}
type checkType = {
    type: 'CHECK'
    payload: number
}

type ActionType = sortType | checkType

export const homeWorkReducer = (state: Array<ItemType> = initialPeople, action: ActionType): Array<ItemType> => {
    switch (action.type) {
        case "SORT": {
            let stateCopy = [...state]
            if (action.payload === 'up') {
                stateCopy = state.sort((a,b) => (a.name < b.name) ? -1 : 0)
            }
            if (action.payload === 'down') {
                stateCopy = state.sort((a,b) => (a.name > b.name) ? -1 : 0)
            }

            return [...stateCopy]
        }
        case "CHECK": {
            let stateCopy = [...state]
            stateCopy = state.filter( p => p.age >= action.payload)

            return stateCopy
        }
        default: return state
    }
};

// export const sortAC = (payload: 'up' | 'down'): sortType => {
//      return {type: 'SORT' , payload }
// }
// export const checkAC = (payload: number): checkType => {
//     return {type: 'CHECK', payload}
// }