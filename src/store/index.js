import { createStore } from 'vuex';
import { auth } from "./auth.module";
import { projectStore } from "./project.module";

const store = createStore({
  modules: {
    auth,
    projectStore
  },

});

export default store;
