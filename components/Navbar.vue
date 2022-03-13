<template>
	<view class="navbar-container">
		<scroll-view class="scroll-container"
		 scroll-x="true"
		 enable-flex="true"
		 show-scrollbar="false"
		>
			<view class="navbar-item"
			 v-for="(item, index) in list"
			 :key="item.id"
			 :class="{active: current == index}"
			 @click="handleClick(index)"
			>
				{{item.subTitle}}
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"Navbar",
		data() {
			return {
				current: 0,
			};
		},
		props: ["list"],
		methods: {
			handleClick(index){
				this.current = index;
				this.$emit("navbarItem", index)
			}
		}
	}
</script>

<style scoped lang="scss">
.navbar-container{
	width: 100%;
	overflow: hidden;
	.scroll-container{
		display: flex;
		flex-direction: row;
		white-space: nowrap;
		.navbar-item{
			height: 24px;
			line-height: 24px;
			font-size: 14px;
			display: inline-block;
			background-color: #eee;
			margin-right: 1rem;
			text-align: center;
			padding: 0 10px;
			border-radius: 8px;
			border: 1px solid #eee;
			box-sizing: border-box;
		}
		.active{
			background-color: #f6ff9d;
			border-color: #F0AD4E;
		}
	}
}
</style>
