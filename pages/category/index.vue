<template>
	<view class="category-container">
		<!-- 搜索栏 -->
		<router-link to="/pages/search/search" class="search-area">
			<uni-icons type="search" size="20"></uni-icons>
			<view>{{searchWord}}</view>
		</router-link>
		<!-- 一级侧边栏 -->
		<Sidebar :list="sidebarList" class="sidebar-area" @clickEvent="handleClick" />
		<!-- 二级侧边栏 -->
		<Navbar class="navbar-area" :list="navbarList" @navbarItem="handleNavbar" />
		<view class="content-area">
			<List :type="type" :list="listData" :listImg="listImg" @addCart="handleAddCart" />
		</view>
	</view>
</template>

<script>
	import Sidebar from "../../components/Sidebar.vue";
	import Navbar from "../../components/Navbar.vue";
	import List from "../../components/List.vue";
	import { mapState } from "vuex";
	import { list } from "../../store/list.js";
	export default {
		data() {
			return {
				searchWord: "橘子",
				type: "list",
				current: 0,
				sidebarList: [],
				listData: [],
				listImg: "",
			}
		},
		created(){
			this.sidebarList = this.$store.state.tabList;
			this.listData = list[0].data;
			this.listImg = list[0].listImg;
		},
		computed: {
			navbarList(){
				return this.$store.state.tabList[this.current].data
			}
		},
		components: {
			Sidebar,
			Navbar,
			List,
		},
		methods: {
			handleClick(index){
				console.log(index)
				this.current = index
				this.listData = list[index].data;
				this.listImg = list[index].listImg;
			},
			handleNavbar(index){
				console.log(index)
			},
			handleAddCart(item){
				console.log(item)
				const data = this.$store.state.cartList;
				data.push(item)
				this.$store.commit("setCartList", data)
			}
		}
	}
</script>

<style scoped lang="scss">
.category-container{
	width: 100%;
	height: 100%;
	background-color: #FFFFFF;
	box-sizing: border-box;
	position: relative;
	overflow: hidden;
	.sidebar-area{
		width: 25%;
		min-width: 4rem;
	}
	.navbar-area{
		width: 75%;
		height: 34px;
		margin-left: 25%;
		padding: 0 10px 10px;
		box-sizing: border-box;
	}
	.content-area{
		width: 75%;
		height: calc(100% - 4rem - 34px);
		box-sizing: border-box;
		margin-left: 25%;
		overflow-y: auto;
		padding: 0 10px;
	}
}
.search-area{
	width: 80%;
	display: block;
	height: 2rem;
	line-height: 2rem;
	text-align: center;
	border: 1px solid #ccc;
	color: #a1a1a1;
	font-size: 14px;
	border-radius: 10px;
	box-sizing: border-box;
	margin: 1rem auto;
	>*{
		display: inline-block;
		vertical-align: middle;
		margin-left: 10px;
	}
}

</style>
