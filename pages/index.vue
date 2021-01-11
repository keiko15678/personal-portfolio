<template>
  <div>
    <BaseTitleBar label="Work Experience" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in cards" :key="item.id" @click="handleShowVideo(item.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Card } from '~/types/index.ts'

@Component({
  layout: 'default',
})

export default class Projects extends Vue {
  private cards: Array<Card> = []
}
</script>

<style lang="scss">
</style>
