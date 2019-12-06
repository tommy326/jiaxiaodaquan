<template>
	<view>
		<scroll-view class="content_box" scroll-y="true">
			<block v-for="(item,idx) in listData" :key='idx'>
				<!-- 驾校照片 -->
				<view class="photo_box">
					<!-- banner -->
					<swiper class="swiper" :current='current' circular @change='changeCurrent'>
						<block v-for="item in photoData" :key='item'>
							<swiper-item>
								<image :src="item" mode="" class="school_photo"></image>
							</swiper-item>
						</block>
					</swiper>
					<view class="photo_num">{{current + 1}}/{{photoData.length}}</view>
				</view>
				<!-- 驾校简介 -->
				<view class="school_box">
					<view class="school_name">
						{{item.schoolName}}
					</view>
					<view class="label_list">
						<view class="item">
							拿本快
						</view>
						<view class="item">
							有接送
						</view>
						<view class="item">
							自由考场
						</view>
					</view>
					<view class="introduce">
						<block v-for="n in 5" :key='n'>
							<image src="../../../static/images/icon/icon-stars-1.png" class="stars" mode=""></image>
						</block>
						<view class="score">5.0分 <text class="b">(1023人评）</text></view>
						<view class="price">￥2100</view>
						<view class="class">C1班</view>
					</view>
					<view class="address" @click="openLocation">{{item.address}}</view>
				</view>

				<!-- tabs选项卡 -->
				<view class="tabs_box">
					<block v-for="(item,idx) in tabsData" :key='idx'>
						<view class="item" :class="tabs == idx ?'active':''" @click="tapTabs" :data-idx='idx'>
							{{item}}
							<block v-if="idx == 3"><text>{{num}}</text></block>
						</view>
					</block>
				</view>

				<!-- 选项卡内容 -->
				<view class="tabs_content">
					<!-- 班型 -->
					<view class="class_list" v-if="tabs == 0">
						<block v-for="item in classListData" :key='item.name'>
							<view class="item">
								<view class="level c">
									{{item.category}}
								</view>
								<view class="class_info">
									<view class="class_name">
										{{item.name}}
									</view>
									<view class="class_data">
										<view class="label">
											自行前往
										</view>
										<view class="label">
											多人一车
										</view>
										<view class="time">
											周一到周日训练
										</view>
									</view>
								</view>
								<view class="call_btn">
									<image src="../../../static/images/icon/icon-hotline-1.png" class="img" mode=""></image>
									<text class="text">免费咨询</text>
								</view>
							</view>
						</block>
					</view>
					<!-- 教练 -->
					<view class="coach_list" v-else-if="tabs == 1">
						<block v-for="n in 5" :key='n'>
							<view class="item">
								<view class="rank">
									<!-- #ifdef H5 -->
									{{n}}
									<!-- #endif -->
									<!-- #ifdef APP-PLUS -->
									{{n+1}}
									<!-- #endif -->
								</view>
								<image src="../../../static/picture/coachAvatar.png" class="head_sculpture" mode=""></image>
								<view class="coach_info">
									<view class="name">
										周卫
									</view>
									<view class="score_box">
										<block v-for="n in 5" :key='n'>
											<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
										</block>
										<text class="text">5.0分</text>
									</view>
									<view class="score_data">
										<view class="sort">
											学员
										</view>
										<view class="text">
											462
										</view>
										<view class="line"></view>
										<view class="sort">
											教龄
										</view>
										<view class="text">
											8
										</view>
									</view>

								</view>
								<view class="atte">
									<text class="text">24小时内活跃</text>
									<image src="../../../static/images/bg/4.png" class="img" mode=""></image>
								</view>
							</view>
						</block>

					</view>
					<!-- 场地 -->
					<view class="area_list" v-else-if="tabs == 2">
						<view class="area_subTitle" v-if="areaListData.length > 0">
							训练场地
						</view>
						<block v-for="(item,idx) in areaListData" :key='item.id'>
							<view class="item" @click="tapMap(idx)">
								<image :src="item.showImg" class="img" mode=""></image>
								<view class="area_info">
									<view class="name">
										{{item.fieldName}}
									</view>
									<view class="address">
										{{item.address}}
									</view>
								</view>
								<view class="area_sort">
									<view class="sort_text">
										{{item.subject}}
									</view>
									<view class="gap">
										300m
									</view>
								</view>
							</view>
						</block>
					</view>
					<!-- 评价 -->
					<view class="assess_list" v-else-if="tabs == 3">
						<view class="menu_tabs">
							<view class="item active">
								全部
							</view>
							<view class="item">
								最新
							</view>
							<view class="item">
								好评(1001)
							</view>
							<view class="item">
								中评(5201)
							</view>
							<view class="item">
								差评(11)
							</view>
						</view>
						<view class="assess_wrap">
							<block v-for="n in 5" :key='n'>
								<view class="item">
									<view class="top_box">
										<image src="http://iph.href.lu/64x64?text=64x64" class="user_photo" mode=""></image>
										<view class="user_box">
											<view class="name">
												遇于北
											</view>
											<view class="score_box">
												<block v-for="n in 5" :key='n'>
													<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
												</block>
												<text class="text">5.0分</text>
											</view>
										</view>
										<view class="time">
											2019.10.30
										</view>
									</view>
									<view class="mid_box">
										科二总算过了，教练很负责任，最重要的就是考试时控制好离合，越慢越好，拿出驾校教练车时的感觉你就过了，越考越不紧张！
									</view>
								</view>
							</block>
						</view>
					</view>
				</view>
			</block>
		</scroll-view>
		<view class="footer_box">
			<view class="collect_box" @click="tapCollect">
				<image :src="'../../../static/images/icon/icon-collect-'+collect+'.png'" class="img" mode=""></image>
				<text class="text">{{collect == true?'已收藏':'收藏'}}</text>
			</view>
			<view class="consult_btn" @click="tapMaskOpen">免费咨询</view>
		</view>
		<view class="mask_wrap" :class="maskOpen?'show':'hide'">
			<view class="crevice" @click="tapMaskOpen"></view>
			<view class="main_wrap">
				<view class="sub_title">
					留下您的信息，我们将会与您联系
				</view>
				<form @submit="formSubmit" @reset="formReset">
					<view class="form_item">
						<view class="form_icon icon_user"></view>
						<input type="text" class="form_input" :value="user" @input='tapUser' placeholder="请输入真实姓名" placeholder-class="pla_color" />
					</view>
					<view class="form_item">
						<view class="form_icon icon_tel"></view>
						<input type="number" class="form_input" :value="tel" @input='tapTel' placeholder="请输入手机号" placeholder-class="pla_color" />
					</view>
					<view class="form_item more">
						<view class="form_icon icon_Dri"></view>
						<picker @change="bindPickerChange" class="form_input" :range="array">
							<input type="text" class="form_input" :value="Drivinglicense" placeholder="驾照类型" placeholder-class="pla_color"
							 disabled />
						</picker>
					</view>
					<view class="form_item more">
						<view class="form_icon icon_loca"></view>
						<view class="location" @click="chooseLocation" :class="location == 0?'':'location_on'">{{location == 0?'从哪出发':location}}</view>
					</view>
					<view class="hits_text">
						*请放心填写，提交即视为同意<navigator class="link" url="../../statement/statement">《个人信息保护声明》</navigator>
					</view>
					<button form-type="submit" class="form_btn">提交</button>
				</form>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				schoolId: '',
				tabs: 0,
				listData: [],
				photoData: ['http://jkdq.521che.com/uploads/schoolImage20190918/5d81db86d9662.jpg'],
				current: 0,
				tabsData: ['班型', '教练', '场地', '评价'],
				num: '2324',
				collect: false,
				classListData: [],
				areaListData: [],
				maskOpen: false,
				user: '',
				tel: '',
				Drivinglicense: '',
				array: ['C1', 'C2', 'C3', 'A1', 'A2', 'A3', 'B1', 'B2'],
				location: 0,
			}
		},
		onLoad: function(options) {
			console.log(options.id);
			this.schoolId = options.id
			//驾校信息
			uni.request({
				url: this.$Url + '/api/school/details?id=' + options.id,
				method: 'get',
				data: {},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						this.listData = res.data.msg
						let arr = [],
							data = JSON.parse(this.listData[0].showImg)
						for (let i in data) {
							data[i] = this.$Url + data[i]
							arr.push(data[i]);
						}
						if (arr.length > 0) {
							this.photoData = arr
						}
					} else {
						uni.showToast({
							icon: 'none',
							title: '网络不给力，请稍后重试',
							duration: 2000
						});
					}
				}
			});

			// 班级
			uni.request({
				url: this.$Url + '/api/school/course/list',
				method: 'get',
				data: {
					schoolId: options.id
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						this.classListData = res.data.msg
					} else {
						uni.showToast({
							icon: 'none',
							title: '网络不给力，请稍后重试',
							duration: 2000
						});
					}
				}
			});

			//场次
			uni.request({
				url: this.$Url + '/api/school/field/list',
				method: 'get',
				data: {
					schoolId: options.id
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						var arr = []
						for (let i in res.data.msg) {
							res.data.msg[i].showImg = this.$Url + res.data.msg[i].showImg
							arr.push(res.data.msg[i]);
						}
						this.areaListData = arr
					} else {
						uni.showToast({
							icon: 'none',
							title: '网络不给力，请稍后重试',
							duration: 2000
						});
					}
				}
			});
			//检查是否收藏
			if (uni.getStorageSync('logon_status') == 1) {
				uni.request({
					url: this.$Url + '/api/v1/exam/collection/check',
					method: 'POST',
					data: {
						'token': uni.getStorageSync('token'),
						'schoolId': options.id
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						if (res.data.code == 200) {
							if (res.data.msg != null) {
								this.collect = true
							} else {
								this.collect = false
							}
						} else {
							uni.showToast({
								icon: 'none',
								title: '网络不给力，请稍后重试',
								duration: 2000
							});
						}
					}
				});
			}
		},
		onNavigationBarButtonTap: function(e) {
			if (e.type == 'menu') {
				uni.showActionSheet({
					title: '',
					itemList: ['纠错', '转照片', '评价', '绑定驾校', '浏览记录', '分享'],
					success: (e) => {
						uni.showToast({
							title: "点击了第" + e.tapIndex + "个选项",
							icon: "none"
						})
					}
				})
			}
		},
		methods: {
			tapTabs: function(e) {
				this.tabs = e.currentTarget.dataset.idx
			},
			changeCurrent: function(e) {
				this.current = e.detail.current
			},
			tapCollect: function(e) {
				if (uni.getStorageSync('logon_status') == 1) {
					this.collect = !this.collect
					if (this.collect) {
						uni.request({
							url: this.$Url + '/api/v1/exam/collection/store',
							method: 'POST',
							data: {
								'token': uni.getStorageSync('token'),
								'schoolId': this.schoolId
							},
							header: {
								'content-type': 'application/x-www-form-urlencoded'
							},
							success: (res) => {
								if (res.data.code == 200) {
									uni.showToast({
										title: '收藏成功',
										duration: 1000
									});
								} else {
									uni.showToast({
										icon: 'none',
										title: '网络不给力，请稍后重试',
										duration: 2000
									});
								}
							}
						});
					} else {
						uni.request({
							url: this.$Url + '/api/v1/exam/collection/cancel',
							method: 'POST',
							data: {
								'token': uni.getStorageSync('token'),
								'schoolId': this.schoolId
							},
							header: {
								'content-type': 'application/x-www-form-urlencoded'
							},
							success: (res) => {
								if (res.data.code == 200) {
									uni.showToast({
										title: '取消成功',
										duration: 1000
									});
								} else {
									uni.showToast({
										icon: 'none',
										title: '网络不给力，请稍后重试',
										duration: 2000
									});
								}
							}
						});
					}
				} else {
					uni.navigateTo({
						url: '../../login/login?form=3'
					});
				}

			},
			openLocation: function(e) {
				uni.openLocation({
					longitude: Number(this.listData[0].coordinate.split(",")[0]),
					latitude: Number(this.listData[0].coordinate.split(",")[1]),
					name: this.listData[0].schoolName,
					address: this.listData[0].address
				})

			},
			tapMap: function(e) {
				uni.openLocation({
					longitude: Number(this.areaListData[e].coordinate.split(",")[0]),
					latitude: Number(this.areaListData[e].coordinate.split(",")[1]),
					name: this.areaListData[e].fieldName,
					address: this.areaListData[e].address
				})
			},
			tapMaskOpen: function(e) {
				this.maskOpen = !this.maskOpen
			},
			tapUser: function(e) {
				this.user = e.detail.value
			},
			tapTel: function(e) {
				this.tel = e.detail.value
			},
			bindPickerChange: function(e) {
				this.Drivinglicense = this.array[e.target.value]
			},
			chooseLocation: function() {
				uni.chooseLocation({
					success: (res) => {
						this.location = res.address
					}
				})
			},
			formSubmit: function(e) {
				console.log(this.user.length);
				if (this.user.length < 1) {
					uni.showToast({
						icon: 'none',
						title: '请输入真实姓名',
						duration: 2000
					});
				} else if (this.tel.length < 1) {
					uni.showToast({
						icon: 'none',
						title: '请输入手机号',
						duration: 2000
					});
				} else if (!(/^1[3456789]\d{9}$/.test(this.tel))) {
					uni.showToast({
						icon: 'none',
						title: '手机号码有误',
						duration: 2000
					});
				} else if (this.Drivinglicense.length < 1) {
					uni.showToast({
						icon: 'none',
						title: '请选择驾照类型',
						duration: 2000
					});
				} else if (this.location == 0) {
					uni.showToast({
						icon: 'none',
						title: '请选择地址',
						duration: 2000
					});
				} else {
					console.log(this.user, this.tel, this.Drivinglicense, this.location)
					this.maskOpen = !this.maskOpen
					uni.showToast({
						icon: 'success',
						title: '提交成功！',
						duration: 2000
					});
					uni.request({
						url: this.$Url + '/api/school/inquiry',
						method: 'GET',
						data: {
							schoolId: this.schoolId,
							name: this.user,
							start: this.location,
							phone: this.tel,
							type: this.Drivinglicense
						},
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: (res) => {
							if (res.data.code == 200) {
								uni.showToast({
									title: res.data.msg,
									duration: 1000
								});
							} else {
								uni.showToast({
									icon: 'none',
									title: '网络不给力，请稍后重试',
									duration: 2000
								});
							}
						}
					});
				}

			}
		}
	}
</script>

<style>
	.content_box {
		display: block;
		width: 100%;
		padding-bottom: 120rpx;
	}

	.footer_box {
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		width: 100%;
		height: 120rpx;
		background-color: #ffffff;
		box-shadow: 0px -1px 1px 0px rgba(0, 0, 0, 0.08);
		justify-content: space-between;
		align-items: center;
	}

	.footer_box .collect_box {
		flex: 0 0 auto;
		width: 102rpx;
		padding-top: 20rpx;
		margin-left: 120rpx;
	}

	.footer_box .collect_box .img {
		display: block;
		width: 50rpx;
		height: 46rpx;
		margin: 0 auto;
	}

	.footer_box .collect_box .text {
		display: block;
		color: #333333;
		font-size: 20rpx;
		text-align: center;
		margin-top: 5rpx;
	}

	.footer_box .consult_btn {
		flex: 0 0 auto;
		width: 300rpx;
		height: 88rpx;
		background-color: #3860ff;
		color: #f4f4f4;
		font-size: 34rpx;
		line-height: 88rpx;
		text-align: center;
		margin-right: 28rpx;
		border-radius: 44rpx;
	}

	.photo_box {
		display: block;
		width: 100%;
		height: 404rpx;
		position: relative;
		overflow: hidden;
	}

	.photo_box .swiper {
		width: 100%;
		height: 404rpx;
	}

	.photo_box .school_photo {
		display: block;
		width: 100%;
		height: 404rpx;
	}

	.photo_box .photo_num {
		position: absolute;
		right: 50rpx;
		top: 300rpx;
		z-index: 9;
		color: #ffffff;
		font-size: 30rpx
	}

	.school_box {
		display: block;
		width: 100%;
		background-color: #ffffff;
		border-radius: 40rpx 40rpx 0 0;
		position: relative;
		margin-top: -40rpx;
		padding: 40rpx 30rpx;
		box-sizing: border-box;
		border-bottom: 2rpx solid rgba(0, 0, 0, 0.08);
	}

	.school_box .school_name {
		color: #3860ff;
		font-size: 40rpx;
		font-weight: bold;
	}

	.school_box .label_list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 20rpx;
	}

	.school_box .label_list .item {
		flex: 0 0 auto;
		height: 40rpx;
		background-color: #e8f1fd;
		border-radius: 2rpx;
		padding: 0 12rpx;
		line-height: 40rpx;
		color: #3860ff;
		font-size: 26rpx;
		margin-right: 16rpx;
	}

	.school_box .introduce {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 28rpx;
		font-size: 26rpx;
		line-height: 1;
	}

	.school_box .introduce .stars {
		flex: 0 0 auto;
		width: 23rpx;
		height: 22rpx;
		margin-right: 10rpx;
	}

	.school_box .introduce .score {
		color: #333333;
		margin-left: 12rpx;
	}

	.school_box .introduce .score b {
		color: #666666;
	}

	.school_box .introduce .price {
		color: #666666;
		margin-left: 72rpx;
	}

	.school_box .introduce .class {
		color: #666666;
		margin-left: 18rpx;
	}

	.school_box .address {
		display: block;
		width: auto;
		max-width: 542rpx;
		font-size: 28rpx;
		color: #333333;
		padding-right: 30rpx;
		background: url(../../../static/images/icon/icon-more.png) no-repeat right center;
		background-size: 11rpx;
		margin-top: 28rpx;
		line-height: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.tabs_box {
		display: flex;
		width: 100%;
		height: 80rpx;
		align-items: center;
		padding-left: 32rpx;
		box-sizing: border-box;
		font-size: 34rpx;
		margin-top: 20rpx;
		color: #909090;
	}

	.tabs_box .item {
		flex: 0 0 auto;
		min-width: 136rpx;
	}

	.tabs_box .active {
		position: relative;
		color: #3860ff;
	}

	.tabs_box .active:after {
		content: '';
		display: block;
		position: absolute;
		width: 40rpx;
		height: 6rpx;
		background-color: #3860ff;
		border-radius: 3rpx;
		left: 14rpx;
		bottom: -10rpx;
	}

	.tabs_box .item:last-child {
		display: flex;
		align-items: flex-end;
	}

	.tabs_box .item:last-child text {
		flex: 0 0 auto;
		color: #929292;
		font-size: 18rpx;
		margin-left: 10rpx;
	}

	.class_list {
		margin-top: 20rpx;
	}

	.class_list .item {
		display: flex;
		width: 100%;
		height: 128rpx;
		padding: 0 32rpx;
		box-sizing: border-box;
		align-items: center;
	}

	.class_list .item .level {
		flex: 0 0 auto;
		width: 80rpx;
		height: 80rpx;
		border-radius: 10rpx;
		background: #007AFF;
		color: #ffffff;
		font-size: 44rpx;
		line-height: 80rpx;
		text-align: center;
	}

	.class_list .item .c {
		background-image: linear-gradient(-45deg,
			#fa5a5a 0%,
			#ff7676 100%),
			linear-gradient(#333334,
			#333334);
		background-blend-mode: normal,
			normal;
	}

	.class_list .item .b {
		background-image: linear-gradient(-45deg,
			#4481eb 0%,
			#04befe 100%),
			linear-gradient(#333334,
			#333334);
		background-blend-mode: normal,
			normal;
	}

	.class_list .item .a {
		background-image: linear-gradient(-45deg,
			#fa9155 0%,
			#ffda57 100%),
			linear-gradient(#333334,
			#333334);
		background-blend-mode: normal,
			normal;
	}

	.class_list .item .class_info {
		flex: 1 1 auto;
		font-size: 36rpx;
		margin: 0 20rpx;
	}

	.class_list .item .call_btn {
		flex: 0 0 auto;
		width: 96rpx;
	}

	.class_list .item .call_btn .img {
		display: block;
		width: 34rpx;
		height: 34rpx;
		margin: 0 auto;
	}

	.class_list .item .call_btn .text {
		display: block;
		font-size: 24rpx;
		color: #909090;
		margin-top: 14rpx;
	}

	.class_list .item .class_info .class_name {
		color: #202020;
	}

	.class_list .item .class_info .class_data {
		display: flex;
		font-size: 28rpx;
		align-items: center;
		color: #808080;
	}

	.class_list .item .class_info .class_data .label {
		flex: 0 0 auto;
		font-size: 22rpx;
		padding: 4rpx 8rpx;
		border-radius: 4rpx;
		border: solid 2rpx #3860ff;
		line-height: 1;
		color: #3860ff;
		margin-right: 10rpx;
	}

	.coach_list {
		margin-top: 20rpx;
	}

	.coach_list .item {
		display: flex;
		width: 100;
		height: 188rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		align-items: center;
	}

	.coach_list .item .rank {
		flex: 0 0 auto;
		color: #3860ff;
		font-size: 72rpx;
	}

	.coach_list .item .head_sculpture {
		flex: 0 0 auto;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		margin-left: 20rpx;
	}

	.coach_list .item .coach_info {
		flex: 1 1 auto;
		margin: 0 20rpx;
	}

	.coach_list .item .coach_info .name {
		color: #202020;
		font-size: 34rpx;
	}

	.coach_list .item .coach_info .score_box {
		display: flex;
		align-items: center;
	}

	.coach_list .item .coach_info .score_box .img {
		flex: 0 0 auto;
		width: 23rpx;
		height: 22rpx;
		margin-right: 10rpx;
	}

	.coach_list .item .coach_info .score_box .text {
		flex: 0 0 auto;
		color: #929292;
		font-size: 22rpx;
	}

	.coach_list .item .coach_info .score_data {
		display: flex;
		font-size: 26rpx;
		align-items: center;
	}

	.coach_list .item .coach_info .score_data .sort {
		flex: 0 0 auto;
		color: #909090;
		margin-right: 12rpx;
	}

	.coach_list .item .coach_info .score_data .text {
		flex: 0 0 auto;
		color: #333333;
	}

	.coach_list .item .coach_info .score_data .line {
		flex: 0 0 auto;
		width: 2rpx;
		height: 26rpx;
		background-color: #d9d9d9;
		margin: 0 24rpx;
	}

	.coach_list .item .atte {
		flex: 0 0 auto;
		width: 160rpx;
		color: #929292;
		font-size: 24rpx;
		text-align: right;
	}

	.coach_list .item .atte .img {
		display: inline-block;
		width: 99rpx;
		height: 90rpx;
	}

	.area_list {
		margin-top: 20rpx;
	}

	.area_list .item {
		display: flex;
		width: 100%;
		height: 160rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		align-items: center;
	}

	.area_list .item .img {
		flex: 0 0 auto;
		width: 180rpx;
		height: 112rpx;
		border-radius: 12rpx;
	}

	.area_list .item .area_info {
		flex: 1 1 auto;
		margin: 0 20rpx;
	}

	.area_list .item .area_info .name {
		color: #202020;
		font-size: 34rpx;
	}

	.area_list .item .area_info .address {
		color: #808080;
		font-size: 28rpx;
	}

	.area_list .item .area_sort {
		flex: 0 0 auto;
		text-align: right;
	}

	.area_list .item .area_sort .sort_text {
		display: inline-block;
		width: 100rpx;
		height: 32rpx;
		background-color: #fff3e5;
		border-radius: 4px;
		line-height: 32rpx;
		text-align: center;
		color: #fe8c00;
		font-size: 24rpx
	}

	.area_list .item .area_sort .gap {
		display: block;
		text-align: right;
		color: #808080;
		font-size: 28rpx
	}

	.assess_list {
		margin-top: 20rpx;
	}

	.assess_list .menu_tabs {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
		color: #666666;
		padding: 0 30rpx;
		margin-bottom: 60rpx;
	}

	.assess_list .menu_tabs .item {
		flex: 0 0 auto;
		height: 54rpx;
		border-radius: 27rpx;
		border: solid 1px #dddddd;
		line-height: 54rpx;
		text-align: center;
		padding: 0 20rpx;
	}

	.assess_list .menu_tabs .active {
		border: solid 1px #3860ff;
		background-color: #f7f9ff;
	}

	.assess_list .assess_wrap .item {
		margin: 0 0 60rpx;
	}

	.assess_list .assess_wrap .item .top_box {
		display: flex;
		width: 100%;
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	.assess_list .assess_wrap .item .top_box .user_photo {
		flex: 0 0 auto;
		width: 64rpx;
		height: 64rpx;
		background-color: #333333;
		border-radius: 50%;
	}

	.assess_list .assess_wrap .item .top_box .user_box {
		flex: 1 1 auto;
		margin: 0 20rpx;
	}

	.assess_list .assess_wrap .item .top_box .user_box .name {
		color: #333333;
		font-size: 28rpx;
	}

	.assess_list .assess_wrap .item .top_box .score_box {
		display: flex;
		align-items: center;
	}

	.assess_list .assess_wrap .item .top_box .score_box .img {
		flex: 0 0 auto;
		width: 23rpx;
		height: 22rpx;
		margin-right: 10rpx;
	}

	.assess_list .assess_wrap .item .top_box .score_box .text {
		flex: 0 0 auto;
		font-size: 22rpx;
		color: #929292;
	}

	.assess_list .assess_wrap .item .top_box .time {
		flex: 0 0 auto;
		color: #929292;
		font-size: 22rpx;
	}

	.assess_list .assess_wrap .mid_box {
		display: block;
		width: 100%;
		padding-left: 117rpx;
		box-sizing: border-box;
		color: #333333;
		font-size: 26rpx;
		margin-top: 20rpx;
		padding-right: 44rpx;
		position: relative;
	}

	.assess_list .assess_wrap .mid_box:after {
		content: '';
		display: block;
		width: 634rpx;
		height: 2rpx;
		background-color: #ebebeb;
		position: absolute;
		right: 0;
		bottom: -24rpx;
	}

	.area_subTitle {
		font-size: 34rpx;
		color: #202020;
		text-indent: 32rpx;
	}

	.mask_wrap {
		display: none;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, .5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9;
	}

	.mask_wrap .crevice {
		display: block;
		width: 100%;
		height: calc(100vh - 825rpx);
		position: absolute;
		left: 0;
		top: 0;
	}

	.mask_wrap .main_wrap {
		display: block;
		width: 100%;
		height: 825rpx;
		background-color: #ffffff;
		box-shadow: 0px 6rpx 18rpx 0px rgba(0, 0, 0, 0.04);
		border-radius: 40rpx 40rpx 0px 0px;
		position: absolute;
		left: 0;
		bottom: 0;
		padding: 75rpx 40rpx 0;
		box-sizing: border-box;
	}

	.mask_wrap .main_wrap .sub_title {
		color: #252525;
		font-size: 34rpx;
		text-align: center;
		margin-bottom: 24rpx;
		line-height: 1;
	}

	.mask_wrap .main_wrap .form_item {
		display: flex;
		width: 100%;
		height: 110rpx;
		align-items: center;
		border-bottom: 2rpx solid #ededed;

	}

	.mask_wrap .main_wrap .more {
		background: url(../../../static/images/icon/26.png) no-repeat right center;
		background-size: 14rpx 26rpx;
		padding-right: 20rpx;
		box-sizing: border-box;
	}


	.mask_wrap .main_wrap .form_item .form_icon {
		flex: 0 0 auto;
		width: 56rpx;
		height: 110rpx;
	}

	.mask_wrap .main_wrap .form_item .icon_user {
		background: url(../../../static/images/icon/22.png) no-repeat left center;
		background-size: 30rpx 30rpx;
	}

	.mask_wrap .main_wrap .form_item .icon_tel {
		background: url(../../../static/images/icon/23.png) no-repeat left center;
		background-size: 23rpx 34rpx;
	}

	.mask_wrap .main_wrap .form_item .icon_Dri {
		background: url(../../../static/images/icon/24.png) no-repeat left center;
		background-size: 32rpx 24rpx;
	}

	.mask_wrap .main_wrap .form_item .icon_loca {
		background: url(../../../static/images/icon/25.png) no-repeat left center;
		background-size: 27rpx 34rpx;
	}

	.mask_wrap .main_wrap .form_item .form_input {
		flex: 1 1 auto;
		height: 110rpx;
		font-size: 30rpx;
	}

	.mask_wrap .main_wrap .form_item .location {
		flex: 1 1 auto;
		height: 110rpx;
		line-height: 110rpx;
		font-size: 30rpx;
		color: #acacac;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.mask_wrap .main_wrap .form_item .location_on {
		color: #252525;
	}

	.pla_color {
		color: #acacac;
		line-height: 110rpx;
	}

	.mask_wrap .main_wrap .hits_text {
		color: #b8b8b8;
		font-size: 24rpx;
		line-height: 1;
		margin-top: 42rpx;
		text-align: center;
	}

	.mask_wrap .main_wrap .hits_text .link {
		display: inline-block;
		color: #317ceb;
	}

	.mask_wrap .main_wrap .form_btn {
		display: block;
		width: 552rpx;
		background-color: #317ceb;
		box-shadow: 0px 6rpx 10rpx 0px rgba(49, 124, 235, 0.16),
			inset 0px 1rpx 1rpx 0px rgba(255, 255, 255, 0.43);
		border-radius: 40rpx;
		margin: 24rpx auto;
		color: #ffffff;
	}

	.show {
		display: block;
	}

	.hide {
		display: none;
	}
</style>
