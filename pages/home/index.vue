<template>
	<view class="home-container">
		<view class="container">
			<view class="swiper-wrap">
				<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item v-for="item in swiperImg" :key="item.id">
						<navigator url="#" class="swiper-nav">
							<image :src="item.src" mode="scaleToFill"></image>
						</navigator>
					</swiper-item>
				</swiper>
			</view>
			<!-- 秒杀区 -->
			<view class="seckill-wrap">
				<view class="seckill-left">
					<view class="txt title">特价秒杀</view>
					<view class="txt">10:00:00</view>
					<view class="clock">
						<image src="../../static/clock.jpg" mode=""></image>
					</view>
				</view>
				<view class="seckill-right">
					<view class="seckill-img-item" v-for="item in seckillImg" :key="item.id">
						<navigator url="#" class="seckill-nav">
							<image :src="item.src" mode="scaleToFill"></image>
							<text class="txt-price">{{item.price}}</text>
						</navigator>
					</view>
				</view>
			</view>
			<!-- 商品展示区 -->
			<view class="goods-wrap">
				<view class="goods-item" v-for="item in goodsListImg" :key="item.id">
					<navigator url="#" class="goods-nav">
						<image :src="item.src" mode=""></image>
						<text class="title">{{item.title}}</text>
						<text class="price">{{item.price}}</text>
					</navigator>
					<view class="add-cart">加入购物车</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from "vuex";
	export default {
		data() {
			return {
				
			}
		},
		created(){
			this.$store.dispatch("setSwiperImg")
			this.$store.dispatch("setSeckillImg")
			this.$store.dispatch("setListImg")
		},
		computed: mapState(["swiperImg", "goodsListImg", "seckillImg"]),
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.home-container{
	width: 100%;
	height: 100%;
	box-sizing: border-box;
}
.container{
	padding-bottom: 50px;
	.swiper-wrap{
		width: 100%;
		margin-bottom: 15rpx;
		image, .swiper-nav{
			width: 100%;
		}
	}
	.seckill-wrap{
		width: 100%;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		padding: 10px 0;
		margin-bottom: 15rpx;
		.seckill-left{
			// border: 1px solid #000;
			flex: 1;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			border-right: 1px solid #ccc;
			image{
				width: 2.5rem;
				height: 2.5rem;
			}
			.txt{
				text-align: center;
				color: #969696;
			}
			.title{
				min-width: 75px;
				height: 30px;
				line-height: 30px;
				font-weight: 700;
				font-size: 1rem;
				color: #000000;
			}
			.clock{
				text-align: center;
			}
		}
		.seckill-right{
			flex: 4;
			// border: 1px solid #f00;
			display: flex;
			flex-direction: row;
			overflow: hidden;
			.seckill-nav{
				width: 100%;
				height: 100%;
			}
			image{
				width: 100%;
				height: 100%;
				max-width: 200px;
			}
			.seckill-img-item{
				// border: 1px solid #00f;
				flex: 1;
				padding: 5px 10px;
				text-align: center;
				position: relative;
				.txt-price{
					width: 50px;
					height: 20px;
					font-weight: 700;
					background-color: #e8e873;
					color: #f40;
					position: absolute;
					bottom: 0;
					left: 50%;
					transform: translateX(-50%);
					text-align: center;
					border-radius: 6px;
				}
			}
		}
	}
	.goods-wrap{
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		// border: 1px solid #000;
		.goods-item{
			width: 10rem;
			height: 12rem;
			background-color: #ffffff;
			position: relative;
			margin-bottom: 10px;
			border-radius: 10px;
			.goods-nav{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				.title{
					font-size: 1rem;
					font-weight: 700;
					height: 1rem;
					line-height: 1rem;
					padding: 5px;
				}
				.price{
					font-size: 20px;
					font-weight: 700;
					color: #f40;
					height: 2rem;
					line-height: 2rem;
					padding: 5px;
				}
			}
			image{
				width: 100%;
				height: 8rem;
				border-radius: 10px 10px 0 0;
			}
			.add-cart{
				position: absolute;
				bottom: 8px;
				right: 8px;
				font-size: 12px;
				padding: 0 8px;
				border-radius: 8px;
				background-color: #ffff00;
			}
		}
	}
}
</style>
