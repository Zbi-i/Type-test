<template>
  <router-view :key="id"/>
</template>

<script>
import './store/index.js';
import { useRoute } from 'vue-router';
export default {
  name: 'App',
  setup() {
    const route = useRoute();
    const { id } = route.params;
    return {
      id
    };
  },
};
</script>
