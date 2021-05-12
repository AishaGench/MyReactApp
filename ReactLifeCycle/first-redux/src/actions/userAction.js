export const UPDATE_USER = 'UPDATE_USER'
export function updateUser(newUserName){
    return{type:UPDATE_USER, payload:{user:newUserName}}
}