import { createStore } from 'vuex'

const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/auth/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export default createStore({
    state: {
        status: '',

    },
    mutations: {
        setStatus: function(state, status) {
            state.status = status;
        }
    },
    actions: {
        login: ({ commit }, userInfos) => {
            return new Promise((resolve, reject) => {
                commit;
                instance.post('/login', userInfos)
                    .then(function(response) {
                        resolve(response);
                    })
                    .catch(function(error) {
                        reject(error);
                    });
            });
        },
        createAccount: ({ commit }, userInfos) => {
            return new Promise((resolve, reject) => {
                commit;
                instance.post('/signup', userInfos)
                    .then(function(response) {
                        resolve(response);
                    })
                    .catch(function(error) {
                        reject(error);
                    });
            });
        }
    },
    modules: {

    }
})