import { StateType } from "../App";



// type ActionType = {
//     | 'SELECT_PLANT' | 'PICK_ADDONS' ,
//     payload:  | 0 | 1 | 2 | [boolean, boolean, boolean]
// }   

export type ActionType = {
   type: 'ADD_PERSONAL_INFORMATION'; payload: {  name: string, email: string, phone: string
   }  
} | {
  type: 'SELECT_PLANT'; payload: 0 | 1 | 2;
} | {type: 'PICK_ADDONS'; payload: 0 | 1 | 2;} | {type: 'CHANGE_SUBSCRIPTION'; payload: boolean;}

export type ReducerType = (state: StateType, action: ActionType) => StateType


 const reducer : ReducerType = (state : StateType, action : ActionType) => {
    const { type, payload } = action;
  switch (type) {
    case 'ADD_PERSONAL_INFORMATION':
      return {
        ...state, ...payload
      };
    case 'SELECT_PLANT':
      return {
        ...state, plan: payload
      };
    case 'PICK_ADDONS':
        return {
            ...state, addons: payload === 0 ? [!state.addons[0],state.addons[1],state.addons[2]] : payload === 1 ? [state.addons[0],!state.addons[1],state.addons[2]] : [state.addons[0],state.addons[1],!state.addons[2]]
          };
    case  'CHANGE_SUBSCRIPTION':
      return {...state, isYearly: payload}
    default:
      return state;
  }
}

export default reducer;