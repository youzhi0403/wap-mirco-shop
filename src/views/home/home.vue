<template>
    <div class="home">
      <home-search></home-search>
      <footer-nav :prop-of-router-name="navName"></footer-nav>
    </div>
</template>

<script>
import FooterNav from '../../components/footerNav/footerNav'
import HomeSearch from '../../components/homeSearch/homeSearch'
export default {
  name: 'home',
  components: { HomeSearch, FooterNav },
  data () {
    return {
      /* 导航名称 */
      navName: 'home'
    }
  }
}
</script>

<style lang="stylus">

</style>
