export default function userReducer (state="", action) {
    switch (action.type) {
      case "userUpdate": return action.payload.user;
      default:  return 'state User Reducer'
    }
  }