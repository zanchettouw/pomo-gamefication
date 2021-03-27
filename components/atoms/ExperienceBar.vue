<template>
  <header class="pb-10 flex items-center">
    <p class="text-sm">
      {{ `${xp.start} xp` }}
    </p>
    <div class="mx-4 lg:mx-6 flex-1 bg-gray-line h-1 rounded-md">
      <div :style="{ width: `${currentXpPercentage}%` }" class="relative bg-green h-1">
        <p class="text-sm absolute w-max top-2">
          {{ `${xp.current} xp (${currentXpPercentage}%)` }}
        </p>
      </div>
    </div>
    <p class="text-sm">
      {{ `${xp.end} xp` }}
    </p>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState('Challenges', ['xp']),
    ...mapGetters('Challenges', ['currentXpPercentage'])
  }
})
</script>

<style>

</style>
