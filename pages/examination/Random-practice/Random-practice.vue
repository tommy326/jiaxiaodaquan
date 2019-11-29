<template>
	<view>
		<!-- 题目内容 -->
		<view class="main_wrap">
			<scroll-view scroll-y="true" class="scroll_box">
				<block v-for="(item,idx) in listData" :key='idx'>
					<block v-if="item.item3 != '' && item.answer < 6">
						<view class="sub_title">
							<text class="title_type">单选</text>
							<text class="title_text">{{item.question}}</text>
						</view>
						<block v-if="item.url != ''">
							<image :src="item.url" lazy-load='true' @load='imageLoad' :class="imageShow?'show':'hide'" :style="{ width: width + 'rpx', height: height + 'rpx'}"
							 mode=""></image>
						</block>
						<radio-group @change="radioChange">
							<label class="radio_list">
								<radio value="0" style="display: none;" />
								<view class="radio_icon" :class="radioSelect == 0?'radio_icon_on':''">
									A
								</view>
								<view class="radio_text">{{item.item1}}</view>
							</label>
							<label class="radio_list">
								<radio value="1" style="display: none;" />
								<view class="radio_icon" :class="radioSelect == 1?'radio_icon_on':''">
									B
								</view>
								<view class="radio_text">{{item.item2}}</view>
							</label>
							<label class="radio_list">
								<radio value="2" style="display: none;" />
								<view class="radio_icon" :class="radioSelect == 2?'radio_icon_on':''">
									C
								</view>
								<view class="radio_text">{{item.item3}}</view>
							</label>
							<label class="radio_list">
								<radio value="3" style="display: none;" />
								<view class="radio_icon" :class="radioSelect == 3?'radio_icon_on':''">
									D
								</view>
								<view class="radio_text">{{item.item4}}</view>
							</label>
						</radio-group>
					</block>
					<block v-if="item.item3 == ''">
						<view class="sub_title">
							<text class="title_type">判断</text>
							<text class="title_text">{{item.question}}</text>
						</view>
						<block v-if="item.url != ''">
							<image :src="item.url" lazy-load='true' @load='imageLoad' :class="imageShow?'show':'hide'" :style="{ width: width + 'rpx', height: height + 'rpx' }"
							 mode=""></image>
						</block>
						<radio-group @change="judgeChange">
							<label class="radio_list">
								<radio value="0" style="display: none;" />
								<view class="radio_icon" :class="judgeSelect == 0?'radio_icon_on':''">
									A
								</view>
								<view class="radio_text">{{item.item1 != ''?item.item1:'正确'}}</view>
							</label>
							<label class="radio_list">
								<radio value="1" style="display: none;" />
								<view class="radio_icon" :class="judgeSelect == 1?'radio_icon_on':''">
									B
								</view>
								<view class="radio_text">{{item.item2 != ''?item.item2:'错误'}}</view>
							</label>
						</radio-group>
					</block>
					<block v-if="item.item3 != '' && item.answer > 6">
						<view class="sub_title">
							<text class="title_type">多选</text>
							<text class="title_text">{{item.question}}</text>
						</view>
						<block v-if="item.url != ''">
							<image :src="item.url" lazy-load='true' @load='imageLoad' :class="imageShow?'show':'hide'" :style="{ width: width + 'rpx', height: height + 'rpx' }"
							 mode=""></image>
						</block>
						<checkbox-group @change="checkboxChange">
							<label class="radio_list">
								<checkbox value="A" />
								<view class="radio_text">A. {{item.item1}}</view>
							</label>
							<label class="radio_list">
								<checkbox value="B" />
								<view class="radio_text">B. {{item.item2}}</view>
							</label>
							<label class="radio_list">
								<checkbox value="C" />
								<view class="radio_text">C. {{item.item3}}</view>
							</label>
							<label class="radio_list">
								<checkbox value="D" />
								<view class="radio_text">D. {{item.item4}}</view>
							</label>
						</checkbox-group>
						<button class="checkbox_btn" :data-index='idx' @click="tapCheckbox">提交</button>
					</block>
				</block>
			</scroll-view>
		</view>
		<!-- 底部操作 -->
		<view class="footer_box">
			<view class="item prev" @click="tapPrev">
				<text class="text">上一题</text>
			</view>
			<view class="item next" @click="tapNext">
				<text class="text">下一题</text>
			</view>
			<view class="item collect_off" :class="collect?'collect_on':''" @click="tapCollect">
				<text class="text">{{collect?'已收藏':'收藏'}}</text>
			</view>
			<view class="item answer">
				<text class="text">解答</text>
			</view>
			<view class="item scantron" @click="tapAnswer">
				<text class="text">答题卡</text>
			</view>
		</view>

		<!-- 答题卡 -->
		<view class="baffle_wrap" :class="open?'baffle_wrap_open':''">
			<view class="Close_Answer" @click="CloseAnswer"></view>
			<view class="Answer_card" :class="open?'Answer_card_open':''">
				<view class="oper_list">
					<view class="item yes">
						<text class="text">2000</text>
					</view>
					<view class="item wrong">
						<text class="text">1000</text>
					</view>
					<view class="item card" @click="CloseAnswer">
						<text class="text">{{questionId}}/{{total}}</text>
					</view>
					<view class="item collect_off" :class="collect?'collect_on':''" @click="tapCollect">
						<text class="text">{{collect?'已收藏':'收藏'}}</text>
					</view>
					<view class="item empty">
						<text class="text">清空</text>
					</view>
				</view>
				<scroll-view class="opt_wrap" scroll-y>
					<view class="opt_wrap_list">
						<block v-for="(items,index) in data" :key='index'>
							<block v-if="items.sign == 'r'">
								<view class="item on" @click="tapSelTopic" :data-questionId='items.questionId'>
									{{items.questionId}}
								</view>
							</block>
							<block v-else-if="items.sign == 'w'">
								<view class="item off" @click="tapSelTopic" :data-questionId='items.questionId'>
									{{items.questionId}}
								</view>
							</block>
							<block v-else>
								<view class="item" @click="tapSelTopic" :data-questionId='items.questionId'>
									{{items.questionId}}
								</view>
							</block>

						</block>
					</view>
				</scroll-view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				collect: false,
				subject: '',
				listData: [],
				radioSelect: '5',
				judgeSelect: '2',
				CheckboxSelect: '',
				open: false,
				questionId: 0,
				total: '',
				data: [],
				imageShow: false,
				width: '',
				height: ''
			}
		},
		onLoad(options) {
			this.subject = options.subject
			this.examData()
		},
		methods: {
			examData: function(e) {
				// 获取题目
				uni.request({
					url: this.$Url + '/api/v1/exam/study/list',
					method: 'GET',
					data: {
						'token': uni.getStorageSync('token'),
						'subject': this.subject,
						'model': uni.getStorageSync('cars_mold')
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						// 考题
						uni.showToast({
							icon: 'loading',
							title: '题目加载中...'
						});
						uni.hideToast()
						if (res.data.code == 200) {
							console.log(res.data.msg)
							var arr = []
							for (let i in res.data.msg) {
								arr.push(res.data.msg[i]);
							}
							console.log(arr);
							this.listData = arr
							this.questionId = arr[0].questionId
						} else {
							uni.showToast({
								icon: 'none',
								title: '网络不给力，请稍后重试',
								duration: 2000
							});
						}
					}
				});
				// 获取答题卡
				uni.request({
					url: this.$Url + '/api/v1/exam/study/card',
					method: 'GET',
					data: {
						'token': uni.getStorageSync('token'),
						'subject': this.subject,
						'model': uni.getStorageSync('cars_mold')
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						if (res.data.code == 200) {
							console.log()
							this.data = res.data.msg.item
							this.total = res.data.msg.item.length
						} else {
							uni.showToast({
								icon: 'none',
								title: '网络不给力，请稍后重试',
								duration: 2000
							});
						}
					}
				});
			},
			DoTitle: function(sign, choose) {
				uni.request({
					url: this.$Url + '/api/v1/exam/item/log',
					method: 'GET',
					data: {
						token: uni.getStorageSync('token'),
						subject: this.subject,
						questionId: this.questionId,
						sign: sign,
						answer: this.listData[0].answer,
						choose: choose
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {}
				});
			},
			tapCollect: function(e) {
				this.collect = !this.collect
			},
			radioChange: function(e) {
				this.radioSelect = e.target.value
				if (this.listData[0].answer - 1 == e.target.value) {
					this.DoTitle('r', this.listData[0].answer)
					uni.showModal({
						title: '温馨提示',
						content: '恭喜您答对了',
						cancelText: '解析',
						confirmText: '下一题',
						success: (res) => {
							if (res.confirm) {
								console.log('用户点击确定');
								this.radioSelect = 5
								this.examData()
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				} else {
					this.DoTitle('w', parseInt(e.target.value) + 1)
					uni.showModal({
						title: '温馨提示',
						content: '很抱歉您答错了',
						cancelText: '解析',
						confirmText: '下一题',
						success: (res) => {
							if (res.confirm) {
								console.log('用户点击确定');
								this.radioSelect = 5
								this.examData()
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
			},
			checkboxChange: function(e) {
				let str = ''
				switch (e.detail.value.join('')) {
					case 'AB':
						str = "7";
						break;
					case 'AC':
						str = "8";
						break;
					case 'AD':
						str = "9";
						break;
					case 'BC':
						str = "10";
						break;
					case 'BD':
						str = "11";
						break;
					case 'CD':
						str = "12";
						break;
					case 'ABC':
						str = "13";
						break;
					case 'ABD':
						str = "14";
						break;
					case 'ACD':
						str = "15";
						break;
					case 'BCD':
						str = "16";
						break;
					case 'ABCD':
						str = "17";
						break;
				}
				this.CheckboxSelect = str
			},
			judgeChange: function(e) {
				this.judgeSelect = e.target.value
				console.log(this.listData[0].answer)
				if (this.listData[0].answer - 1 == e.target.value) {
					this.DoTitle('r', this.listData[0].answer)
					uni.showModal({
						title: '温馨提示',
						content: '恭喜您答对了',
						cancelText: '解析',
						confirmText: '下一题',
						success: (res) => {
							if (res.confirm) {
								console.log('用户点击确定');
								this.judgeSelect = 2
								this.examData()
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				} else {
					this.DoTitle('w', parseInt(e.target.value) + 1)
					uni.showModal({
						title: '温馨提示',
						content: '很抱歉您答错了',
						cancelText: '解析',
						confirmText: '下一题',
						success: (res) => {
							if (res.confirm) {
								console.log('用户点击确定');
								this.judgeSelect = 2
								this.examData()
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
			},
			tapCheckbox: function(e) {
				if (this.listData[0].answer == this.CheckboxSelect) {
					this.DoTitle('r', this.CheckboxSelect)
					uni.showModal({
						title: '温馨提示',
						content: '恭喜您答对了',
						cancelText: '解析',
						confirmText: '下一题',
						success: (res) => {
							if (res.confirm) {
								console.log('用户点击确定');
								this.CheckboxSelect = ''
								this.examData()
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				} else {
					this.DoTitle('w', this.CheckboxSelect)
					uni.showModal({
						title: '温馨提示',
						content: '很抱歉您答错了',
						cancelText: '解析',
						confirmText: '下一题',
						success: (res) => {
							if (res.confirm) {
								console.log('用户点击确定');
								this.CheckboxSelect = ''
								this.examData()
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
			},
			tapPrev: function(e) {
				uni.request({
					url: this.$Url + '/api/v1/exam/study/change',
					method: 'GET',
					data: {
						'token': uni.getStorageSync('token'),
						'questionId': this.questionId,
						// 'subject': this.subject,
						'type': 'back',
						'model': uni.getStorageSync('cars_mold')
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						// 考题
						uni.showToast({
							icon: 'loading',
							title: '题目加载中...'
						});
						uni.hideToast()
						if (res.data.code == 200) {
							console.log(res.data.msg)
							var arr = []
							for (let i in res.data.msg) {
								arr.push(res.data.msg[i]);
							}
							console.log(arr);
							if (arr.length > 0) {
								this.listData = arr
								this.questionId = arr[0].questionId
								if (arr[0].item_log != null) {
									console.log(arr[0].item_log.choose)
									if (arr[0].item3 != '' && arr[0].answer < 6) {
										this.radioSelect = Number(arr[0].item_log.choose) - 1
									} else if (item.item3 == '') {
										this.judgeSelect = Number(arr[0].item_log.choose) - 1
									}
								} else {
									this.radioSelect = '5'
									this.judgeSelect = '2'
								}
							} else {
								uni.showToast({
									icon: 'none',
									title: '已经到顶了',
									duration: 2000
								});
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
				// 获取答题卡
				uni.request({
					url: this.$Url + '/api/v1/exam/study/card',
					method: 'GET',
					data: {
						'token': uni.getStorageSync('token'),
						'subject': this.subject,
						'model': uni.getStorageSync('cars_mold')
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						if (res.data.code == 200) {
							console.log()
							this.data = res.data.msg.item
							this.total = res.data.msg.item.length
						} else {
							uni.showToast({
								icon: 'none',
								title: '网络不给力，请稍后重试',
								duration: 2000
							});
						}
					}
				});
			},
			tapNext: function(e) {
				uni.request({
					url: this.$Url + '/api/v1/exam/study/change',
					method: 'GET',
					data: {
						'token': uni.getStorageSync('token'),
						'questionId': this.questionId,
						// 'subject': this.subject,
						'type': 'next',
						'model': uni.getStorageSync('cars_mold')
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						// 考题
						uni.showToast({
							icon: 'loading',
							title: '题目加载中...'
						});
						uni.hideToast()
						if (res.data.code == 200) {
							var arr = []
							for (let i in res.data.msg) {
								arr.push(res.data.msg[i]);
							}
							if (arr.length > 0) {
								this.listData = arr
								this.questionId = arr[0].questionId
								if (arr[0].item_log != null) {
									console.log(arr[0].item_log.choose)
									if (arr[0].item3 != '' && arr[0].answer < 6) {
										this.radioSelect = Number(arr[0].item_log.choose) - 1
									} else if (item.item3 == '') {
										this.judgeSelect = Number(arr[0].item_log.choose) - 1
									}
								} else {
									this.radioSelect = '5'
									this.judgeSelect = '2'
								}
							} else {
								uni.showToast({
									icon: 'none',
									title: '恭喜您已经做完了',
									duration: 2000
								});
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
				// 获取答题卡
				uni.request({
					url: this.$Url + '/api/v1/exam/study/card',
					method: 'GET',
					data: {
						'token': uni.getStorageSync('token'),
						'subject': this.subject,
						'model': uni.getStorageSync('cars_mold')
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						if (res.data.code == 200) {
							console.log()
							this.data = res.data.msg.item
							this.total = res.data.msg.item.length
						} else {
							uni.showToast({
								icon: 'none',
								title: '网络不给力，请稍后重试',
								duration: 2000
							});
						}
					}
				});
			},
			tapAnswer: function(e) {
				this.open = !this.open
			},
			CloseAnswer: function(e) {
				this.open = !this.open
			},
			tapSelTopic: function(e) {
				this.open = !this.open
				console.log(e)
				this.questionId = e.currentTarget.dataset.questionid
				console.log(e.currentTarget.dataset.questionid)
				uni.request({
					url: this.$Url + '/api/v1/exam/study/choose',
					method: 'GET',
					data: {
						'token': uni.getStorageSync('token'),
						'subject': this.subject,
						'questionId': this.questionId
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						uni.hideToast();
						if (res.data.code == 200) {
							console.log(res.data.msg)
							var arr = []
							for (let i in res.data.msg) {
								arr.push(res.data.msg[i]);
							}
							console.log(arr);
							this.listData = arr
							this.questionId = arr[0].questionId
							if (arr[0].item_log != null) {
								console.log(arr[0].item_log.choose)
								if (arr[0].item3 != '' && arr[0].answer < 6) {
									this.radioSelect = Number(arr[0].item_log.choose) - 1
								} else if (item.item3 == '') {
									this.judgeSelect = Number(arr[0].item_log.choose) - 1
								}
							} else {
								this.radioSelect = '5'
								this.judgeSelect = '2'
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
			},
			imageLoad: function(e) {
				console.log('image发生load事件，携带值为' + e.detail.height + e.detail.width)
				this.height = e.detail.height
				this.width = e.detail.width
				this.imageShow = true
			}
		}
	}
</script>

<style>
	.main_wrap {
		display: block;
		width: 100%;
		/* #ifndef APP-PLUS */
		height: calc(100vh - 120rpx - 44px);
		/* #endif */
		/* #ifdef APP-PLUS */
		height: calc(100vh - 120rpx);
		/* #endif */
	}

	.swiper_wrap,
	.scroll_box {
		display: block;
		width: 100%;
		height: 100%;
	}

	.scroll_box .pic {
		margin: 30rpx auto;
	}

	.footer_box {
		display: flex;
		width: 100%;
		height: 120rpx;
		box-shadow: 0px -12rpx 40rpx 0 rgba(0, 0, 0, 0.04);
		border-radius: 40rpx 40rpx 0 0;
		align-items: center;
		justify-content: space-between;
	}

	.footer_box .item {
		flex: 0 0 auto;
		width: 20%;
		height: 120rpx;
		position: relative;
		color: #929292;
	}

	.footer_box .prev {
		background: url(../../../static/images/icon/1.png) no-repeat top 27rpx center;
		background-size: 20rpx 40rpx;
	}

	.footer_box .next {
		background: url(../../../static/images/icon/2.png) no-repeat top 27rpx center;
		background-size: 20rpx 40rpx;
	}

	.footer_box .collect_off {
		background: url(../../../static/images/icon/3.png) no-repeat top 21rpx center;
		background-size: 50rpx 46rpx;
	}

	.footer_box .collect_on {
		background: url(../../../static/images/icon/4.png) no-repeat top 21rpx center;
		background-size: 50rpx 46rpx;
		color: #fe8c00;
	}

	.footer_box .answer {
		background: url(../../../static/images/icon/5.png) no-repeat top 21rpx center;
		background-size: 46rpx 46rpx;
	}

	.footer_box .scantron {
		background: url(../../../static/images/icon/6.png) no-repeat top 21rpx center;
		background-size: 40rpx 46rpx;
	}

	.footer_box .item .text {
		display: block;
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 16rpx;
		font-size: 28rpx;
		line-height: 1;
		text-align: center;
	}

	.main_wrap .sub_title {
		display: block;
		width: 100%;
		padding: 0 32rpx;
		box-sizing: border-box;
		line-height: 50rpx;
		margin: 12upx 0 30upx;
	}

	.main_wrap .sub_title .title_type {
		display: inline-block;
		width: 68rpx;
		height: 36rpx;
		background-color: #3860ff;
		border-radius: 18rpx 18rpx 4rpx 18rpx;
		font-size: 20rpx;
		color: #ffffff;
		text-align: center;
		line-height: 36rpx;
		margin-right: 20rpx;
	}

	.main_wrap .sub_title .title_text {
		font-size: 34rpx;
		color: #333333;
	}

	.main_wrap .radio_list {
		display: flex;
		padding: 22rpx 32rpx;
		box-sizing: border-box;
		color: #333333;
		font-size: 34rpx;
		justify-content: center;
	}

	.main_wrap .radio_list .radio_icon {
		flex: 0 0 auto;
		width: 56rpx;
		height: 56rpx;
		line-height: 56rpx;
		text-align: center;
		margin-right: 20rpx;
		border: solid 1px #3860ff;
		font-size: 32rpx;
		color: #3860ff;
		border-radius: 50%;
	}

	.main_wrap .radio_list .radio_icon_on {
		background-color: #3860ff;
		color: #ffffff;
	}

	.main_wrap .radio_list .radio_icon_off {
		background-color: red;
		color: #ffffff;
		border: solid 1px red;
	}

	.main_wrap .radio_list .radio_text {
		flex: 1 1 auto;
		line-height: 60rpx;
	}

	.baffle_wrap {
		display: none;
		width: 100%;
		/* #ifdef H5 */
		height: calc(100% - 44px);
		/* #endif */
		/* #ifdef APP-PLUS */
		height: 100%;
		/* #endif */
		position: fixed;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		opacity: 0;
		transition: opacity 1s, display 1s;
		-webkit-transition: opacity 1s, display 1s;
	}

	.baffle_wrap_open {
		display: block;
		opacity: 1;
	}

	.Close_Answer {
		display: block;
		width: 100%;
		height: 120rpx;
	}

	.Answer_card {
		display: block;
		width: 100%;
		height: calc(100% - 120rpx);
		background: #ffffff;
		position: absolute;
		left: 0;
		top: 100%;
		border-radius: 40rpx 40rpx 0 0;
		transition: top 2s;
		-webkit-transition: top 2s;
	}

	.Answer_card_open {
		top: 120rpx;
	}

	.Answer_card .oper_list {
		display: flex;
		width: 100%;
		height: 132rpx;
	}

	.Answer_card .oper_list .item {
		flex: 0 0 auto;
		width: 20%;
		position: relative;
		color: #929292;
	}

	.Answer_card .oper_list .item .text {
		display: block;
		width: 100%;
		line-height: 1;
		text-align: center;
		font-size: 20rpx;
		position: absolute;
		bottom: 27rpx;
		left: 0;
	}

	.Answer_card .oper_list .yes {
		background: url(../../../static/images/icon/9.png) no-repeat top 34rpx center;
		background-size: 32rpx 32rpx;
	}

	.Answer_card .oper_list .yes .text {
		color: #3860ff;
		font-size: 30rpx;
		bottom: 31rpx;
	}

	.Answer_card .oper_list .wrong {
		background: url(../../../static/images/icon/10.png) no-repeat top 34rpx center;
		background-size: 32rpx 32rpx;
	}

	.Answer_card .oper_list .wrong .text {
		font-size: 30rpx;
		bottom: 31rpx;
	}

	.Answer_card .oper_list .card {
		background: url(../../../static/images/icon/6.png) no-repeat top 28rpx center;
		background-size: 40rpx 46rpx;
	}

	.Answer_card .oper_list .collect_off {
		background: url(../../../static/images/icon/3.png) no-repeat top 28rpx center;
		background-size: 50rpx 46rpx;
	}

	.Answer_card .oper_list .collect_on {
		background: url(../../../static/images/icon/4.png) no-repeat top 28rpx center;
		background-size: 50rpx 46rpx;
		color: #fe8c00;
	}

	.Answer_card .oper_list .empty {
		background: url(../../../static/images/icon/8.png) no-repeat top 28rpx center;
		background-size: 42rpx 46rpx;
	}

	.Answer_card .opt_wrap {
		display: block;
		width: 100%;
		height: calc(100% - 132rpx);
	}

	.Answer_card .opt_wrap .sub_title {
		display: flex;
		width: 100%;
		height: 80rpx;
		background-color: #f6f6f6;
		color: #333333;
		font-size: 28rpx;
		text-indent: 33rpx;
		align-items: center;
	}

	.Answer_card .opt_wrap_list {
		display: flex;
		width: 100%;
		align-items: center;
		flex-wrap: wrap;
		padding: 15rpx;
		box-sizing: border-box;
	}

	.Answer_card .opt_wrap_list .item {
		flex: 0 0 auto;
		width: 92rpx;
		height: 92rpx;
		border: solid 1px #d9d9d9;
		border-radius: 50%;
		line-height: 92rpx;
		text-align: center;
		margin: 16rpx 12rpx;
		color: #929292;
		font-size: 28rpx;
	}

	.Answer_card .opt_wrap_list .on {
		background: rgba(235, 239, 255);
		color: #3860ff;
		border-color: rgba(235, 239, 255);
	}

	.Answer_card .opt_wrap_list .off {
		background: rgba(255, 238, 237);
		color: #ff564e;
		border-color: rgba(255, 238, 237);
	}

	.show {
		display: block;
		margin: 30rpx auto;
	}

	.hide {
		display: none;
		margin: 30rpx auto;
	}

	.checkbox_btn {
		width: 40%;
		margin-top: 50rpx;
		line-height: 2;
		background-color: #3860ff;
		color: #ffffff;
	}
</style>
