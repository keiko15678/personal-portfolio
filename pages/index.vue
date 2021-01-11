<template>
  <div class="body__bg">
    <main class="body container">
      <div class="body__titleBar">
        <h3 class="body__title">全球熱門視頻</h3>
        <div class="body__titleBtn">
          <button class="link">
            <fa icon="plus" class="link__icon--small"></fa>
            <div class="link__text">更多視頻</div>
          </button>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col result">
            <div class="card" v-for="item in result" :key="item.key.id" @click="handleShowVideo(item.key.id)">
              <div class="card__pic">
                <div class="card__duration">
                  <div class="card__resolution">HD</div>
                  {{ `${Math.floor(item.duration / 60)}:${(item.duration % 60) >= 10 ? item.duration % 60 : '0' + item.duration % 60}` }}
                </div>
              </div>
              <div class="card__title">{{ item.name }}</div>
              <div class="card__author">{{ item.sourceUrl }}</div>
              <div class="card__footer">
                <div class="card__views">{{ (item.publishDate / 1000000000000).toFixed(1) }}M 次觀看</div>
                <div class="card__ratings">{{ item.rating }}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      query: '',
      result: []
    }
  }
}
</script>

<style lang="scss">
</style>
