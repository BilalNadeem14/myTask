const authReducer = {
  loggedIn: false,
  user: {
    email: 'asad@gmail.com',
    password: '12345678'
  },
  token: '', users: [
    {
      email: 'asad@gmail.com',
      password: '12345678'
    }
  ]
} //user is the currentUser
const mainReducer = {
  posts_data: [],
  loading: false,
};

let initialStates = {}

export default initialStates = {
  authReducer: authReducer,
  mainReducer
}
