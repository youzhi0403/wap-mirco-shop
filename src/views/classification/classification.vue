<template>
    <div class="classification">
      <div class="classification-container">
          <div class="left-panel">
            <div class="classification-tab hover" v-for="(item,index) in tabs" :key="index" :class="{active:index==selectedTabIndex}" @click.stop.prevent="selectTab(index)">{{item}}</div>
          </div>
          <div class="right-panel">
            <div class="advertisement">
              <img src="./advertisement.jpg">
            </div>
            <div class="classify-detail">
              <div class="classify-detail-box" v-for="(item,index) in scrollData" :key="index">
                <div class="detail-item-title">{{item.name}}</div>
                <div class="detail-item-list after">
                  <div class="list-item" v-for="(item2,index2) in item.arr" :key="index2" @click.stop.prevent="toGoods(item,index,item2,index2)">
                    <div class="list-item-img">
                      <img :src="item2.img" alt="">
                    </div>
                    <p class="list-item-text">{{item2.name}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
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
      navName: 'classification',
      classifications: [
        {
          name: '中西药品',
          arr: [
            {
              name: '感冒清热',
              arr: [
                {
                  name: '感冒解表',
                  img: ''
                },
                {
                  name: '支气管炎/咳嗽咳嗽咳嗽咳嗽',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwB7eAKJn8AACYowzFVq4756.jpg'
                },
                {
                  name: '解热镇痛',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwB-SAHRSVAAB3hlig6-Q130.jpg'
                },
                {
                  name: '清热解毒',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwCCaARyFPAABwWzJMOZ0363.jpg'
                },
                {
                  name: '咽喉炎',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwCFGAFRKdAABYLpkwNqI496.jpg'
                }
              ]
            },
            {
              name: '感冒清热',
              arr: [
                {
                  name: '感冒解表',
                  img: ''
                },
                {
                  name: '支气管炎/咳嗽咳嗽咳嗽咳嗽',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwB7eAKJn8AACYowzFVq4756.jpg'
                },
                {
                  name: '解热镇痛',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwB-SAHRSVAAB3hlig6-Q130.jpg'
                },
                {
                  name: '清热解毒',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwCCaARyFPAABwWzJMOZ0363.jpg'
                },
                {
                  name: '咽喉炎',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwCFGAFRKdAABYLpkwNqI496.jpg'
                }
              ]
            },
            {
              name: '感冒清热',
              arr: [
                {
                  name: '感冒解表',
                  img: ''
                },
                {
                  name: '支气管炎/咳嗽咳嗽咳嗽咳嗽',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwB7eAKJn8AACYowzFVq4756.jpg'
                },
                {
                  name: '解热镇痛',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwB-SAHRSVAAB3hlig6-Q130.jpg'
                },
                {
                  name: '清热解毒',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwCCaARyFPAABwWzJMOZ0363.jpg'
                },
                {
                  name: '咽喉炎',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwCFGAFRKdAABYLpkwNqI496.jpg'
                }
              ]
            },
            {
              name: '感冒清热',
              arr: [
                {
                  name: '感冒解表',
                  img: ''
                },
                {
                  name: '支气管炎/咳嗽咳嗽咳嗽咳嗽',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwB7eAKJn8AACYowzFVq4756.jpg'
                },
                {
                  name: '解热镇痛',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwB-SAHRSVAAB3hlig6-Q130.jpg'
                },
                {
                  name: '清热解毒',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwCCaARyFPAABwWzJMOZ0363.jpg'
                },
                {
                  name: '咽喉炎',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwCFGAFRKdAABYLpkwNqI496.jpg'
                }
              ]
            },
            {
              name: '感冒清热',
              arr: [
                {
                  name: '感冒解表',
                  img: ''
                },
                {
                  name: '支气管炎/咳嗽咳嗽咳嗽咳嗽',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwB7eAKJn8AACYowzFVq4756.jpg'
                },
                {
                  name: '解热镇痛',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwB-SAHRSVAAB3hlig6-Q130.jpg'
                },
                {
                  name: '清热解毒',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwCCaARyFPAABwWzJMOZ0363.jpg'
                },
                {
                  name: '咽喉炎',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwCFGAFRKdAABYLpkwNqI496.jpg'
                }
              ]
            },
            {
              name: '感冒清热',
              arr: [
                {
                  name: '感冒解表',
                  img: ''
                },
                {
                  name: '支气管炎/咳嗽咳嗽咳嗽咳嗽',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwB7eAKJn8AACYowzFVq4756.jpg'
                },
                {
                  name: '解热镇痛',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwB-SAHRSVAAB3hlig6-Q130.jpg'
                },
                {
                  name: '清热解毒',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwCCaARyFPAABwWzJMOZ0363.jpg'
                },
                {
                  name: '咽喉炎',
                  img: 'http://static.360hwj.com/group1/M00/01/F7/J2zAA1lwCFGAFRKdAABYLpkwNqI496.jpg'
                }
              ]
            }
          ]
        },
        {
          name: '医疗器械',
          arr: []
        },
        {
          name: '家居日用',
          arr: []
        },
        {
          name: '保健食品',
          arr: []
        },
        {
          name: '成人用品',
          arr: []
        },
        {
          name: '滋补品',
          arr: []
        },
        {
          name: '滋补品',
          arr: []
        },
        {
          name: '滋补品',
          arr: []
        },
        {
          name: '滋补品',
          arr: []
        },
        {
          name: '滋补品',
          arr: []
        },
        {
          name: '滋补品',
          arr: []
        },
        {
          name: '滋补品',
          arr: []
        }
      ],
      selectedTab: '',
      selectedTabIndex: 0,
      scrollData: [],
      tabs: []
    }
  },
  created () {
    for (let i = 0; i < this.classifications.length; i++) {
      this.tabs.push(this.classifications[i].name)
    }
    this.selectedTab = this.tabs[0]
    this.selectedTabIndex = 0
    this.scrollData = this.classifications[0].arr
  },
  methods: {
    selectTab: function (index) {
      this.selectedTab = this.tabs[index]
      this.selectedTabIndex = index
      this.scrollData = this.classifications[index].arr
    },
    toGoods: function (item, index, item2, index2) {
      this.$router.push({ name: 'goods' })
    }
  }
}
</script>

<style lang="stylus">
  .classification
    .classification-container
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 3.5rem;
      max-width: 640px;
      font-family: 'PingFang Medium_1';
      .left-panel
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 24%;
        color: #424242;
        overflow-y: scroll;
        background: #f6f6f6;
        font-size: 0.89rem;
        .classification-tab
          width: 100%;
          height: 3.45rem;
          line-height: 3.45rem;
          text-align: center;
          &.active
            background: #fff url(./selected_line@2x.png) left no-repeat;
            background-size: contain;
            font-weight: bold;
            font-size: 1.06rem;
            font-family: 'PingFang Bold_1';
      .right-panel
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 76%;
        overflow-y: scroll;
        background: #fff;
        padding-left: 0.69rem;
        padding-right: 0.69rem;
        box-sizing: border-box;
        .advertisement
          margin-top: 1rem;
          width: 100%;
          height: 6.21rem;
          img
            width: 100%;
            height: 100%;
        .classify-detail
          font-size: 0.82rem;
          .classify-detail-box
            width: 100%;
            .detail-item-title
              width: 100%;
              color: #2d2d2d;
              padding-top: 1.93rem;
              font-weight: 700;
              box-sizing: border-box;
              line-height: 0.82rem;
            .detail-item-list
              width: 100%;
              .list-item
                float: left;
                width: 33%;
                height: 8rem;
                .list-item-img
                  width: 3.79rem;
                  height: 3.79rem;
                  overflow: hidden;
                  background-color: #eee7e5;
                  margin: 1.03rem auto 0.69rem;
                .list-item-text
                  width: 100%;
                  text-align: center;
                  padding-bottom: 1rem;
                  box-sizing: border-box;
                  line-height: 20px;
                &:nth-child(3n+1)
                  .list-item-img
                    margin: 1.03rem 0 0.69rem 0.51rem;
                  .list-item-text
                    text-align: left;
                    padding-left: 0.82rem;
                &:nth-child(3n+3)
                  .list-item-img
                    margin: 1.03rem 0.51rem 0.69rem auto;
                  .list-item-text
                    text-align: right;
                    padding-right: 0.82rem;
</style>
