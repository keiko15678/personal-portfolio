<template>
  <div>
    <div class="headerMobile">
      <div class="headerMobile__hamburger headerMobile__iconBox" @click="navOpen = !navOpen">
        <fa icon="bars" class="headerMobile__icon"></fa>
      </div>
      <div class="headerMobile__logo"
        @click="$router.push('/');tab = 0"
      ></div>
      <div class="headerMobile__iconBox">
        <fa icon="search" class="headerMobile__icon headerMobile__icon--search"></fa>
      </div>
    </div>
    <transition name="slide">
      <div class="navMobile__mask" v-show="navOpen">
        <div class="navMobile">
          <div class="navMobile__item" :class="{ 'navMobile__item--current': tab === item.id }" v-for="item in tabs" :key="item.id" @click="handleUpdateTab(item.id, item.route)">{{ item.name }}</div>
        </div>
      </div>
    </transition>
    <div class="header__bg">
      <div class="container" v-if="headers.length">
        <div class="header">
          <div class="header__item" v-for="(item, index) in headers" :key="item.concat(index.toString())">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="container" v-else>
        <div class="header">
          <div class="header__item">
            THIS
          </div>
        </div>
      </div>
    </div>
    <div class="search__bg">
      <div class="search container">
        <div
          class="search__logo"
          @click="
            $router.push('/')
            tab = 0
          "
        ></div>
        <div class="search__bar">
          <input
            type="text"
            placeholder="Search 2,962,567 items..."
            class="searchBar"
            v-model="query"
            @keydown.enter="handleSearch"
          />
          <div class="searchBar__btn" @click="handleSearch">
            <fa icon="search" class="searchBar__btnIcon"></fa>
          </div>
        </div>
        <div class="search__btnBox">
          <button class="btn btn--secondary btn--first" @click="handleExternalLink(0)">
            <fa :icon="['fab', 'github']" class="btn__icon--small"></fa>
            <div class="btn__text">Github</div>
          </button>
          <button class="btn btn--primary" @click="handleExternalLink(1)">
            <fa :icon="['fab', 'linkedin']" class="btn__icon--small"></fa>
            <div class="btn__text">LinkedIn</div>
          </button>
        </div>
        <div class="search__funcBox">
          <button class="link link--first" @click="handleToggleDropdown($event, 'about')">
            About
            <div class="link__dropdown" v-show="dropdown.about">
              {{ 'v' + info.version || '1.0' }}- inspired by <a href="https://pornhub.com" target="_blank">Pornhub.com</a>
            </div>
          </button>
          <button class="link" @click="handleToggleDropdown($event, 'contact')">
            Contact
            <div class="link__dropdown" v-show="dropdown.contact">
              <div class="link__dropdownChild">
                Email:
                <a href="mailto:keiko15678@gmail.com?subject:work-inquiries&body=work-inquiries">
                  {{ info.email }}
                </a>
              </div>
              <div class="link__dropdownChild--last">Phone: <a href="javascript:;">{{ info.phone }}</a></div>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="tabs__bg">
      <div class="tabs container" v-if="tabs.length">
        <div
          class="tabs__item"
          v-for="item in tabs"
          :key="item.id"
          :class="{ 'tabs__item--current': tab === item.id }"
          @click="handleUpdateTab(item.id, item.route)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="tabs container" v-else>
        <div
          class="tabs__item"
        >
          HOME
        </div>
      </div>
    </div>
    <div class="body__bg">
      <div class="container">
        <main class="body">
          <Nuxt />
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { Card, Links, Tab, Settings, Info } from '~/types/index.ts'
import { $axios } from '~/utils/api.ts'
import { dataStore } from '~/store/index'

@Component({
  layout: 'default',
})
export default class Index extends Vue {
  private navOpen: boolean = false

  private query: string = ''

  private tabShow: boolean = false

  private static tabInit: number = 999999999

  private tab: number = Index.tabInit

  private processTabChange(route: string): void {
    const tab: string | null = window.localStorage.getItem('tab')
    if (route === '/' || route === '/projects' || route === '/skillset' || route === '/background' || route === '/blog') {
      this.tabShow = true
    }
    if (tab !== null && this.tabShow) {
      this.tab = Number(tab)
      const routeObj = this.tabs.find((item: Tab) => item.id === Number(tab))
      if (routeObj) {
        this.$router.push(routeObj.route)
      }
    }
  }

  private handleUpdateTab(tab: number, route: string): void {
    this.tab = tab
    this.$router.push({ path: route })
    window.localStorage.setItem('tab', tab.toString())
    this.navOpen = false
  }

  private handleExternalLink(id: number): void {
    window.open(this.externalLinkMap[id], '_blank')
  }

  // TODO
  private handleSearch(): void {}

  private dropdown: any = {
    about: false,
    contact: false,
  }

  private handleToggleDropdown($event: Event, name: string): void {
    $event.stopPropagation()
    Object.keys(this.dropdown).forEach((item: string) => {
      if (item !== name) {
        this.dropdown[item] = false
      }
    })
    this.dropdown[name] = !this.dropdown[name]
  }

  private get settings(): Settings {
    return dataStore.data.settings ? dataStore.data.settings : {}
  }

  private get headers(): Array<String> {
    return this.settings.headers ? this.settings.headers : []
  }

  private get tabs(): Array<Tab> {
    return this.settings.tabs ? this.settings.tabs : []
  }

  private get externalLinkMap(): Links {
    return this.settings.externalLinkMap ? this.settings.externalLinkMap : {}
  }

  private get info(): Info {
    return dataStore.data.info ? dataStore.data.info : {}
  }

  private hideScrollbarWhenLoading(loading: boolean): void {
    const body = document.querySelector('body')
    
    console.log(body)
    if(loading && body) {
      body.style.overflow = 'hidden'
    } else if(!loading && body) {
      body.style.overflow = 'auto'
    }
  }

  private timeout: any = null

  private initWelcomeMessage(): void {
    let str = 'Welcome...'
    for(let i = 0; i < str.length; i++) {
      this.timeout = setTimeout(() => {
        this.query += str[i]
      }, 500 * (i + 1))
    }
  }

  private mounted(): void {
    const route: string = this.$route.path
    this.processTabChange(route)
    this.$nextTick(async () => {
      this.$nuxt.$loading.start()
      await dataStore.sendGetExperienceRequest()
      this.$nuxt.$loading.finish()
      this.initWelcomeMessage()
    })
  }

  private beforeDestroy(): void {
    this.timeout = null
  }
}
</script>
