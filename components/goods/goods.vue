<template>
	<view style="width: 100vh;">
		<view class="good_title">
			<view class="good_title_left">
				{{typetwoname}}
			</view>
			<view class="good_title_rg">
				更多>
			</view> 
		</view>
		<view class="goods_ul">
			<view class="goods_li" @click="godetail(item.Id)" v-for="(item, index) in arr" :key="index">
				<image :src="item.imageUrl" mode="widthFix"></image>
				<view class="good_name">
					{{item.title}}
				</view>
			</view>
		</view>
	</view>
</template>

<script> 
// import { onLoad,onReady } from '@dcloudio/uni-app'
// import {onMounted,defineProps} from 'vue'
// let props = defineProps()
// console.log(props);
// 	let getGood = () => {
// 			console.log(456);
// 		}
// 	 onMounted(() => {
// 		 getGood()
// 		 console.log(123);
// 	 })
// 	 onLoad(options) {
// 		 console.log(options);
// 	 }
import {onegood} from '../../pages/apis/api_method.js'
 export default {
  name:"goods",
  data() {
   return {
	   arr: []
   };
  },
  props : {
   typeonename: {
    type: String,
    default: '',
   },
   typetwoname: {
    type: String,
    default: '',
   }
  },
  methods: {
	  getGoods() {
		  // console.log(this.$props.typeonename, this.$props.typetwoname);
		  onegood(this.$props.typeonename, this.$props.typetwoname).then(r=>{
			  this.arr = r
		  })
	  },
	  godetail(id) {
		  uni.navigateTo({
		  	url: '/pages/detail/detail?id=' + id,
		  })
	  }
  },
 created() {
	 this.getGoods()
 }
 }
</script>

<style scoped>
@import url('./good.scss');
</style>