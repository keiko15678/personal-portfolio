<template>
  <div>
    <BaseTitleBar label="About Me" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <div class="about" v-html="about">

            <ul>
            <li>Mandarin (Traditional & Simplified)</li>
            <li>English (U.S.)</li>
            <li>Japanese</li>
            <li>Spanish (Latin America)</li>
          </ul>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Card } from '~/types/index.ts'
import { $axios } from '~/utils/api.ts'
import { dataStore } from '~/store/index'

@Component({
  layout: 'default'
})
export default class About extends Vue {
  private get about(): string {
    return dataStore.data.info ? dataStore.data.info.about : ''
  }
}
</script>
