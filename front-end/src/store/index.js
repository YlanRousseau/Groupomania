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

        user: {
            userId: -1,
            token: '',
        },
        userInfos: {
            nom: '',
            prenom: '',
            email: '',
        },
    },
    mutations: {
        setStatus: function(state, status) {
            state.status = status;
        },
        logUser: function(state, user) {
            instance.defaults.headers.common['Authorization'] = user.token;
            state.user = user;
        },
    },
    actions: {
        login: ({ commit }, userInfos) => {
            commit('setStatus', 'loading');
            return new Promise((resolve, reject) => {
                instance.post('/login', userInfos)
                    .then(function(response) {
                        commit('setStatus', '');
                        commit('logUser', response.data);
                        resolve(response);
                    })
                    .catch(function(error) {
                        commit('setStatus', 'error_login');
                        reject(error);
                    });
            });
        },
        createAccount: ({ commit }, userInfos) => {
            commit('setStatus', 'loading');
            return new Promise((resolve, reject) => {
                commit;
                instance.post('/signup', userInfos)
                    .then(function(response) {
                        commit('setStatus', 'created');
                        resolve(response);
                    })
                    .catch(function(error) {
                        commit('setStatus', 'error_create');
                        reject(error);
                    });
            });
        }
    },
    modules: {

    }
})