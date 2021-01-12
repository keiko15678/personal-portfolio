<template>
  <div class="body__titleBar">
    <h3 class="body__title">{{ label }}</h3>
    <div class="body__titleBtn">
      <button class="link">
        <fa icon="plus" class="link__icon--small"></fa>
        <div class="link__text">More</div>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Card } from '~/types/index.ts'

@Component
export default class BaseTitleBar extends Vue {
  @Prop({ required: true }) readonly label!: string
}
</script>

<style lang="scss"></style>
