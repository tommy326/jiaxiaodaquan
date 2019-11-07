import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
 
 //接口默认网址
 Vue.prototype.$Url = 'http://jkdq.521che.com'

//时间戳转时间
Vue.prototype.$time = Array.time || function(obj) {
	let date = new Date(obj * 1000);
	let Y = date.getFullYear();
	let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
	let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
	let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
	let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
	return Y + '年' + M + '月' + D + '日' + h + '时' + m + '分' + s + '秒';
};

//价格单位换算（万，保留两位小数）
 Vue.prototype.$Price = Array.rep || function (obj) {  
	return (parseInt(obj)/10000).toFixed(2); 
 };

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
