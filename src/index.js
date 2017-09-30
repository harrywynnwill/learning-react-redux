import { createPost, editPost, setFilter } from './actions'
import {postsReducer} from "./reducers";
const initialState = []
const action = createPost("Dan", "New post")
const post = postsReducer(initialState, action)
console.log(post)
