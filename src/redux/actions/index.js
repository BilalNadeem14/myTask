import api from "../../Api";
import { endpoints } from "../../Api/configs";
import types from "./actionTypes";


const signup = (data) => {
  return async (dispatch) => {
    dispatch({ type: types.loaderOn });
    try {
      const response = await api.post(endpoints.auth.register, data, true);
      console.log('signup action: ', response);
      dispatch({ type: types.SIGN_UP, payload: response });
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
      const response = await api.post(endpoints.auth.login, data, false);
      dispatch({ type: types.LOGIN, payload: response }); //payload: response
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      return Promise.resolve('Login success');//login successful //response
    } catch (e) {
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      console.log('error response action: ', e);
      return Promise.reject(e)
    }
  };
};


const fetchFoodItems = (params) => {
  return async (dispatch) => {
    dispatch({ type: types.loaderOn });
    try {
      const food_list_response = await api.get(endpoints.food.list, params);
      dispatch({ type: types.GET_FOOD_LIST, payload: food_list_response }); //payload: response
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      return Promise.resolve('Foods list success');
    } catch (e) {
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      console.log('error response action: ', e);
      return Promise.reject(e)
    }
  };
};

const addFood = (data) => {
  return async (dispatch) => {
    dispatch({ type: types.loaderOn });
    try {
      const add_food_reponse = await api.post(endpoints.food.add, data, false);
      dispatch({ type: types.ADD_FOOD, payload: add_food_reponse }); //payload: response
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      return Promise.resolve('Add Food Success');
    } catch (e) {
      setTimeout(() => { dispatch({ type: types.loaderOff }) }, 500)
      console.log('error response action: ', e);
      return Promise.reject(e)
    }
  };
};

const saveUserId = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.SAVE_USER_ID, payload: id });
      return Promise.resolve('Login success');//login successful //response
    } catch (e) {
      console.log('error response action: ', e);
      return Promise.reject(e)
    }
  };
};

const removeUserId = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.REMOVE_USER_ID });
      return Promise.resolve('Login success');//login successful //response
    } catch (e) {
      console.log('error response action: ', e);
      return Promise.reject(e)
    }
  };
};

const logout = () => {
  console.log('LOGOUT ACTION CALLED');
  return async (dispatch) => {
    try {
      dispatch({ type: types.LOGOUT });
      return Promise.resolve('LOGOUT SUCCESS');//login successful //response
    } catch (e) {
      console.log('error response action: ', e);
      return Promise.reject(e)
    }
  };
};

export const actions = {
  signup,
  login,
  fetchFoodItems,
  addFood,
  saveUserId,
  removeUserId,
  logout
}