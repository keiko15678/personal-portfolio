<template>
  <div>
    <BaseTitleBar label="Education" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in education" :key="item.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Card } from '~/types/index.ts'
import { dataStore } from '~/store/index'

@Component({
  layout: 'default',
})
export default class Background extends Vue {
  private get education(): Array<Card> {
    return dataStore.data.background ? dataStore.data.background.education : []
  }
}
</script>

<style lang="scss"></style>
