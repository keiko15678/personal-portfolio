<template>
  <div>
    <BaseTitleBar label="Enterprise Projects" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard
            :properties="item"
            v-for="item in workProjects"
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
            v-for="item in personalProjects"
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
            v-for="item in templates"
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
import { Card } from '~/types/index.ts'
import BaseTitleBar from '~/components/BaseTitleBar.vue'
import BaseCard from '~/components/BaseCard.vue'

@Component({
  layout: 'default',
  components: {
    BaseTitleBar,
    BaseCard,
  },
})
export default class Projects extends Vue {
  private workProjects: Array<Card> = []

  private personalProjects: Array<Card> = []

  private templates: Array<Card> = []

  private handleVisitLink(link: string) {
    if (link && link !== '') {
      window.open(link, '_blank')
    }
  }

  private created(): void {
    this.$nuxt.$on('projects', (data: any) => {
      this.workProjects = [ ...data.enterprise ]
      this.personalProjects = [ ...data.personal ]
      this.templates = [ ...data.template ]
    })
  }

  private activated(): void {
    this.$nuxt.$on('projects', (data: any) => {
      this.workProjects = [ ...data.enterprise ]
      this.personalProjects = [ ...data.personal ]
      this.templates = [ ...data.template ]
    })
  }

  private deactivated(): void {
    // this.$nuxt.$off('projects')
  }
}
</script>
