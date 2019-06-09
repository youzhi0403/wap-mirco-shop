<template>
  <!--自助找药popup-->
    <div class="selfHelpPopup" :class="{visible:dataOfShow}">
      <div class="self-help-popup-overlay" @click.stop.prevent="hidePopup">
      </div>
      <div class="self-help-popup-wrapper visible">
        <div class="self-help-popup-left">
          <a v-for="(tab,index) in tabs" :key="index" @click.stop.prevent="selectTab(index)" :class="{active:currentIndexLeft === index}">{{tab.name}}</a>
        </div>
        <div class="self-help-popup-right">
          <div class="choose-content">
            <div class="choose-content-item" v-for="(o,index2) in item" :key="index2" @click.stop.prevent="selectItem(o,index2)" :class="{active:currentIndexRight === index2}">
              {{o.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { departments } from '../../data/selfHelp/departments'

export default {
  name: 'selfHelpPopup',
  props: {
    propOfCurrentIndexLeft: {
      type: Number,
      default () {
        return -1
      }
    },
    propOfCurrentIndexRight: {
      type: Number,
      default () {
        return -1
      }
    }
  },
  data () {
    return {
      dataOfShow: false,
      currentIndexLeft: 0, // 左侧tab的index
      currentIndexRight: -1, // 右侧内容的index
      tabs: [],
      items: [],
      item: []
    }
  },
  created: function () {
    this.currentIndexLeft = this.propOfCurrentIndexLeft
    this.currentIndexRight = this.propOfCurrentIndexRight
    for (let i = 0; i < departments.data.length; i++) {
      for (let j = 0; j < departments.data[i].childrens.length; j++) {
        this.tabs.push(departments.data[i].childrens[j])
        this.items.push(departments.data[i].childrens[j].childrens)
      }
    }
    this.item = this.items[this.currentIndexLeft] ? this.items[this.currentIndexLeft] : []
  },
  methods: {
    selectTab: function (index) {
      this.currentIndexLeft = index
      this.item = this.items[index]
      this.currentIndexRight = -1
    },
    selectItem: function (object, index2) {
      this.currentIndexRight = index2
      this.$emit('selectDepartment', object)
    },
    hidePopup: function () {
      this.dataOfShow = false
    }
  }
}
</script>

<style lang="stylus">
.selfHelpPopup
  .self-help-popup-overlay
    z-index: 199;
    width: 100%;
    height: 100%;
    position: fixed;
    max-width: 640px;
    top: 0;
    background: #000000;
    opacity: 0.65;
    display: none
  .self-help-popup-wrapper
    width: 100%;
    height: 17.83rem;
    background: #fff;
    position: fixed;
    max-width: 640px;
    top: 3rem;
    transition-property: transform;
    transition-duration: 0.3s;
    transform: translate3d(0,-200%,0);
    display: flex;
    z-index: 200;
    .self-help-popup-left
      height: 100%;
      width: 7.1rem;
      flex-basis: 7.1rem;
      background: #f6f6f6;
      overflow-y: scroll;
      a
        width: 100%;
        height: 3.03rem;
        line-height: 3.03rem;
        font-size: 0.96rem;
        color: #6f6f6f;
        text-align: center;
        display: inline-block;
        &.active
          color: #000;
          font-weight: bold;
          background: #fff;
    .self-help-popup-right
      height: 100%;
      flex: 1;
      background: #fff;
      .choose-content
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        .choose-content-item
          height: 3.03rem;
          line-height: 3.03rem;
          padding-left: 1.2rem;
          box-sizing: border-box;
          font-size: 0.96rem;
          color: #2f2f2f;
          text-align: left;
          margin-right: 1.75rem;
          &.active
            color: #ff5900;
            background: url(./med_screen_Check@2x.png) no-repeat right;
            background-size: 1rem;
  &.visible
    .self-help-popup-overlay
      display block
    .self-help-popup-wrapper
      transform: translate3d(0,0,0);
</style>
