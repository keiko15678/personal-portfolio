<template>
  <div>
    <BaseTitleBar label="Work Projects" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in workProjects" :key="item.id" @click-pic="handleVisitLink(item.link)" @click-source="handleVisitLink(item.source)" />
        </div>
      </div>
    </div>
    <BaseTitleBar label="Personal Projects" />
    <div class="container">
      <div class="row">
        <div class="col result">
          <BaseCard :properties="item" v-for="item in personalProjects" :key="item.id" @click-pic="handleVisitLink(item.link)" @click-source="handleVisitLink(item.source)" />
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
  private workProjects: Array<Card> = [
    { id: 0, imageUrl: '/mayo-landing.png', link: 'https://preview-mayo-official-rg1.azurewebsites.net/', source: '', duration: 1234, name: 'MAYO Landing Site', sourceUrl: 'React + Gatsby', publishDate: 3000050000000, rating: 99 },
    { id: 1, imageUrl: '', link: '', duration: 1234, name: 'Soccer Animation Client', source: 'https://github.com/keiko15678/soccer-animation-frontend', sourceUrl: 'Vue + PixiJS', publishDate: 3000050000000, rating: 99 },
    { id: 2, imageUrl: '', link: '', duration: 1234, name: 'Soccer Animation Server', source: 'https://github.com/keiko15678/soccer-animation-server', sourceUrl: 'Node.js', publishDate: 3000050000000, rating: 99 },
    { id: 5, imageUrl: '', link: '', duration: 1234, name: 'Lasso Assessment Client + CMS', source: 'https://github.com/keiko15678/lasso-frontend', sourceUrl: 'Nuxt + Typescript', publishDate: 3000050000000, rating: 99 },
    { id: 3, imageUrl: '', link: 'https://tst-stayfun.mayohr.com', duration: 1234, name: 'STAYFUN Client', source:'', sourceUrl: 'Nuxt + Typescript', publishDate: 3000050000000, rating: 99 },
    { id: 4, imageUrl: '', link: '', duration: 1234, name: 'STAYFUN CMS', sourceUrl: 'Nuxt + Typescript', source:'https://github.com/keiko15678/ecommerce-cms-nuxt-ts', publishDate: 3000050000000, rating: 99 },
    { id: 6, imageUrl: '', link: '', duration: 1234, name: 'Forward Proxy for Http/Socket', source: 'https://github.com/keiko15678/proxy-deno-with-auth-db', sourceUrl: 'Deno + Typescript + mySQL', publishDate: 3000050000000, rating: 99 },
    { id: 7, imageUrl: '', link: '', source: 'https://github.com/keiko15678/sms-sender-android-js', duration: 1234, name: 'Chat/Messenger Client for Android (.apk)', sourceUrl: 'JS + Androidjs', publishDate: 3000050000000, rating: 99 },
    { id: 8, imageUrl: '', link: '', source: 'https://github.com/keiko15678/sms-sender-backend', duration: 1234, name: 'Chat/Messenger Backend', sourceUrl: 'Node.js + pgSQL', publishDate: 3000050000000, rating: 99 }
  ]

  private personalProjects: Array<Card> = [
    { id: 0, imageUrl: '', link: '', source: 'https://github.com/keiko15678/personal-portfolio', duration: 1234, name: 'Portfolio', sourceUrl: 'Nuxt + TS', publishDate: 3000050000000, rating: 99 },
    { id: 1, imageUrl: '/maskmap-vue.png', link: 'https://keiko15678.github.io/maskmap/', source: 'https://github.com/keiko15678/maskmap', duration: 1234, name: 'Taiwan Mask Availability Map', sourceUrl: 'Nuxt + TS', publishDate: 3000050000000, rating: 99 },
    { id: 4, imageUrl: '/calendar-vue.png', link: 'https://keiko15678.github.io/calendarapp-vue/#/', source: 'https://github.com/keiko15678/calendarapp-vue', duration: 1234, name: 'Calendar Booking Client + Backend (LINE Login)', sourceUrl: 'Vue + Node.js', publishDate: 3000050000000, rating: 99 },
    { id: 2, imageUrl: '/shop-site-vue.png', link: 'https://keiko15678.github.io/shopsite-vue/#/', source: 'https://github.com/keiko15678/shopsite-vue', duration: 1234, name: 'Mini Ecommerce Client/CMS + Backend (LINE PAY)', sourceUrl: 'Vue + Node.js', publishDate: 3000050000000, rating: 99 },
    { id: 3, imageUrl: '/hotel-booking.png', link: 'https://keiko15678.github.io/hotel-demo/', source: 'https://github.com/keiko15678/hotel-demo', duration: 1234, name: 'Hotel Booking Client', sourceUrl: 'ES6 + JQuery', publishDate: 3000050000000, rating: 99 },
    { id: 3, imageUrl: '/ecommerce-lavine.png', link: 'https://safe-ridge-34093.herokuapp.com/', source: 'https://github.com/keiko15678/ecommerce_lavine', duration: 1234, name: 'Mini Ecommerce Client + Backend (Paypal, Stripe)', sourceUrl: 'ES6 + JQuery', publishDate: 3000050000000, rating: 99 }
  ]

  private handleVisitLink(link: string) {
    if(link && link !== '') {
      window.open(link, '_blank')
    }
  }
}
</script>

<style>

</style>