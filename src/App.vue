<script setup>
import { ref } from '@vue/composition-api'
import MemodComposer from './components/composer/index.vue'
import { EDITOR_FORMAT } from "./utils/constants"
const bullets = ref([])
const memodComposer = ref(false)

const testAction = async () => {
  memodComposer.value.formatSelection(EDITOR_FORMAT.QUOTE)
}
</script>

<template>
  <main>
    <MemodComposer ref="memodComposer" v-model="bullets" />

    <button @click="testAction">Test action</button>
  </main>
</template>
