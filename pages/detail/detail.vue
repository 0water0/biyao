<template>
	<view>
		<view class="good_page" v-for="(item, index) in arr" :key="index">
			<view class="goods_imgs">
				<swiper style="width: 100%;" class="sw_good" :indicator-dots="true" :interval="3000" :duration="1000">
					<swiper-item v-for="(el, idx) in images" :key="idx">
						<view class="swiper-item">
							<image style="width: 100%;" :src="el" mode="widthFix"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="good_price">
				<view class="prc">
					￥{{item.priceStr}}
				</view>
				<view class="flex">
					<view class="fukuan">
						支持花呗分期付款
					</view>
					<view class="live">
						<uni-icons type="heart" />收藏
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {gooddetail} from "../apis/api_method.js"
	export default {
		data() {
			return {
				arr: [],
				images: []
			}
		},
		methods: {
			async getDetail(id) {
				gooddetail(id).then(r=>{
					console.log(r);
					this.arr = r
					// console.log(r[0]);
					// this.images = JSON.parse(r.data[0].imgs)
					// console.log(this.images);
				})
			}
		},
		created() {
		},
		onLoad(options) {
			// console.log(options);
			this.getDetail(options.id)
		}
	}
</script>

<style>
@import url('./detail.scss');
</style>
