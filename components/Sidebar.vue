<template>
	<view class="sidebar-container">
		<view class="sidebar-item"
		 v-for="(item, index) in list"
		 :key="item.id"
		 :class="{active: current == index}"
		 :data-id="index"
		 @click="handleClick(index)"
		>
		 {{item.title}}
		</view>
	</view>
</template>

<script>
	export default {
		name:"Sidebar",
		data() {
			return {
				current: 0,
			};
		},
		props: ["list"],
		methods: {
			handleClick(index){
				this.current = index
				this.$emit("clickEvent", index)
			}
		}
	}
</script>

<style scoped lang="scss">
.sidebar-container{
	width: 100%;
	position: fixed;
	top: calc(4rem + 44px);
	left: 0;
	bottom: 50px;
	background-color: #eee;
	overflow-y: auto;
	.sidebar-item{
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		text-align: center;
		font-size: 14px;
	}
}
.active{
	background-color: #fff;
}
</style>
