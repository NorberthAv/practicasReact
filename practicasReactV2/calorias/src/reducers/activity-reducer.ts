import { Activity } from "../types"

export type ActivityActions = 
   | { type: 'save-activity', payload: { newActivity: Activity } }
   | { type: 'set-activeId', payload: { id: Activity['id'] } };

type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}

export const initialState: ActivityState = {
    activities: [],
    activeId: ''
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if (action.type === 'save-activity') {
        // Logic to handle the state
        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
    }

    if(action.type === 'set-activeId') {
        // Logic to handle the statereturn
        return {
            ...state,
            activeId: action.payload.id
        }
    }
    // Add other action handlers here
    return state;
}