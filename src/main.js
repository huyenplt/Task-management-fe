import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Icon } from "@iconify/vue";
import VueApexCharts from "vue3-apexcharts";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
// import "flowbite";
import "./assets/tailwind.css";
import "./assets/animate.css";
import "./assets/sass/css/windzo.css";
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store';
import DashboardLayout from "./components/DashboardLayout";
import EmptyLayout from "./components/EmptyLayout.vue";

const app = createApp(App);

app.component("default-layout", DashboardLayout);
app.component("empty-layout", EmptyLayout);
app.use(router);
app.use(Icon);
app.use(VueApexCharts);
app.use(PerfectScrollbar);
app.use(VueAxios, axios);
app.use(store);
app.mount("#app");

// router.beforeEach((to, from, next) => {
//   document.querySelector(".flex-sidebar").classList.add("hidden");
//   next();
// });
