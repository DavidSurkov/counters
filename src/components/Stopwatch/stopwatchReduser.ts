interface ICounter {
    counter: number,
    numberStart: number,
    numberEnd: number,
    isSet: boolean,
}

const initialState: ICounter = {
    counter: 0,
    numberStart: 0,
    numberEnd: 0,
    isSet: false,
}
export const counterReducer = (state: ICounter = initialState, action: ActionType): ICounter => {
    switch (action.type) {
        case "SET-COUNTER": {
            return {...state, counter: action.value}
        }
        case "SET-NUMBER-START": {
            return {...state, numberStart: action.value}
        }
        case "SET-NUMBER-END": {
            return {...state, numberEnd: action.value}
        }
        case "SET-IS-SET": {
            return {...state, isSet: action.value}
        }
        default:
            return state
    }
}

export const setCounterAC = (value: number) => ({
    type: 'SET-COUNTER', value
} as const)
export const setNumberStartAC = (value: number) => ({
    type: 'SET-NUMBER-START', value
} as const)
export const setNumberEndAC = (value: number) => ({
    type: 'SET-NUMBER-END', value
} as const)
export const setIsSetAC = (value: boolean) => ({
    type: 'SET-IS-SET', value
} as const)
export type ActionType =
    ReturnType<typeof setCounterAC>
    | ReturnType<typeof setNumberStartAC>
    | ReturnType<typeof setNumberEndAC>
    | ReturnType<typeof setIsSetAC>;
