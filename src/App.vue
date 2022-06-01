<script setup>
import { ref } from "@vue/composition-api";
import Composer from "./components/composer/index.vue";

const bullets = ref([]);
</script>

<template>
  <main>
    <Composer v-model="bullets" />
  </main>
</template>