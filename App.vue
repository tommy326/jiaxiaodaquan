<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// #ifdef APP-PLUS
			// 锁定屏幕方向
			plus.screen.lockOrientation('portrait-primary'); //锁定
			// 获取imei
			plus.device.getInfo({
				success: function(e) {
					console.log('getDeviceInfo success: ' + JSON.stringify(e));
				},
				fail: function(e) {
					console.log('getDeviceInfo failed: ' + JSON.stringify(e));
				},
				
			});
			// 检测升级
			// uni.request({
			// 	url: 'https://uniapp.dcloud.io/update', //检查更新的服务器地址
			// 	data: {
			// 		appid: plus.runtime.appid,
			// 		version: plus.runtime.version,
			// 		imei: plus.device.imei
			// 	},
			// 	success: (res) => {
			// 		console.log('success', res);
			// 		if (res.statusCode == 200 && res.data.isUpdate) {
			// 			let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
			// 			// 提醒用户更新
			// 			uni.showModal({
			// 				title: '更新提示',
			// 				content: res.data.note ? res.data.note : '是否选择更新',
			// 				success: (showResult) => {
			// 					if (showResult.confirm) {
			// 						plus.runtime.openURL(openUrl);
			// 					}
			// 				}
			// 			})
			// 		}
			// 	}
			// })
			// #endif
			// 检测登录状态
			var logon_status = uni.getStorageSync('logon_status') || 0
			var cars_mold = uni.getStorageSync('cars_mold') || 'c1'
			uni.setStorageSync('logon_status', logon_status);
			uni.setStorageSync('cars_mold', cars_mold);
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {}
	}
</script>

<style>
	/*每个页面公共css */
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	/* @import './common/uni.css'; */

	.status_bar {
		display: block;
		height: var(--status-bar-height);
		width: 100%;
		background-color: #ffffff;
	}

	.top_view {
		height: var(--status-bar-height);
		width: 100%;
		position: fixed;
		background-color: #ffffff;
		top: 0;
		z-index: 999;
	}
</style>
