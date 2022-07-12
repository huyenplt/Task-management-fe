<template>
  <button
    @click="handleOpenModal"
    class="px-6 py-2 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
  >
    Open Modal
  </button>

  <Modal :openModal="openModal" @closeModal="handleCloseModal" />

  <div class="projects h-auto p-3">
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        Projects
      </h1>
      <p class="mt-1 text-sm font-normal text-gray-400">All your projects</p>
    </div>
    <div class="flex flex-col mt-5">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="project in projects"
                  :key="project.id"
                  class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                >
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ project.id }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ project.title }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ project.pivot.role }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    <router-link
                      :to="{ name: 'Project', params: { id: project.id } }"
                    >
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Show
                      </button>
                    </router-link>

                    <button
                      type="button"
                      class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      @click="deleteProject(project.id)"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./modal.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Modal,
  },
  setup() {
    const openModal = ref(false);
    const store = useStore();

    // Get all projects data
    store.dispatch("projectStore/fetch");

    const projects = computed(() => {
      return store.state.projectStore.projects;
    });

    // Delete project
    const deleteProject = async (id) => {
      if (!window.confirm("You sure?")) {
        return;
      }
      store.dispatch("projectStore/deleteProject", id);
    };

    // Toggle modal
    function handleOpenModal() {
      openModal.value = true;
    }

    function handleCloseModal() {
      openModal.value = false;
    }

    return {
      projects,
      deleteProject,
      openModal,
      handleOpenModal,
      handleCloseModal,
    };
  },
};
</script>

<style></style>
