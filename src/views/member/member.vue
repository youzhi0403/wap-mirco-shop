<template>
    <div class="member">
      会员中心待开发
      <footer-nav :prop-of-router-name="navName"></footer-nav>
    </div>
</template>

<script>
import FooterNav from '../../components/footerNav/footerNav'
export default {
  name: 'member',
  components: { FooterNav },
  data () {
    return {
      /* 导航名称 */
      navName: 'member'
    }
  }
}
</script>

<style lang="stylus">

</style>
