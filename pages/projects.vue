<template>
  <div>
    <BaseTitleBar label="Enterprise Projects" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard
            :properties="item"
            v-for="item in projects.enterprise"
            :key="item.id"
            @click-pic="handleVisitLink(item.link)"
            @click-source="handleVisitLink(item.source)"
          />
        </div>
      </div>
    </div>
    <BaseTitleBar label="Personal Projects" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard
            :properties="item"
            v-for="item in projects.personal"
            :key="item.id"
            @click-pic="handleVisitLink(item.link)"
            @click-source="handleVisitLink(item.source)"
          />
        </div>
      </div>
    </div>
    <BaseTitleBar label="Templates & Snippets" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard
            :properties="item"
            v-for="item in projects.template"
            :key="item.id"
            @click-pic="handleVisitLink(item.link)"
            @click-source="handleVisitLink(item.source)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Card, ProjectTypes } from '~/types/index.ts'
import BaseTitleBar from '~/components/BaseTitleBar.vue'
import BaseCard from '~/components/BaseCard.vue'
import { dataStore } from '~/store/index'

@Component({
  layout: 'default',
  components: {
    BaseTitleBar,
    BaseCard,
  },
})
export default class Projects extends Vue {
  private handleVisitLink(link: string) {
    if (link && link !== '') {
      window.open(link, '_blank')
    }
  }

  private get projects(): ProjectTypes {
    return dataStore.data.projects ? dataStore.data.projects : {}
  }

  private mounted(): void {
    window.scrollTo(0, 0)
  }
}
</script>
