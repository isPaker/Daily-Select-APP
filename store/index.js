import Vue from "vue";
import Vuex from "vuex";
import { swiperImg, goodsListImg, seckillImg } from "./home.js"
import { tabList } from "./category.js"
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		username: "热白开味道",
		swiperImg: [],
		goodsListImg: [],
		seckillImg: [],
		tabList: tabList,
		cartList: [],
	},
	mutations:{
		setSwiperImg(state, payload){
			state.swiperImg = payload;
		},
		setListImg(state, payload){
			state.goodsListImg = payload;
		},
		setSeckillImg(state, payload){
			state.seckillImg = payload;
		},
		setCartList(state, payload){
			state.cartList = payload;
		}
	},
	actions:{
		setSwiperImg(ctx){
			ctx.commit("setSwiperImg",swiperImg)
		},
		setListImg(ctx){
			ctx.commit("setListImg", goodsListImg)
		},
		setSeckillImg(ctx){
			ctx.commit("setSeckillImg", seckillImg)
		},
	}
})
export default store;