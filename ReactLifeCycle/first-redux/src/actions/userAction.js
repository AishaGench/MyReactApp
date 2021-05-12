export const UPDATE_USER = 'UPDATE_USER'

export function updateUser(newUserName){
    return{type:UPDATE_USER, payload:{user:newUserName}}
}

export const ADD_USER = "ADD_USER"
export function addUser(newUserName){
    return {type: ADD_USER, payload:{user:newUserName}}
}
export const DELETE_USER = "DELETE_USER"
export function deleteUser(){
    return {type: DELETE_USER}
}