import {CREATE_POST} from './action-types'
function createPost (user, text){
  return {
    type: CREATE_POST,
    user: user,
    text: text
  }
}
console.log(createPost("Dan", "Hello World!"))
