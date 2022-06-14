<script setup>
import { ref, reactive } from '@vue/composition-api'
import MemodComposer from './components/composer/index.vue'
import { BULLET_DISPLAY_TYPES, EDITOR_FORMAT } from "./utils/constants"

const part = reactive(
    {
      "id": 64849,
      "title": "Setting strong roots to succeed at technical writing",
      "bullets": [
        {
          "id": 307144,
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
          "id": 307145,
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
        {
          "id": 307146,
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
        {
          "id": 307147,
          "prettyText": "<h2><strong style=\"background-color:rgb(255,255,255);color:rgb(17,24,39);\">The challenge </strong></h2><p>Technical <span style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\">writing has the same components of any communication: </span><strong style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\">a message, receptor, transmitter, and channel</strong><span style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\">. Each one of those is a world of its own. The </span><strong style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\">message</strong><span style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\"> requires making yourself understood. The </span><strong style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\">receptor</strong><span style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\"> is your audience, who you must also understand well</span></p>",
          "rawText": "The challenge Technical writing has the same components of any communication: a message, receptor, transmitter, and channel. Each one of those is a world of its own. The message requires making yourself understood. The receptor is your audience, who you must also understand well                   ",
          "is_read": 0,
          "order": 4,
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
          "id": 307148,
          "prettyText": "<h2><strong style=\"background-color:rgb(255,255,255);color:rgb(17,24,39);\">The challenge - part 2</strong></h2><p>As writers, we are the <strong>transmitters</strong> of the message – therefore it's important to develop a voice, pace and style in order to communicate clearly. Finally,<span style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\"> </span><span style=\"background-color:rgb(255,255,255);color:rgb(17,24,39);\">the </span><strong style=\"background-color:rgb(255,255,255);color:rgb(17,24,39);\">channel</strong><span style=\"background-color:rgb(255,255,255);color:rgb(17,24,39);\"> is whatever </span><span style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\">medium you settle on, e.g. Memo'd or Hashnode. (This should be the easy part.)</span></p>",
          "rawText": "The challenge - part 2As writers, we are the transmitters of the message – therefore it's important to develop a voice, pace and style in order to communicate clearly. Finally, the channel is whatever medium you settle on, e.g. Memo'd or Hashnode. (This should be the easy part.)                   @",
          "is_read": 0,
          "order": 5,
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
          "id": 307149,
          "prettyText": "<p>We can tackle the first three parts of the challenges through observation, studying (courses, bootcamps, guides), and practice. I recommend this article by <a href=\"https://hashnode.com/post/13-blogging-tips-for-developers-ckqkuqem8009ed7s15zpidiob\" target=\"_blank\" rel=\"noreferrer noopener\">Edidiong Asikpo</a> as well as <a href=\"https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api\" target=\"_blank\" rel=\"noreferrer noopener\">vue documentation</a>, which is a good example of balancing code with a simple message.</p>",
          "rawText": "We can tackle the first three parts of the challenges through observation, studying (courses, bootcamps, guides), and practice. I recommend this article by Edidiong Asikpo as well as vue documentation, which is a good example of balancing code with a simple message.                   ",
          "is_read": 0,
          "order": 6,
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
          "id": 307150,
          "prettyText": "<h2><strong style=\"color:rgb(17,24,39);background-color:rgb(255,255,255);\">Improving</strong></h2><p>Knowing that you're connecting with an audience is important... because once we reach our current goal, there'll be others (another article, another project). That's the cycle of life. Improving <span style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\">requires patience, good habits, but also a feedback loop to stay motivated.</span></p>",
          "rawText": "ImprovingKnowing that you're connecting with an audience is important... because once we reach our current goal, there'll be others (another article, another project). That's the cycle of life. Improving requires patience, good habits, but also a feedback loop to stay motivated.                   ",
          "is_read": 0,
          "order": 7,
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
          "id": 307151,
          "prettyText": "<p>When I reflect on my creative process, three questions /targets come up:</p><p><br /></p><p>1) When? Pick a publishing rate (x per month) and commit to it.</p><p>2) How? Plan ahead, take better notes, and organize that knowledge, e.g. using Notion or Memo'd.</p><p>3) What? This one's harder than it sounds.</p>",
          "rawText": "When I reflect on my creative process, three questions /targets come up:1) When? Pick a publishing rate (x per month) and commit to it.2) How? Plan ahead, take better notes, and organize that knowledge, e.g. using Notion or Memo'd.3) What? This one's harder than it sounds.                   ",
          "is_read": 0,
          "order": 8,
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
          "id": 307152,
          "prettyText": "<p><strong>Chris Bongers</strong> from the Hashnode Bootcamp gave the following tips on finding <em>what</em> to write about:</p><p><br /></p><p>-Your struggles</p><p>-Your knowledge</p><p>-Your experiences</p><p>-The last thing you Googled</p><p>-The last event you attended</p><p>-Advice you'd give to the you of 5 years ago</p>",
          "rawText": "Chris Bongers from the Hashnode Bootcamp gave the following tips on finding what to write about:-Your struggles-Your knowledge-Your experiences-The last thing you Googled-The last event you attended-Advice you'd give to the you of 5 years ago                   ",
          "is_read": 0,
          "order": 9,
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
          "id": 307153,
          "prettyText": "<p><strong>Bottom line</strong>: any developer looking to improve at technical writing needs to do the following...</p><p> </p><p>-Never forget your motivation.</p><p>-Don't wait to be perfect. Be open to improving steadily.</p><p>-Tweak and reinforce your process until you find your flow.</p>",
          "rawText": "Bottom line: any developer looking to improve at technical writing needs to do the following... -Never forget your motivation.-Don't wait to be perfect. Be open to improving steadily.-Tweak and reinforce your process until you find your flow.                   ",
          "is_read": 0,
          "order": 10,
          "saved": [
            
          ],
          "saved_count": 0,
          "comments_count": 0,
          "reactions_count": 0,
          "comments": [
            
          ],
          "reactions": [
            {
              "counter": 1,
              "icon": "👍"
            }
          ],
          "reaction": [
            
          ],
          "is_saved": false,
          "saves": [
            
          ]
        }
      ]
});
const memodComposer = ref(false)

const testAction = async () => {
  memodComposer.value.formatSelection(EDITOR_FORMAT.QUOTE)
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
