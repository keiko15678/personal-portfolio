<template>
  <div>
    <BaseTitleBar label="Concepts" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in other" :key="item.id" />
        </div>
      </div>
    </div>
    <BaseTitleBar label="Languages & Frameworks" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in lang" :key="item.id" />
        </div>
      </div>
    </div>
    <BaseTitleBar label="Databases" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in db" :key="item.id" />
        </div>
      </div>
    </div>
    <BaseTitleBar label="CI/CD Tools & Cloud Computing" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in cloud" :key="item.id" />
        </div>
      </div>
    </div>
    <BaseTitleBar label="OS" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in os" :key="item.id" />
        </div>
      </div>
    </div>
    <BaseTitleBar label="Web Servers" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in servers" :key="item.id" />
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
    BaseCard
  }
})
export default class Projects extends Vue {
  private lang: Array<Card> = [
    { id: 0, imageUrl: '/ts.jpg', link: '', duration: 1234, name: 'Typescript', sourceUrl: '2+ years', publishDate: 3000050000000, rating: 99 },
    { id: 1, imageUrl: '/js.jpg', link: '', duration: 1234, name: 'Javascript (ES6+)', sourceUrl: '3+ years', publishDate: 3000050000000, rating: 99 },
    { id: 2, imageUrl: '/vue2.jpg', link: '', duration: 1234, name: 'Vue 2', sourceUrl: '3+ years', publishDate: 3000050000000, rating: 99 },
    { id: 3, imageUrl: '/vue3.png', link: '', duration: 1234, name: 'Vue 3', sourceUrl: '.3 years', publishDate: 3000050000000, rating: 99 },
    { id: 4, imageUrl: '/react.png', link: '', duration: 1234, name: 'React', sourceUrl: '2+ years', publishDate: 3000050000000, rating: 99 },
    { id: 5, imageUrl: '/nodejs.png', link: '', duration: 1234, name: 'Node.js', sourceUrl: '3+ years', publishDate: 3000050000000, rating: 99 },
    { id: 6, imageUrl: '/denojs.png', link: '', duration: 1234, name: 'Deno.js', sourceUrl: '.5 years', publishDate: 3000050000000, rating: 99 },
    { id: 7, imageUrl: '/sass.jpg', link: '', duration: 1234, name: 'Sass', sourceUrl: '3+ years', publishDate: 3000050000000, rating: 99 },
    { id: 8, imageUrl: '/html5.jpg', link: '', duration: 1234, name: 'HTML 5', sourceUrl: '3+ years', publishDate: 3000050000000, rating: 99 },
    { id: 9, imageUrl: '/python.png', link: '', duration: 1234, name: 'Python', sourceUrl: '1+ years', publishDate: 3000050000000, rating: 99 },
    { id: 10, imageUrl: '/netcore.png', link: '', duration: 1234, name: '.NET Core Web API', sourceUrl: '.5 years', publishDate: 3000050000000, rating: 99 },
    { id: 11, imageUrl: '/php.jpg', link: '', duration: 1234, name: 'PHP', sourceUrl: '1+ years', publishDate: 3000050000000, rating: 99 },
  ]

  private db: Array<Card> = [
    { id: 0, imageUrl: '/mysql.png', link: '', duration: 1234, name: 'mySQL', sourceUrl: '3+ years', publishDate: 3000050000000, rating: 99 },
    { id: 1, imageUrl: '/postgres.png', link: '', duration: 1234, name: 'PostgresSQL', sourceUrl: '2+ years', publishDate: 3000050000000, rating: 99 },
    { id: 2, imageUrl: '/firebase.png', link: '', duration: 1234, name: 'Google Firebase', sourceUrl: '1+ years', publishDate: 3000050000000, rating: 99 }
  ]

  private cloud: Array<Card> = [
    { id: 0, imageUrl: '/azure.png', link: '', duration: 1234, name: 'Azure', sourceUrl: '2+ years', publishDate: 3000050000000, rating: 99 },
    { id: 1, imageUrl: '/azuredevops.png', link: '', duration: 1234, name: 'Azure Devops', sourceUrl: '2+ years', publishDate: 3000050000000, rating: 99 },
    { id: 2, imageUrl: '/aws.png', link: '', duration: 1234, name: 'AWS', sourceUrl: '2+ years', publishDate: 3000050000000, rating: 99 },
    { id: 3, imageUrl: '/docker.jpg', link: '', duration: 1234, name: 'Docker', sourceUrl: '2+ years', publishDate: 3000050000000, rating: 99 },
    { id: 4, imageUrl: '/k8s.png', link: '', duration: 1234, name: 'Kubernetes', sourceUrl: '.5 years', publishDate: 3000050000000, rating: 99 },
    { id: 5, imageUrl: '/jenkins.png', link: '', duration: 1234, name: 'Jenkins', sourceUrl: '2+ years', publishDate: 3000050000000, rating: 99 },
    { id: 6, imageUrl: '/travisci.jpg', link: '', duration: 1234, name: 'TravisCI', sourceUrl: '2+ years', publishDate: 3000050000000, rating: 99 }
  ]

  private os: Array<Card> = [
    { id: 0, imageUrl: '/linux.png', link: '', duration: 1234, name: 'Linux/Unix (Ubuntu)', sourceUrl: '2+ years', publishDate: 3000050000000, rating: 99 },
    { id: 1, imageUrl: '/windows.jpg', link: '', duration: 1234, name: 'Windows', sourceUrl: '20+ years', publishDate: 3000050000000, rating: 99 }
  ]

  private servers: Array<Card> = [
    { id: 0, imageUrl: '/nginx.png', link: '', duration: 1234, name: 'Nginx', sourceUrl: '2+ years', publishDate: 3000050000000, rating: 99 },
    { id: 1, imageUrl: '/apache.png', link: '', duration: 1234, name: 'Apache', sourceUrl: '1+ years', publishDate: 3000050000000, rating: 99 }
  ]

  private other: Array<Card> = [
    { id: 0, imageUrl: '/agile.jpeg', link: '', duration: 1234, name: 'Agile Development', sourceUrl: '2+ years', publishDate: 3000050000000, rating: 99 }
  ]
}
</script>

<style>

</style>