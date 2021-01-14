<template>
  <div>
    <BaseTitleBar label="Work Experience" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in experience" :key="item.id" @click-pic="handleVisitLink(item.link)" />
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
export default class Index extends Vue {
  private handleVisitLink(link: string) {
    if (link && link !== '') {
      const info: Card | undefined = this.experience.find((item: Card) => item.link === link)
      this.$router.push({
        path: link,
        query: {
          info: info ? JSON.stringify(info) : '',
          related: JSON.stringify(this.experience.filter((item: Card) => item.link !== link)),
        },
      })
    }
  }

  private get experience(): Array<Card> {
    return dataStore.data.experience ? dataStore.data.experience : []
  }
}
</script>
