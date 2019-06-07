<template>
    <span class="bubble">
      {{showNum}}
    </span>
</template>

<script>
export default {
  name: 'bubble',
  props: {
    num: {
      type: Number
    }
  },
  computed: {
    showNum: function () {
      if (this.num > 99) {
        return '99+'
      } else {
        return this.num
      }
    }
  }

}
</script>

<style lang="stylus">
.bubble
  background: #fff;
  min-width: .6rem;
  display: block;
  text-align: center;
  color: #ff5900;
  font-style: normal;
  font-size: 0.8rem;
  min-width: .6rem;
  padding: 0 0.2rem;
  height: 1rem;
  line-height: 1rem;
  border-radius: 1rem;
</style>
