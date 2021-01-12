<template>
  <div>
    <BaseTitleBar label="Blog" />
    <div class="container">
      <div class="row">
        <div class="col result">
          In Development...
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Card } from '~/types/index.ts'
import { dataStore } from '~/store/index'

@Component({
  layout: 'default'
})
export default class Blog extends Vue {
}
</script>

<style lang="scss"></style>
