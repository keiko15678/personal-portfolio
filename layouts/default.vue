<template>
  <div>
    <div class="header__bg">
      <div class="header container">
        <div class="header__item">HOME</div>
        <div class="header__item">PREVIEW</div>
        <div class="header__item">MODELHUB</div>
        <div class="header__item">SHOP</div>
        <div class="header__item">TOYS</div>
        <div class="header__item">SEXUAL WELLNESS</div>
        <div class="header__item">INSIGHTS</div>
        <div class="header__item">SITES</div>
        <div class="header__item">CN</div>
      </div>
    </div>
    <div class="search__bg">
      <div class="search container">
        <div class="search__logo"></div>
        <div class="search__bar">
          <input
            type="text"
            placeholder="搜索13,769,043個視頻"
            class="searchBar"
            v-model="query"
            @keydown.enter="handleSearch"
          />
          <div class="searchBar__btn" @click="handleSearch">
            <fa icon="search" class="searchBar__btnIcon"></fa>
          </div>
        </div>
        <div class="search__btnBox">
          <button class="btn btn--secondary btn--first">
            <fa icon="video" class="btn__icon--small"></fa>
            <div class="btn__text">上傳</div>
          </button>
          <button class="btn btn--primary">
            <fa icon="star" class="btn__icon--small"></fa>
            <div class="btn__text">升級</div>
          </button>
        </div>
        <div class="search__funcBox">
          <button class="link link--first">登錄</button>
          <button class="link">註冊</button>
        </div>
      </div>
    </div>
    <div class="tabs__bg">
      <div class="tabs container">
        <div class="tabs__item tabs__item--current" @click="$router.push('/')">
          首頁
        </div>
        <div class="tabs__item">
          視頻
        </div>
        <div class="tabs__item">
          分類
        </div>
        <div class="tabs__item">
          直播視頻
        </div>
        <div class="tabs__item">
          色情明星
        </div>
        <div class="tabs__item">
          MEET&FUCK
        </div>
        <div class="tabs__item">
          社區
        </div>
        <div class="tabs__item">
          照片及動圖
        </div>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      query: '',
      result: []
    }
  },
  methods: {
    async handleSearch() {
      // try {
      //   const result = await this.$axios.get(`/search?q=${this.query === '' ? 'sex' : this.query}`)
      //   console.log(result)
      //   if (result.data.content && result.data.content.length > 0) {
      //     this.result = result.data.content.filter(item => item.key.kind === 'PornEntry').map((item) => {
      //       item.rating = Math.round(Math.random(90, 100) * 100)
      //       return item
      //     })
      //   }
      // } catch (e) {

      // }
    },
    handleShowVideo(id: string): void {
      // this.$router.push({ name: 'view', params: { id } })
    }
  },
  async created() {
    // this.query = '69'
    // await this.handleSearch()
  }
}
</script>

<style lang="scss">
</style>
