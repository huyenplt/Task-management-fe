<template>
  {{ project }}
</template>

<script>
import { useRoute, onBeforeRouteLeave, onBeforeRouteUpdate  } from 'vue-router'
import { ref, watch, computed, onMounted } from 'vue'
import { useStore } from "vuex";

export default {
    setup() {
        const route = useRoute();
        const store = useStore();

        onMounted(store.dispatch("projectStore/fetchOne", route.params.id));

        const project = computed(() => {
            return store.state.projectStore.project;
        });

        return {
            project,
        };
    },
}
</script>

<style>

</style>