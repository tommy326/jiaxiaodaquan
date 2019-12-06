<script>
	export default {
		globalData: {
			
		},
		onLaunch: function() {
			console.log('App Launch')
			// #ifdef APP-PLUS
			// 锁定屏幕方向
			plus.screen.lockOrientation('portrait-primary'); //锁定
			console.log('版本号'+ plus.runtime.version);
			// 获取imei
			// plus.device.getInfo({
			// 	success: function(e) {
			// 		console.log('getDeviceInfo success: ' + JSON.stringify(e));
			// 	},
			// 	fail: function(e) {
			// 		console.log('getDeviceInfo failed: ' + JSON.stringify(e));
			// 	},
				
			// });
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
			var statement = uni.getStorageSync('statement') || 0
			var logon_status = uni.getStorageSync('logon_status') || 0
			var cars_mold = uni.getStorageSync('cars_mold') || 'c1'
			uni.setStorageSync('statement', statement);
			uni.setStorageSync('logon_status', logon_status);
			uni.setStorageSync('cars_mold', cars_mold);
			console.log(uni.getStorageSync('statement'))
		},
		onShow: function() {
			console.log('App Show')
			if (uni.getStorageSync('statement') == 0) {
				uni.showModal({
					title: '驾考隐私声明',
					content: '驾考大全APP(以下简称驾考)为您提供登录、注册、浏览等功能。驾考非常重视用户的个人信息和隐私保护，鉴于网络的特性，驾考将无可避免地与您产生直接或间接的互动关系，故特此说明驾考对用户个人信息的收集、使用和保护政策',
					confirmText: '同意',
					showCancel:false,
					success: function(res) {
						if (res.confirm) {
							uni.setStorageSync('statement', 1);
						}
					}
				});
			}

			
		},
		onHide: function() {
			console.log('App Hide')
		}
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
