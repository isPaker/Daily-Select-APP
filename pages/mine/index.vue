<template>
	<view class="mine-container">
		<view class="hd-avator">
			<navigator url="#" class="avator">
				<view class="avator-img">
					<image :src="avatorImg" mode=""></image>
				</view>
				<view class="title">{{username}}</view>
			</navigator>
		</view>
		<view class="hd-nav">
			<navigator url="#" v-for="item in list" :key="item.id" class="nav-item">
				<image :src="item.src" mode=""></image>
				<view class="txt">{{item.txt}}</view>
			</navigator>
		</view>
		<view class="recommend-area">
			<view class="recommend-title">
				<image :src="hotImg" mode=""></image>
				<text>爆品推荐</text>
			</view>
			<!-- 商品列表区 -->
			<List :type="type" :list="listData" :listImg="listImg" v-if="listData.length > 0"></List>
			<Empty v-else />
		</view>
	</view>
</template>

<script>
	import List from "../../components/List.vue";
	import Empty from "../../components/Empty.vue";
	import { list } from "../../store/list.js";
	export default {
		data() {
			return {
				avatorImg: "../../static/logo.png",
				list: [
					{id:0, src:"/static/icon1.jpg",txt:"待支付"},
					{id:1, src:"/static/icon2.jpg",txt:"待取货"},
					{id:2, src:"/static/icon3.jpg",txt:"待评价"},
					{id:3, src:"/static/icon4.jpg",txt:"退款/售后"},
					{id:4, src:"/static/icon5.jpg",txt:"全部订单"}
				],
				hotImg: "../../static/hot.jpg",
				type: "list",
				listData: [],
				listImg: "",
			}
		},
		created(){
			this.listData = list[0].data;
			this.listImg = list[0].listImg;
		},
		components: {
			List,
			Empty,
		},
		computed:{
			username(){
				console.log(this.$store)
				return this.$store.state.username
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.mine-container{
	width: 100%;
	height: 100%;
	overflow-y: auto;
	// border: 1px solid #f00;
	box-sizing: border-box;
	padding: 10px;
	.hd-avator{
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		font-size: 20px;
		.avator{
			display: flex;
			flex-direction: row;
			.avator-img{
				width: 3rem;
				height: 3rem;
				margin-right: 10px;
				image{
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
			.title{
				height: 3rem;
				line-height: 3rem;
			}
		}
	}
	.hd-nav{
		background-color: #fff;
		padding: 10px;
		margin: 10px 0;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		overflow: hidden;
		.nav-item{
			width: 4rem;
			text-align: center;
			overflow: hidden;
			padding-top: 10px;
			image{
				width: 2rem;
				height: 2rem;
			}
			.txt{
				text-align: center;
				height: 2rem;
				line-height: 2rem;
			}
		}
	}
	.recommend-area{
		padding: 5px;
		margin: 10px 0;
		background-color: #fff;
		.recommend-title{
			height: 2rem;
			line-height: 2rem;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 10px;
			image{
				width: 20px;
				height: 20px;
				border-radius: 50%;
				margin-right: 10px;
			}
		}
	}
}
</style>
