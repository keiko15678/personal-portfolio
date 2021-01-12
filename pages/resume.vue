<template>
  <div>
    <BaseTitleBar label="PDFs" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in resume.download" :key="item.id" @click-pic="handleVisitLink(item.link)" />
        </div>
      </div>
    </div>
    <BaseTitleBar label="Online" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in resume.online" :key="item.id" @click-pic="handleVisitLink(item.link)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Card, Resume } from '~/types/index.ts'
import { $axios } from '~/utils/api.ts'
import { dataStore } from '~/store/index'

@Component({
  layout: 'default'
})
export default class Resumes extends Vue {
  private handleVisitLink(link: string) {
    if (link && link !== '') {
      window.open(link, '_blank')
    }
  }

  private get resume(): Resume {
    return dataStore.data.resume ? dataStore.data.resume : {}
  }

  private created(): void {

  }
}
</script>
