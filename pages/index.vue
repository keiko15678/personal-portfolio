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
import { Component, Vue } from 'nuxt-property-decorator'
import { Card } from '~/types/index.ts'

@Component({
  layout: 'default',
})

export default class Projects extends Vue {
  private work: Array<Card> = [
    { id: 0, imageUrl: '/inno.png', fullName: 'Inno Tech', stack: ['TypeScript',
    'Vue 2',
    'Vue 3',
    'Nuxt.js',
    'Node.js',
    'Webpack',
    'Npm',
    'Yarn',
    'pgSQL',
    'Deno'], comments: ['aaa', 'bbb', 'ccc'], link:'/work/inno', duration: 1234, name: 'Inno Tech', sourceUrl: 'Gaming SaaS', publishDate: 'Current', rating: '- Frontend Engineer' },
    { id: 1, imageUrl: '/mayo-slogan.png', link:'/work/mayo', duration: 1234, name: 'MAYO Human Capital', sourceUrl: 'HR SaaS', publishDate: '1.25 years', rating: '- Frontend Engineer' },
    { id: 2, imageUrl: '', duration: 1234, link:'/work/365', name: '365 Internet Technologies', sourceUrl: 'H5 Gaming', publishDate: '1.33 years', rating: '- Fullstack Engineer' },
    { id: 3, imageUrl: '/linkedin.png', link:'/work/linkedin', duration: 1234, name: 'LinkedIn', sourceUrl: 'SaaS', publishDate: '.25 years', rating: '- Backend Intern (Python/Java)' }
  ]

  private handleVisitLink(link: string) {
    if(link && link !== '') {
      const info: Card | undefined = this.work.find((item: Card) => item.link === link)
      this.$router.push({ path: link, query: { info: info ? JSON.stringify(info) : '', related: JSON.stringify(this.work.filter((item: Card) => item.link !== link)) } })
    }
  }
}
</script>

<style lang="scss">
</style>
