import authHeader from '../services/auth-header'
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/projects';
export const projectStore = {
    namespaced: true,
    state: {
        projects: [],
        project: {},
    },
    mutations: {
        FETCH(state, projects) {
            state.projects = projects;
        },

        FETCH_ONE(state, project) {
            state.project = project;
        },
    },
    actions: {
        async fetch({ commit }) {
            const response = await axios.get(API_URL, { headers: authHeader() })

            const data = await response.data.data

            commit('FETCH', data)
        },

        async fetchOne({ commit }, id) {
            const response = await axios.get(`${API_URL}/${id}`, { headers: authHeader() })

            commit('FETCH_ONE', response.data)
        },

        deleteProject({}, id) {
            axios.delete(`${API_URL}/${id}`, { headers: authHeader() })
                .then(() => this.dispatch('projectStore/fetch'))
                .catch((e) => {
                    console.log(e);
                }) ;
        },
        // editProduct({}, product) {
        //     axios.put(`${RESOURCE_PRODUCT}/${product.id}`, {
        //         name: product.name,
        //         price: product.price,
        //     })
        //     .then();
        // },
        // addProduct({}, product) {
        //     axios.post(`${RESOURCE_PRODUCT}`, {
        //         name: product.name,
        //         price: product.price,
        //     })
        //         .then();
        // }
    },
}