const authReducer = {
  loggedIn: false,
  user: null,
  token: null,
  userId: null,
} //user is the currentUser
const mainReducer = {
  food_data: [],
  loading: false,
};

let initialStates = {}

export default initialStates = {
  authReducer: authReducer,
  mainReducer
}
