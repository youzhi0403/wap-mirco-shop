<template>
    <div class="myself">
      个人中心待开发
      <footer-nav :prop-of-router-name="navName"></footer-nav>
    </div>
</template>

<script>
import FooterNav from '../../components/footerNav/footerNav'
export default {
  name: 'myself',
  components: { FooterNav },
  data () {
    return {
      /* 导航名称 */
      navName: 'myself'
    }
  }
}
</script>

<style lang="stylus">

</style>
