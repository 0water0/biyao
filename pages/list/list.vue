<template>
	<view class="page">
		<view class="search">
			<view class="input">
				<uni-icons class="icon_search" custom-prefix="iconfont" type="icon-search" size="25"></uni-icons>
				<input type="text" placeholder="请输入您想要的商品">
			</view>
		</view>
		<view class="good">
			<view class="left">
				<scroll-view style="height: 100%;" scroll-y="true">
					<view v-for="item in typeOneArr" @click="getTypeOnename(item)" :class="[item == typeonename ? 'active item_title' : 'item_title']" :key="item"> {{ item }}</view>
				</scroll-view>
			</view>
			<view class="right">
				<scroll-view style="height: 100%;" scroll-y="true">
					<view v-for="item in typeTwoArr" :key="item"> 
						<view class="typetwo_title">
							<view class="type_line">{{item}}</view>
						</view>
						<view class="good">
							<view class="type">
							</view>
							<goods :typeonename="typeonename" :typetwoname="item"></goods>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script setup> 
	import goods from '../../components/goods/goods.vue'
	import {getTypeOneName,twogoods,onegood} from '../apis/api_method.js'
	import {ref} from 'vue'
	let typeOneArr = ref([])
	let typeTwoArr = ref([])
	let Goods = ref([])
	let typeonename = ref('个护')
	let typetwoname = ref("")
	let GetTypeOne = async () =>{
		let success = await getTypeOneName()
		// console.log(success);
		typeOneArr.value = success
	}
	GetTypeOne()
	let getTypeOnename = (e) => {
		typeonename.value = e
		getTypeTwoGood()
	} 
	let getTypeTwoGood = async() => {
		let success = await twogoods(typeonename.value)
		typeTwoArr.value = success
	}
	getTypeTwoGood()
</script>

<style scoped>
@import url('./list.scss');
@import '@/static/iconfont.css';
</style>
