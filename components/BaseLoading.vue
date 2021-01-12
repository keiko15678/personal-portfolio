<template>
  <div v-if="loading" class="loading">
    <p class="loading__text">Loading...</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class BaseLoading extends Vue {
  private loading: boolean = false

  private delayMs: number = 500

  private start(): void {
    this.loading = true
  }

  private finish(): void {
    setTimeout(() => {
      this.loading = false
    }, this.delayMs)
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  overflow: hidden;
  background-color: rgba(255, 255, 255, .75);
  &__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000;
    letter-spacing: 1.5px;
    font-size: 32px;
    font-weight: 100;
  }
}
</style>
