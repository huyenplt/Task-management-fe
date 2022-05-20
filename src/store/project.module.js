import authHeader from '../services/auth-header'
import axios from 'axios';


const API_URL = 'http://127.0.0.1:8000/api/projects';
export const projectStore = {
    namespaced: true,
    state: {
        projects: [],
        project: {},
    },
    actions: {
        fetch({ commit }) {
            return axios.get(API_URL, { headers: authHeader() })
                .then(
                    (response) => {
                        commit('FETCH', response.data.data)
                        return response.data.data
                    })
                .catch((err => {
                    console.log(err)
                }));
        },

        fetchOne({ commit }, id) {
            axios.get(`${API_URL}/${id}`, { headers: authHeader() })
                .then(
                    (response) => {
                        commit('FETCH_ONE', response.data)
                        return response.data
                    })
                .catch((err => {
                    console.log(err)
                }));
        },
    },
    mutations: {
        FETCH(state, projects) {
            state.projects = projects;
        },

        FETCH_ONE(state, project) {
            state.project = project;
        },
    },
}