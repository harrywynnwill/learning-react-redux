import { CREATE_POST, EDIT_POST, SET_FILTER } from './action-types'
export function postsReducer(state = [], action){
    switch(action.type){
        case CREATE_POST: {
            const { type, ...post } = action
            return [...state, post] // ...state is a spread operator, same as doing return state.concat([ post ]) - immutable
        }
        case EDIT_POST: {
            const {type, id, ...newPost} = action
            return state.map((oldPost, index) => {
                action.id === index ? { ...oldPost, ...newPost } : oldPost
            }
            )
        }
        case SET_FILTER: {
            return "hello2"
        }
        default: {
            return state
        }
    }
}