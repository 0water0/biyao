<template>
	<view>
		<view class="search">
			<view class="left">
				<uni-icons type="back"></uni-icons>
			</view>
			<view class="middle">
				<uni-icons class="icon_search" custom-prefix="iconfont" type="icon-search" size="25"></uni-icons>
				<input type="text" placeholder="请输入您想要的商品">
			</view>
			<view class="right">
				搜索
			</view>
		</view>
	</view>
</template>

<script setup>
	// export default {
	// 	data() {
	// 		return {
				
	// 		}
	// 	},
	// 	methods: {
			
	// 	}
	// }
</script>

<style>
	@import url('./search.scss');
@import '../../static/iconfont.css';
</style>
