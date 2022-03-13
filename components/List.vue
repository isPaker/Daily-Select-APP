<template>
	<view class="list-container">
		<navigator url="#" class="img-box" v-if="type == 'list'">
			<image :src="listImg" mode=""></image>
		</navigator>
		<view class="list-item" v-for="item in list" :key="item.id">
			<navigator url="#" class="img-item">
				<image :src="item.src" mode="seckill-nav"></image>
			</navigator>
			<view class="txt-item">
				<view class="title">{{item.title}}</view>
				<view class="price">{{item.price}}</view>
			</view>
			<view class="add-cart" v-if="type == 'list'" @click="addCart(item)">加入购物车</view>
			<view class="add-control" v-else-if="type == 'cart'">
				<text class="decrease">-</text>
				<text class="txt">{{number}}</text>
				<text class="increase">+</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"scrollView",
		data() {
			return {
				number: 1,
			};
		},
		props: ["type", "list", "listImg"],
		methods: {
			addCart(item){
				// console.log(item)
				this.$emit("addCart", item)
			}
		}
	}
</script>

<style scoped lang="scss">
.list-container{
	width: 100%;
	min-width: 10rem;
	// border: 1px solid #007AFF;
	.img-box{
		width: 100%;
		height: 5rem;
		image{
			width: 100%;
			height: 100%;
			border-radius: 10px;
		}
	}
	.list-item{
		width: 100%;
		height: 6rem;
		display: flex;
		flex-direction: row;
		position: relative;
		margin: 8px 0;
		background-color: #ffffff;
		// border: 1px solid #000;
		.img-item{
			display: inline-block;
			min-width: 3rem;
			height: 100%;
			flex: 1;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.txt-item{
			flex: 2;
			padding: 5px 10px;
			.title{
				font-size: 14px;
			}
			.price{
				color: #f40;
				font-size: 20px;
				position: absolute;
				bottom: 10px;
			}
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
		.add-control{
			position: absolute;
			bottom: 8px;
			right: 8px;
			font-size: 12px;
			padding: 0 8px;
			// vertical-align: middle;
			>*{
				display: inline-block;
			}
			.decrease, .increase{
				width: 25px;
				height: 25px;
				line-height: 25px;
				border-radius: 10px;
				text-align: center;
				font-size: 20px;
				font-weight: 700;
			}
			.decrease{
				border: 1px solid #eee;
				box-sizing: border-box;
			}
			.increase{
				background-color: #ffff00;
			}
			.txt{
				height: 25px;
				line-height: 25px;
				padding: 0 15px;
				font-size: 14px;
				font-weight: 700;
			}
		}
	}
}
</style>
