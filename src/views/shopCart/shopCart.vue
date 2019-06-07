<template>
    <div class="shopCart">
      购物车待开发
      <footer-nav :prop-of-router-name="navName"></footer-nav>
    </div>
</template>

<script>
import FooterNav from '../../components/footerNav/footerNav'
export default {
  name: 'shopCart',
  components: { FooterNav },
  data () {
    return {
      /* 导航名称 */
      navName: 'shopCart'
    }
  }
}
</script>

<style lang="stylus">

</style>
