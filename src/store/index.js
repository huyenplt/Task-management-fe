import { createStore } from 'vuex';
import { auth } from "./auth.module";

const store = createStore({
  // state() {
  //   return {
  //     curUser: null,
  //   };
  // },

  // getters: {
  //   user: (state) => state.curUser,
  // },
  
  // mutations: {
  //   userLogin(state, userLogin) {
  //     state.curUser = userLogin;
  //   },
  // },
  // actions: {
  //   handleUserLogin(context, newUserLogin) {
  //     context.commit('userLogin', newUserLogin);
  //   },
  // },
  modules: {
    auth,
  },

});

export default store;
