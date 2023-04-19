<template>
	<view>
		{{typeonename}}
		<!-- {{typetwoname}} -->
		<button>123</button>
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
import {onegood} from '../../apis/api_method.js'
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
		  console.log(this.data.arr);
	  }
  }
 //  mounted() {
	// let getGood = async() => {
	// 	let success = await onegood(this.$props.typeonename, this.$props.typetwoname)
	// 	this.data.arr = success.data
	// }
	// getGood()
 //  }
 }
</script>

<style>

</style>