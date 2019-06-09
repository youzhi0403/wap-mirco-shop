<template>
    <self-help-popup :prop-of-show="testValue1" v-on:selectDepartment="selectDepartment" :prop-of-current-index-left="left" :prop-of-current-index-right="right"></self-help-popup>
</template>

<script>
import SelfHelpPopup from '../../components/selfHelpPopup/selfHelpPopup'
export default {
  name: 'test-self-help-popup',
  components: { SelfHelpPopup },
  data () {
    return {
      testValue1: true,
      left: 3,
      right: 2
    }
  },
  methods: {
    selectDepartment: function (object) {
      console.log(object)
    }
  }
}
</script>

<style scoped>

</style>
