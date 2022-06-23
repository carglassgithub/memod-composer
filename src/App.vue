<script setup>
import { ref, reactive } from '@vue/composition-api'
import MemodComposer from './components/composer/index.vue'
import { BULLET_DISPLAY_TYPES, EDITOR_FORMAT } from "./utils/constants"

const bullets = [
        {
          "prettyText": "<p><span style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\">I recently took part in a </span><strong style=\"background-color:rgb(255,255,255);color:rgb(17,24,39);\">Hashnode Bootcamp on technical writing, </strong><span style=\"background-color:rgb(255,255,255);color:rgb(17,24,39);\">which inspired me to think </span><span style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\">about</span><strong style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\"> what actually makes developers good at writing💡</strong></p>",
          "rawText": "I recently took part in a Hashnode Bootcamp on technical writing, which inspired me to think about what actually makes developers good at writing💡                   @",
          "is_read": 0,
          "order": 1,
          "saved": [
            
          ],
          "saved_count": 0,
          "comments_count": 0,
          "reactions_count": 0,
          "comments": [
            
          ],
          "reactions": [
            
          ],
          "reaction": [
            
          ],
          "is_saved": false,
          "saves": [
            
          ]
        },
        {
          "prettyText": "<p><span style=\"color:rgb(17,17,17);background-color:rgb(255,255,255);\">I tried to think about the approach I had taken in other areas, like programming and learning a second language, and that brought three questions to mind:</span></p><p><br /></p><p><span style=\"color:rgb(17,17,17);background-color:rgb(255,255,255);\">1) What's my motivation?</span></p><p><span style=\"color:rgb(17,17,17);background-color:rgb(255,255,255);\">2) What challenges am I facing?</span></p><p><span style=\"color:rgb(17,17,17);background-color:rgb(255,255,255);\">3) How is my current process and how can I improve it?</span></p>",
          "rawText": "I tried to think about the approach I had taken in other areas, like programming and learning a second language, and that brought three questions to mind:1) What's my motivation?2) What challenges am I facing?3) How is my current process and how can I improve it?                   @",
          "is_read": 0,
          "order": 2,
          "saved": [
            
          ],
          "saved_count": 0,
          "comments_count": 0,
          "reactions_count": 0,
          "comments": [
            
          ],
          "reactions": [
            
          ],
          "reaction": [
            
          ],
          "is_saved": false,
          "saves": [
            
          ]
        },
]

const bullets2 = [
    {
      "prettyText": "<h2><strong style=\"background-color:rgb(255,255,255);color:rgb(17,24,39);\">The motivation</strong></h2><p><span style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\">When I think about the teachers I've most admired, they all had a driving purpose: sharing or facilitating knowledge. I think this is the ultimate goal of all humans. Having a clear motivation will keep you going, even if the results aren't initially as intended.</span></p>",
      "rawText": "The motivationWhen I think about the teachers I've most admired, they all had a driving purpose: sharing or facilitating knowledge. I think this is the ultimate goal of all humans. Having a clear motivation will keep you going, even if the results aren't initially as intended.                   ",
      "is_read": 0,
      "order": 3,
      "saved": [
        
      ],
      "saved_count": 0,
      "comments_count": 0,
      "reactions_count": 0,
      "comments": [
        
      ],
      "reactions": [
        
      ],
      "reaction": [
        
      ],
      "is_saved": false,
      "saves": [
        
      ]
    },
];

const part = reactive(
    {
      "id": 64849,
      "title": "Setting strong roots to succeed at technical writing",
      bullets
});
const memodComposer = ref(false)

const testAction = async () => {
  part.bullets = bullets2
}
</script>

<template>
  <main>
    <MemodComposer 
      ref="memodComposer"
      v-model="part.bullets" 
      :title="part.title" 
      :bullet-display-type="BULLET_DISPLAY_TYPES.numeric"  
    />

    <button @click="testAction">Test action</button>
  </main>
</template>


<style lang="scss">
body {
  padding-right: 10px;
  background-color: #0f0f10;
  color: white;
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  scrollbar-width: thin;
  scrollbar-color: #05a88f #2c2c2e;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #2c2c2e;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #05a88f;
  }
}
</style>
