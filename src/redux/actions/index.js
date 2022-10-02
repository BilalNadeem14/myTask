import api from "../../Api";
import { endpoints } from "../../Api/configs";
import types from "./actionTypes";


const signup = (data) => {
  return async (dispatch) => {
    dispatch({ type: types.loaderOn });
    try {
      // const response = await api.post(endpoints.auth.signup, data, true);
      // console.log('signup action: ', response);
      dispatch({ type: types.SIGN_UP, payload: data });
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      return Promise.resolve('Signup success');//signup successful //response
    } catch (e) {
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      return Promise.reject(e)
    }
  };
};


const login = (data) => {
  return async (dispatch) => {
    dispatch({ type: types.loaderOn });
    try {
      // const response = await api.post(endpoints.auth.login, newData, false);
      dispatch({ type: types.LOGIN, payload: data }); //payload: response
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      return Promise.resolve('Login success');//login successful //response
    } catch (e) {
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      console.log('error response action: ', e);
      return Promise.reject(e)
    }
  };
};


const fetchPosts = () => {
  return async (dispatch) => {
    dispatch({ type: types.loaderOn });
    try {
      const posts_response = await api.get(endpoints.posts.fetchPosts);
      dispatch({ type: types.GET_POSTS, payload: posts_response }); //payload: response
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      return Promise.resolve('Posts success');
    } catch (e) {
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      console.log('error response action: ', e);
      return Promise.reject(e)
    }
  };
};

const addPost = (data) => {
  return async (dispatch) => {
    dispatch({ type: types.loaderOn });
    try {
      const add_post_response = await api.get(endpoints.posts.addPost);
      dispatch({ type: types.ADD_POST, payload: data }); //payload: response
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      return Promise.resolve('Posts success');
    } catch (e) {
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      console.log('error response action: ', e);
      return Promise.reject(e)
    }
  };
};



export const actions = {
  signup,
  login,
  fetchPosts,
  addPost
}