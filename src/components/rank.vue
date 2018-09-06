<template>
  <div class="root">
    <van-tabs class="tabs" v-model="active">
      <van-tab class="tab" title="日赛榜">
      </van-tab>
      <van-tab title="周赛榜">
      </van-tab>
      <van-tab title="月赛榜">
      </van-tab>
    </van-tabs>
    <div class="con">
      <div class="myself">
        <div class="ms_con">
          <img class="avatar_img" src="" alt="">
          <div class="username">fjdjdldjk</div>
          <button class="btn">立即交易</button>
          <van-row class="pai">
            <van-col span="8">
              <p class="title">当前排名</p>
              <p class="num">1289</p>
            </van-col>
            <van-col class="pai_2" span="8">
              <p class="title">当前排名</p>
              <p class="num">1289</p>
            </van-col>
            <van-col span="8">
              <p class="title">当前排名</p>
              <p class="num">1289</p>
            </van-col>
          </van-row>
        </div>
      </div>
      <div class="lists">
        <div class="list" v-for="(item, index) in 10" :key="index">
          <div class="top">
            <div class="ranking">1</div>
            <div class="avatar_img avatars"></div>
            <div class="text">
              <p>ajfdkfjdl</p>
              <p class="reward">预计奖励 1BTC</p>
            </div>
            <button class="att">＋ 关注</button>
          </div>
          <div class="bottom">
            <div class="quxian"></div>
            <div class="right">
              <van-row>
                <van-col class="col_1" span="5">日收益率</van-col>
                <van-col class="col_2" span="19">13%</van-col>
              </van-row>
              <van-row>
                <van-col class="col_1" span="5">日收益率</van-col>
                <van-col class="col_2" span="19">13%</van-col>
              </van-row>
              <van-row>
                <van-col class="col_1" span="5">日收益率</van-col>
                <van-col class="col_2" span="19">13%</van-col>
              </van-row>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
import Vue from 'vue'
import { Tab, Tabs, Row, Col } from 'vant'

Vue.use(Tab).use(Tabs).use(Row).use(Col)

export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>
<style lang="less" scoped>
@import url('./rank.less');
</style>
