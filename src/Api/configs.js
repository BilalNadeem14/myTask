export const urls = {
    v1: 'https://calorieappbackend.herokuapp.com/api/'
}
export const base_url = urls.v1
export const endpoints = {
    auth: {
        login: 'auth/login',   //'/auth/login'
        register: 'auth/register',
        user: 'auth/user'
    },
    food : {
        add : 'food/add',
        list : 'food/user',
    },
    admin : {
        insights : 'food/admin'
    }

}
const configs = {
    endpoints: endpoints,
    base_url: base_url,
}

export default configs