<template>
  <div class="flex bg-packed font-lexend dark:bg-dark-900">
    <div
      id="sidebar-scroll"
      class="flex-sidebar lg:flex-auto w-sidebar lg:block hidden bg-white dark:bg-gray-800 border-r-2 dark:border-gray-700 h-screen lg:z-0 z-40 overflow-auto lg:relative fixed"
    >
      <Sidebar />
    </div>
    <div class="flex-auto w-full overflow-auto h-screen" id="body-scroll">
      <Header />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script>
  // vue Components
  import Sidebar from "./Sidebar.vue";
  import Header from "./Header.vue"
  import Footer from "./Footer.vue";
  // npm-js
  import Scrollbar from "smooth-scrollbar";

  export default {
    name: "DashboardLayout",

    components: {
      Header,
      Footer,
      Sidebar,
    },
    mounted() {
      Scrollbar.init(document.querySelector("#body-scroll"));

      setTimeout(() => {
        var alert_dis = document.querySelectorAll(".alert-dismiss");
        alert_dis.forEach((x) =>
          x.addEventListener("click", function () {
            x.parentElement.classList.add("hidden");
          })
        );
      }, 100);
    },
  };
</script>
