<script setup>
import { ref } from "@vue/composition-api";
import Composer from "./components/composer/index.vue";

const bullets = ref([]);
const memodComposer = ref(false);

const testAction = async () => {
  memodComposer.value.insertText('hello world')
};
</script>

<template>
  <main>
    <Composer v-model="bullets" ref="memodComposer" />

    <button @click="testAction">Test action</button>
  </main>
</template>