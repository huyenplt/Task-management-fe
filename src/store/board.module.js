import authHeader from '../services/auth-header'
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';
export const boardStore = {
    namespaced: true,
    state: {
        boards: [],
        board: {},
    },
    actions: {
        fetch({ commit }, projectId) {
            return axios.get(`API_URL/${projectId}/boards`, { headers: authHeader() })
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
            axios.get(`${API_URL}/boards/${id}`, { headers: authHeader() })
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
        FETCH(state, boards) {
            state.boards = boards;
        },

        FETCH_ONE(state, board) {
            state.board = board;
        },
    },
}