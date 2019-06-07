<template>
    <span class="bubble" :class="{'type-1':bg === 'type-1','type-2':bg === 'type-2'}">
  {{showNum}}
  </span>
</template>

<script>
export default {
  name: 'bubble',
  props: {
    num: {
      type: Number
    },
    bg: {
      type: String,
      default () {
        return 'type-1'
      }
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
  min-width: .6rem;
  display: block;
  text-align: center;
  font-style: normal;
  font-size: 0.8rem;
  min-width: .6rem;
  padding: 0 0.2rem;
  height: 1rem;
  line-height: 1rem;
  border-radius: 1rem;
.type-1
  color: #ff5900;
  background: #fff;
.type-2
  color: #fff;
  background: #ff5900;
</style>
