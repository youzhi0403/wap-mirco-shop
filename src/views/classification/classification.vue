<template>
    <div class="classification">
        分类页面待开发
      <footer-nav :prop-of-router-name="navName"></footer-nav>
    </div>
</template>

<script>
import FooterNav from '../../components/footerNav/footerNav'
export default {
  name: 'classification',
  components: { FooterNav },
  data () {
    return {
      /* 导航名称 */
      navName: 'classification'
    }
  }
}
</script>

<style lang="stylus">

</style>
