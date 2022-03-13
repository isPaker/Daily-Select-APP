<template>
	<view class="cart-container">
		<view class="cart-title">购物车</view>
		<view class="cart-area">
			<List :type="type" :list="cartList" v-if="cartList.length > 0"></List>
			<Empty v-else></Empty>
		</view>
	</view>
</template>

<script>
	import List from "../../components/List.vue";
	import Empty from "../../components/Empty.vue";
	import { mapState } from "vuex";
	export default {
		data() {
			return {
				type: "cart",
			}
		},
		computed: mapState(["cartList"]),
		components: {
			List,
			Empty,
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.cart-container{
	width: 100%;
	height: 100%;
	// border: 1px solid #000;
	box-sizing: border-box;
	overflow: hidden;
	.cart-title{
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		font-size: 20px;
		font-weight: 700;
		padding: 0 10px;
	}
	.cart-area{
		width: 100%;
		height: calc(100% - 3rem);
		box-sizing: border-box;
		overflow-y: auto;
	}
}
</style>
