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
						<uni-icons custom-prefix="iconfont" type="icon-huabei" size="13"></uni-icons>
						支持花呗分期付款
					</view>
					<view class="live">
						<uni-icons type="heart" size="15" />收藏
					</view>
				</view>
			</view>
			<view class="supper_flex">
				<view class="supper">
					{{item.supplier}}
				</view>
				<view class="lead">
					生产周期: {{item.leadTime}}天
				</view>
			</view>
			<view class="goodtitle">
				{{item.title}}
			</view>
			<view class="goodsalePoint">
				{{item.salePoint}}
			</view>
			<view class="goodad">
				<view class="goodad_item">
					<uni-icons custom-prefix="iconfont" type="icon-wancheng" size="13" />
					<text>7天无忧退货</text>
				</view>
				<view class="goodad_item">
					<uni-icons custom-prefix="iconfont" type="icon-wancheng" size="13" />
					<text>先行赔付</text>
				</view>
				<view class="goodad_item">
					<uni-icons custom-prefix="iconfont" type="icon-wancheng" size="13" />
					<text>超时赔偿</text>
				</view>
				<view class="goodad_item">
					<uni-icons custom-prefix="iconfont" type="icon-wancheng" size="13" />
					<text>顺丰包邮</text>
				</view>
				<view class="goodad_item">
					<uni-icons type="more-filled"></uni-icons>
				</view>
			</view>
			<view class="line"></view>
			<view class="">
				
			</view>
			<view class="line"></view>
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
					this.images = JSON.parse(r[0].imgs)
				})
			}
		},
		created() {
		},
		onLoad(options) {
			this.getDetail(options.id)
		}
	}
</script>

<style>
@import url('./detail.scss');
@import "@/static/iconfont.css";
</style>
