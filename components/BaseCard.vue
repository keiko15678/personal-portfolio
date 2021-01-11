<template>
  <div class="card">
    <div class="card__pic" @click="$emit('click-pic', $event)" :style="{ 'background-image': properties.imageUrl && properties.imageUrl !== '' ? `url(${properties.imageUrl})` : '/card-placeholder.png'}">
      <div class="card__duration">
        <div class="card__resolution">HD</div>
        {{ `${Math.floor(properties.duration / 60)}:${(properties.duration % 60) >= 10 ? properties.duration % 60 : '0' + properties.duration % 60}` }}
      </div>
    </div>
    <div class="card__title">{{ properties.name }}</div>
    <div class="card__author">
      <fa icon="check-circle" class="card__authorIcon"></fa>
      {{ properties.sourceUrl }}</div>
    <div class="card__footer">
      <div class="card__views">{{ (properties.publishDate / 1000000000000).toFixed(1) }}M views</div>
      <div class="card__ratings">{{ properties.rating }}%</div>
      <div class="card__source" v-if="properties.source === '' || properties.source" :class="{ 'card__source--active': properties.source && properties.source !== '', 'card__source--disabled': !properties.source || properties.source === '' }" @click="$emit('click-source', $event)">Source</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Card } from '~/types/index.ts'

@Component
export default class BaseCard extends Vue {
  @Prop({ required: true }) readonly properties!: Card
}
</script>

<style lang="scss">
</style>
