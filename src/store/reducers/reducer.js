import ActionType from '../constant/constant';

const INITAIL_STATE = {
    todos:[]
}

const todoReducer = (state=INITAIL_STATE,action) => {

    switch(action.type){
        case ActionType.VIEW_TODO:
            return {todos:action.payload}
            break;
        case ActionType.ADD_TODO:
            let data = state.todos;
            return {todos:data}
            break;
        case ActionType.DELETE_TODO:
            let arr = state.todos;
            arr.splice(action.payload,1);
            return {...state,todos:arr}
            break;
        case ActionType.EDIT_TODO:
            let editArr = state.todos;
            editArr[action.payload.id].isEdit=true;
            return {todos:editArr}
            break;
        case ActionType.CLOSE_EDIT:
            let closeEditArr = state.todos;
            closeEditArr[action.payload.id].isEdit=false;
            return {todos:closeEditArr}
            break;
        default:
            return state;
    }

}

export default todoReducer;