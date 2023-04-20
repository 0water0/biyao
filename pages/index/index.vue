<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">123</text>
		</view>
	</view>
</template>

<script setup>
	// import {getTypeOne} from '../apis/api.js'
	// let getStart = () => {
	// 	// let success = await getTypeOne()
	// 	// console.log(success);
	// 	getTypeOne().then(r=>{
	// 		console.log(r);
	// 	})
	// }
	// getStart()
	// export default {
	// 	data() {
	// 		return {
	// 			title: 'Hello'
	// 		}
	// 	},
	// 	onLoad() {
	// 	},
	// 	methods: {
	// 	}
	// }
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
