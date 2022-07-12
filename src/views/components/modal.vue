<template>
  <div>
    <div
      :class="`modal ${
        !openModal && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
    >
      <div
        @click="$emit('closeModal')"
        class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
      ></div>

      <div
        class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="px-6 py-4 text-left modal-content">
          <!--Title-->
          <div class="flex items-center justify-between pb-3">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">
              Create new project
            </h3>
            <div
              class="z-50 cursor-pointer modal-close"
              @click="$emit('closeModal')"
            >
              <svg
                class="text-black fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                />
              </svg>
            </div>
          </div>
          <form @submit.prevent="createProject" class="space-y-6" action="#">
            <div>
              <label
                for="title"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Title</label
              >
              <input
                type="text"
                name="title"
                id="title"
                v-model="form.title"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="title..."
                required
              />
            </div>

            <div>
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Description</label
              >
              <textarea
                type="text"
                name="description"
                id="description"
                v-model="form.description"
                placeholder="description..."
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div class="flex justify-end pt-2">
              <button
                type="submit"
                class="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
              >
                Create
              </button>
              <button
                @click="$emit('closeModal')"
                type="button"
                class="p-3 px-6 py-3 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  props: ["openModal"],
  setup() {
    const form = reactive ({
        title: '',
        description: '',
    })

    function createProject() {
        store.dispatch('projectStore/addProject', form);
    }

    return {
        form, createProject
    }
  },

};
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>
