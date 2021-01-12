<template>
  <div>
    <BaseTitleBar label="Education" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in edu" :key="item.id" />
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
export default class Background extends Vue {
  private edu: Array<Card> = [
    {
      id: 2,
      imageUrl: '/bu.jfif',
      duration: 1234,
      name: 'Boston University',
      sourceUrl: '08/2015 - 05/2018',
      publishDate: "Bachelor's in Computer Science",
      rating: '',
    },
  ]
}
</script>

<style lang="scss"></style>
