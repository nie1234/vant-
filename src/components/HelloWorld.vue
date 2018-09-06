<template>
  <div class="hello">
    <!-- <van-button @touchstart.native.stop="show = true">
      弹出默认键盘
    </van-button>

    <van-number-keyboard
      :show="show"
      extra-key=""
      title="dfddf"
      close-button-text="完成"
      :hide-on-click-outside="true"
      @blur="show = false"
      @input="onInput"
      @delete="onDelete"
    /> -->
    <!-- <van-uploader :after-read="onRead">
      <van-icon name="photograph" />
    </van-uploader> -->
    <van-actionsheet
      v-model="show"
      :actions="actions"
      @select="onSelect"

    />dfrff
    <van-datetime-picker
      v-model="currentDate"
      type="datetime"
      :min-date="minDate"
      :max-date="maxDate"
      title="时间"
      :loading="true"
      @change="change"
      @confirm="confirm"
      @cancel="cancel"
      @click="click"
    />
    <div @click="click">dwwdded</div>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import { NumberKeyboard, Toast, Uploader, Icon, Actionsheet, DatetimePicker, Dialog, ImagePreview, AddressEdit } from 'vant'

Vue.use(NumberKeyboard).use(Uploader).use(Icon).use(Actionsheet).use(DatetimePicker).use(Dialog).use(AddressEdit)
export default {
  data () {
    return {
      show: true,
      actions: [
        {
          name: '选项'
        },
        {
          name: '选项',
          subname: '描述信息'
        },
        {
          loading: true
        },
        {
          name: '禁用选项',
          disabled: true
        }
      ],
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date(),
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市'
        },
        city_list: {
          110100: '北京市',
          110200: '县',
          120100: '天津市',
          120200: '县'
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120101: '和平区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区'
        }
      },
      searchResult: []
    }
  },
  methods: {
    onInput (value) {
      Toast(value)
    },
    onRead (file) {
      console.log(file)
    },
    onSelect (item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false
      Toast(item.name)
    },
    change (picker) {
      console.log(picker)
    },
    confirm (value) {
      console.log(value)
    },
    cancel () {
      console.log('取消')
    },
    click () {
      ImagePreview({
        images: [
          'https://img.yzcdn.cn/1.jpg',
          'https://img.yzcdn.cn/2.jpg'
        ],
        startPosition: 1,
        onClose () {
          // do something
        }
      })
    },
    onSave () {
      Toast('save')
    },
    onDelete () {
      Toast('delete')
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }]
      } else {
        this.searchResult = []
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
