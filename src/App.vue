<script setup>
import { ref } from '@vue/composition-api'
import MemodComposer from './components/composer/index.vue'

const bullets = ref([])
const memodComposer = ref(false)

const testAction = async () => {
  memodComposer.value.insertLink('https://zenboard.app')
}
</script>

<template>
  <main>
    <MemodComposer ref="memodComposer" v-model="bullets" />

    <button @click="testAction">Test action</button>
  </main>
</template>
