<template>
  <div>
    <div class="headerMobile">
      <div class="headerMobile__hamburger headerMobile__iconBox">
        <fa icon="bars" class="headerMobile__icon"></fa>
      </div>
      <div class="headerMobile__logo"></div>
      <div class="headerMobile__iconBox">
        <fa icon="search" class="headerMobile__icon headerMobile__icon--search"></fa>
      </div>
    </div>
    <div class="header__bg">
      <div class="container">
        <div class="header">
          <div class="header__item" v-for="(item, index) in headers" :key="item.concat(index.toString())">{{ item }}</div>
        </div>
      </div>
    </div>
    <div class="search__bg">
      <div class="search container">
        <div class="search__logo" @click="$router.push('/'); tab = 0"></div>
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
            <div class="link__dropdown" v-show="dropdown.about">v1.0.0 - inspired by <a href="https://pornhub.com" target="_blank">Pornhub.com</a></div>  
          </button>
          <button class="link" @click="handleToggleDropdown($event, 'contact')">
            Contact
            <div class="link__dropdown" v-show="dropdown.contact">
              <div class="link__dropdownChild">
                Email: <a href="mailto:keiko15678@gmail.com?subject:work-inquiries&body=work-inquiries">keiko15678@gmail.com</a>
              </div>
              <div class="link__dropdownChild--last">
                Phone: <a href="javascript:;">+8869168918091</a>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="tabs__bg">
      <div class="tabs container">
        <div class="tabs__item" v-for="item in tabs" :key="item.id" :class="{ 'tabs__item--current': tab === item.id }" @click="handleUpdateTab(item.id, item.route)">
          {{ item.name }}
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

interface links {
  [index: number]: string
}

interface tab {
  name: string,
  id: number,
  route: string
}

@Component({
  layout: 'default',
})
export default class Index extends Vue {
  private query: string = ''

  private tabShow: boolean = false

  private tab: number = 999

  private tabs: Array<tab> = [
    { name: 'experience', id: 0, route: '/' },
    { name: 'projects', id: 1, route: '/projects' },
    { name: 'skillset', id: 2, route: '/skillset' },
    { name: 'background', id: 3, route: '/background' }
  ]

  private headers: Array<string> = [
    'THIS',
    'SITE',
    'IS',
    'FOR',
    'PORTFOLIO',
    'SHOWCASE',
    'AND',
    'DEMONSTRATION',
    'PURPOSES',
    'ONLY',
  ]

  private map: links = {
    0: 'https://github.com/keiko15678',
    1: 'https://www.linkedin.com/in/keiko-chuang-8185a71a3/'
  }

  private handleUpdateTab(tab: number, route: string): void {
    this.tab = tab
    this.$router.push(route)
    window.localStorage.setItem('tab', tab.toString())
  }

  private handleExternalLink(id: number): void {
    window.open(this.map[id], '_blank')
  }

  private handleSearch(): void {}

  private dropdown: any = {
    about: false,
    contact: false
  }

  private handleToggleDropdown($event: Event, name: string): void {
    $event.stopPropagation()
    Object.keys(this.dropdown).forEach((item: string) => {
      if(item !== name) {
        this.dropdown[item] = false
      }
    })
    this.dropdown[name] = !this.dropdown[name]
  }

  @Watch('$route.path')
  onPathChange(val: string): void {
    console.log(val)
    // this.processTabChange(val)
  }

  private processTabChange(route: string): void {
    const tab: string | null = window.localStorage.getItem('tab')
    if(route === '/' || route === '/projects' || route === '/skillset' || route === '/background') {
      this.tabShow = true
    }
    if(tab !== null && this.tabShow) {
      this.tab = Number(tab)
      const routeObj = this.tabs.find((item: tab) => item.id === Number(tab))
      if(routeObj) {
        this.$router.push(routeObj.route)
      }
    }
  }

  private mounted(): void {
    const route: string = this.$route.path
    this.processTabChange(route)
  }
}
</script>
