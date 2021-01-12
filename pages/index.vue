<template>
  <div>
    <BaseTitleBar label="Work Experience" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in work" :key="item.id" @click-pic="handleVisitLink(item.link)" />
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
export default class Projects extends Vue {
  private work: Array<Card> = []

  private handleVisitLink(link: string) {
    if (link && link !== '') {
      const info: Card | undefined = this.work.find((item: Card) => item.link === link)
      this.$router.push({
        path: link,
        query: {
          info: info ? JSON.stringify(info) : '',
          related: JSON.stringify(this.work.filter((item: Card) => item.link !== link)),
        },
      })
    }
  }

  private created(): void {
    // this.$nuxt.$on('work', (data: any) => {
    //   this.work = { ...data }
    // })

    console.log(dataStore)


    dataStore.getPermissionList({ token: '123' })
    // dataStore.setPermissionList('payload')
  }
}
</script>

<style lang="scss"></style>
