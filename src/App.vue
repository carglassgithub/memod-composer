<script setup>
import { ref } from "@vue/composition-api";
import MemodComposer from "./components/composer/index.vue";

const bullets = ref([])
const memodComposer = ref(false)

const testAction = async () => {
  const file = {
      id: 11934,
      url: "https://memod-public.s3.us-east-1.amazonaws.com/images/bFhsnH.jpg",
      attributes: {
        width: '611',
        height: '611',
        unique_name: 'images/BUUwIk.jpg',
        orientation: 'landscape'
      }
  }
        
  memodComposer.value.insertImages([file])
};
</script>

<template>
  <main>
    <MemodComposer 
      v-model="bullets" 
      ref="memodComposer" 
    />

    <button @click="testAction">Test action</button>
  </main>
</template>
