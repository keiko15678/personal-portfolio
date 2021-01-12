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
    <BaseTitleBar label="Languages & Runtimes" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in lang" :key="item.id" />
        </div>
      </div>
    </div>
    <BaseTitleBar label="Javascript Frameworks & Tools" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in tools" :key="item.id" />
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
    BaseCard,
  },
})
export default class Projects extends Vue {
  private lang: Array<Card> = [
    {
      id: 0,
      imageUrl: '/ts.jpg',
      link: '',
      duration: 1234,
      name: 'Typescript',
      sourceUrl: '2+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 1,
      imageUrl: '/js.jpg',
      link: '',
      duration: 1234,
      name: 'Javascript (ES6+)',
      sourceUrl: '3+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 2,
      imageUrl: '/nodejs.png',
      link: '',
      duration: 1234,
      name: 'Node.js',
      sourceUrl: '3+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 3,
      imageUrl: '/denojs.png',
      link: '',
      duration: 1234,
      name: 'Deno.js',
      sourceUrl: '.5 years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 4,
      imageUrl: '/sass.jpg',
      link: '',
      duration: 1234,
      name: 'Sass',
      sourceUrl: '3+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 5,
      imageUrl: '/html5.jpg',
      link: '',
      duration: 1234,
      name: 'HTML 5',
      sourceUrl: '3+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 6,
      imageUrl: '/python.png',
      link: '',
      duration: 1234,
      name: 'Python',
      sourceUrl: '1+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 7,
      imageUrl: '/netcore.png',
      link: '',
      duration: 1234,
      name: '.NET Core Web API',
      sourceUrl: '.5 years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 8,
      imageUrl: '/php.jpg',
      link: '',
      duration: 1234,
      name: 'PHP',
      sourceUrl: '1+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
  ]

  private db: Array<Card> = [
    {
      id: 9,
      imageUrl: '/mysql.png',
      link: '',
      duration: 1234,
      name: 'mySQL',
      sourceUrl: '3+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 10,
      imageUrl: '/postgres.png',
      link: '',
      duration: 1234,
      name: 'PostgresSQL',
      sourceUrl: '2+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 11,
      imageUrl: '/firebase.png',
      link: '',
      duration: 1234,
      name: 'Google Firebase',
      sourceUrl: '1+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 12,
      imageUrl: '/mongodb.png',
      link: '',
      duration: 1234,
      name: 'MongoDB',
      sourceUrl: '2+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
  ]

  private cloud: Array<Card> = [
    {
      id: 13,
      imageUrl: '/azure.png',
      link: '',
      duration: 1234,
      name: 'Azure',
      sourceUrl: '2+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 14,
      imageUrl: '/azuredevops.png',
      link: '',
      duration: 1234,
      name: 'Azure Devops',
      sourceUrl: '2+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 15,
      imageUrl: '/aws.png',
      link: '',
      duration: 1234,
      name: 'AWS',
      sourceUrl: '2+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 16,
      imageUrl: '/docker.jpg',
      link: '',
      duration: 1234,
      name: 'Docker',
      sourceUrl: '2+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 17,
      imageUrl: '/k8s.png',
      link: '',
      duration: 1234,
      name: 'Kubernetes',
      sourceUrl: '.5 years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 18,
      imageUrl: '/gh-actions.png',
      link: '',
      duration: 1234,
      name: 'Github Actions',
      sourceUrl: '1+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 19,
      imageUrl: '/jenkins.png',
      link: '',
      duration: 1234,
      name: 'Jenkins',
      sourceUrl: '2+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 20,
      imageUrl: '/travisci.jpg',
      link: '',
      duration: 1234,
      name: 'TravisCI',
      sourceUrl: '1+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
  ]

  private tools: Array<Card> = [
    {
      id: 21,
      imageUrl: '/vue2.jpg',
      link: '',
      duration: 1234,
      name: 'Vue 2',
      sourceUrl: '3+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 22,
      imageUrl: '/vue3.png',
      link: '',
      duration: 1234,
      name: 'Vue 3',
      sourceUrl: '.3 years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 23,
      imageUrl: '/react.png',
      link: '',
      duration: 1234,
      name: 'React',
      sourceUrl: '2+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 24,
      imageUrl: '/webpack.jfif',
      link: '',
      duration: 1234,
      name: 'Webpack 4+',
      sourceUrl: '3+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 25,
      imageUrl: '/eslint.png',
      link: '',
      duration: 1234,
      name: 'ESLint',
      sourceUrl: '3+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 26,
      imageUrl: '/jest.png',
      link: '',
      duration: 1234,
      name: 'Jest',
      sourceUrl: '3+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
  ]

  private os: Array<Card> = [
    {
      id: 27,
      imageUrl: '/linux.png',
      link: '',
      duration: 1234,
      name: 'Linux/Unix (Ubuntu)',
      sourceUrl: '2+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 28,
      imageUrl: '/windows.jpg',
      link: '',
      duration: 1234,
      name: 'Windows',
      sourceUrl: '20+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
  ]

  private servers: Array<Card> = [
    {
      id: 29,
      imageUrl: '/nginx.png',
      link: '',
      duration: 1234,
      name: 'Nginx',
      sourceUrl: '2+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 30,
      imageUrl: '/apache.png',
      link: '',
      duration: 1234,
      name: 'Apache',
      sourceUrl: '1+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
  ]

  private other: Array<Card> = [
    {
      id: 31,
      imageUrl: '/agile.jpeg',
      link: '',
      duration: 1234,
      name: 'Agile Development',
      sourceUrl: '2+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
    {
      id: 32,
      imageUrl: '/ssr.png',
      link: '',
      duration: 1234,
      name: 'SEO Optimizations (SSR Solutions)',
      sourceUrl: '2+ years',
      publishDate: 3000050000000,
      rating: 99,
    },
  ]
}
</script>

<style></style>
