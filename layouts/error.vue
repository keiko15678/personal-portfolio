<template>
<div class="page404">
  <div class="W100">
    <h3 class="f24">
      Error 404
    </h3>
    <h6 class="f16 f_bold">Oops! Page Not Found...</h6>
    <a href="/">Back to Home</a>
  </div>
</div>
</template>
<script>
export default {
  layout:'error',
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/utils/_variables.scss';
@import '~/assets/scss/utils/_media.scss';

@mixin pc-up() {
  @media screen and (min-width: 769px) {
    @content;
  }
}
@mixin pad() {
  @media screen and (max-width: 768px) {
    @content;
  }
}
@mixin mob() {
  @media screen and (max-width: 767px) {
    @content;
  }
}
.page404 {
  min-height: calc(100vh - 265px);
  @include mob {
    min-height: calc(100vh - 208px);
  }
}
.W100 {
  max-width: 400px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  text-align: center;
  img {
    max-width: 220px;
  }
  h3 {
    padding: 15px 0 30px 0;
    font-size: 20px;
    color: $darken;
    @include grid-lg {
      font-size: 32px;
    }
  }
  h6 {
    padding: 30px 0;
    font-size: 24px;
    color: $darken;
    @include grid-lg {
      font-size: 36px;
    }
  }
  > a {
    display: block;
    margin-top: 24px;
    color: $secondary;
  }
}
</style>
