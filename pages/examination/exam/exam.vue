<template>
	<view>
		<!-- 做题 -->
		<view class="main_wrap">
			<swiper class="swiper_wrap" :current='current' @change='change'>
				<block v-for="(item,idx) in listData" :key='idx'>
					<swiper-item class="swiper_item">
						<scroll-view scroll-y="true" class="scroll_box">
							<block v-if="item.item3 != '' && item.answer < 9">
								<view class="sub_title">
									<text class="title_type">单选</text>
									<text class="title_text">{{item.question}}</text>
								</view>
								<block v-if="item.url != ''">
									<rich-text :nodes="item.url"></rich-text>
								</block>
								<radio-group @change="radioChange">
									<label class="radio_list">
										<radio value="1" class="radio_icon" :disabled="disabled" />
										<view class="radio_text">A. {{item.item1}}</view>
									</label>
									<label class="radio_list">
										<radio value="2" class="radio_icon" :disabled="disabled" />
										<view class="radio_text">B. {{item.item2}}</view>
									</label>
									<label class="radio_list">
										<radio value="3" class="radio_icon" :disabled="disabled" />
										<view class="radio_text">C. {{item.item3}}</view>
									</label>
									<label class="radio_list">
										<radio value="4" class="radio_icon" :disabled="disabled" />
										<view class="radio_text">D. {{item.item4}}</view>
									</label>
								</radio-group>
							</block>
							<block v-if="item.item3 == ''">
								<view class="sub_title">
									<text class="title_type">判断</text>
									<text class="title_text">{{item.question}}</text>
								</view>
								<block v-if="item.url != ''">
									<rich-text :nodes="item.url"></rich-text>
								</block>
								<radio-group @change="judgeChange">
									<label class="radio_list">
										<radio value="1" class="radio_icon" :disabled="disabled" />
										<view class="radio_text">{{item.item1 != ''?item.item1:'正确'}}</view>
									</label>
									<label class="radio_list">
										<radio value="2" class="radio_icon" :disabled="disabled" />
										<view class="radio_text">{{item.item2 != ''?item.item2:'错误'}}</view>
									</label>
								</radio-group>
							</block>
							<block v-if="item.item3 != '' && item.answer > 9">
								<view class="sub_title">
									<text class="title_type">多选</text>
									<text class="title_text">{{item.question}}</text>
								</view>
								<block v-if="item.url != ''">
									<rich-text :nodes="item.url"></rich-text>
								</block>
								<checkbox-group @change="checkboxChange">
									<label class="radio_list">
										<checkbox value="A" class="radio_icon" :disabled="disabled" />
										<view class="radio_text">A. {{item.item1}}</view>
									</label>
									<label class="radio_list">
										<checkbox value="B" class="radio_icon" :disabled="disabled" />
										<view class="radio_text">B. {{item.item2}}</view>
									</label>
									<label class="radio_list">
										<checkbox value="C" class="radio_icon" :disabled="disabled" />
										<view class="radio_text">C. {{item.item3}}</view>
									</label>
									<label class="radio_list">
										<checkbox value="D" class="radio_icon" :disabled="disabled" />
										<view class="radio_text">D. {{item.item4}}</view>
									</label>
								</checkbox-group>
								<button class="checkbox_btn" :data-index='idx' @click="tapCheckbox">提交</button>
							</block>
						</scroll-view>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<!-- 底部操作 -->
		<view class="footer_box">
			<view class="item scantron" @click="tapAnswer">
				<text class="text">{{current+1}}/{{answerData.length}}</text>
			</view>
			<view class="item collect_off" :class="collect?'collect_on':''" @click="tapCollect">
				<text class="text">{{collect?'已收藏':'收藏'}}</text>
			</view>
			<!-- <view class="item answer">
				<text class="text">解析</text>
			</view> -->
			<view class="btn_wrap" @click="CloseExam">
				<text class="text">交卷</text>
			</view>
		</view>

		<!-- 答题卡 -->
		<view class="baffle_wrap" :class="open?'baffle_wrap_open':''">
			<view class="Close_Answer" @click="CloseAnswer"></view>
			<view class="Answer_card" :class="open?'Answer_card_open':''">
				<view class="oper_list">
					<view class="item yes">
						<text class="text">{{yes}}</text>
					</view>
					<view class="item wrong">
						<text class="text">{{wrong}}</text>
					</view>
					<view class="item card" @click="CloseAnswer">
						<text class="text">{{current+1}}/100</text>
					</view>
					<view class="item collect_off" :class="collect?'collect_on':''" @click="tapCollect">
						<text class="text">{{collect?'已收藏':'收藏'}}</text>
					</view>
					<view class="btn_wrap" @click="CloseExam">
						<text class="text">交卷</text>
					</view>
				</view>
				<scroll-view class="opt_wrap" scroll-y>
					<view class="opt_wrap_list">
						<block v-for="(items,index) in answerData" :key='index'>
							<block v-if="items.result == '1'">
								<view class="item on" @click="tapQuestionId" :data-idx='index'>
									{{index + 1}}
								</view>
							</block>
							<block v-else-if="items.result == '2'">
								<view class="item off" @click="tapQuestionId" :data-idx='index'>
									{{index + 1}}
								</view>
							</block>
							<block v-else>
								<view class="item" @click="tapQuestionId" :data-idx='index'>
									{{index + 1}}
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
	var util = require('../../../common/util.js');
	export default {
		data() {
			return {
				collect: false,
				subject: '',
				type: 0,
				current: 0,
				listData: [],
				maxTime: 2700,
				timer: '',
				open: false,
				answerData: [],
				questionId: '',
				yes: 0,
				wrong: 0,
				disabled: false
			}
		},
		onLoad(options) {
			uni.showToast({
				icon: 'loading',
				title: '数据加载中...',
				duration: 1000
			});
			clearInterval(this.timer)
			this.subject = options.subject
			this.openCountDown()
			// 获取题目
			uni.request({
				url: this.$Url + '/api/v1/exam/item/' + options.subject,
				method: 'GET',
				data: {
					token: uni.getStorageSync('token')
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						let arr = []
						for (let i in res.data.msg) {
							if (res.data.msg[i].url != '') {
								res.data.msg[i].url =
									'<div><img style="display: block;margin: 0 auto;max-width: 80%;max-height: 150px;" src="' + res.data.msg[i]
									.url + '"/></div>'
							}
							arr.push(res.data.msg[i])
						}
						this.listData = res.data.msg
						this.questionId = res.data.msg[0].questionId
						this.checkCollect()
						let answerData = []
						for (let i = 0; i < res.data.msg.length; i++) {
							let obj = new Object()
							obj.questionId = res.data.msg[i].questionId;
							obj.disabled = false;
							obj.answer = '';
							obj.result = 0
							answerData.push(obj)
						}
						this.answerData = answerData
						this.answerData[0].result = 3
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
		onHide() {
			clearInterval()
		},
		onBackPress() {
			clearInterval(this.timer)
		},
		onNavigationBarButtonTap: function(e) {
			console.log(e);
		},
		methods: {
			checkCollect: function(e) {
				uni.request({
					url: this.$Url + '/api/v1/exam/collection/check',
					method: 'POST',
					data: {
						'token': uni.getStorageSync('token'),
						'questionId': this.questionId
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
			},
			tapCollect: function(e) {
				this.collect = !this.collect
				if (this.collect) {
					uni.request({
						url: this.$Url + '/api/v1/exam/collection/store',
						method: 'POST',
						data: {
							'token': uni.getStorageSync('token'),
							'questionId': this.questionId
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
							'questionId': this.questionId
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
			},
			CountDown: function(e) {
				if (this.maxTime >= 0) {
					let M = Math.floor(this.maxTime / 60);
					let S = Math.floor(this.maxTime % 60);
					if (M <= 9) M = '0' + M;
					if (S <= 9) S = '0' + S;
					uni.setNavigationBarTitle({
						title: '倒计时' + M + ':' + S
					});
				} else {
					uni.setNavigationBarTitle({
						title: '考试结束'
					});
					uni.showModal({
						title: '温馨提示',
						content: '考试不通过',
						showCancel: false,
						confirmText: '交卷',
						success: (res) => {
							if (res.confirm) {
								clearInterval()
								uni.navigateBack()
							}
						}
					});
				}
			},
			openCountDown: function() {
				this.timer = setInterval(() => {
					this.maxTime--
					this.CountDown()
				}, 1000)
			},
			DoTitle: function(sign, choose) {
				let subject = this.subject == 'one' ? '1' : '4'
				uni.request({
					url: this.$Url + '/api/v1/exam/mock/log',
					method: 'GET',
					data: {
						token: uni.getStorageSync('token'),
						subject: subject,
						questionId: this.questionId,
						sign: sign,
						answer: this.listData[this.current].answer,
						choose: choose
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {}
				});
			},
			change: function(e) {
				console.log(this.answerData)
				this.current = e.detail.current
				this.questionId = this.listData[e.detail.current].questionId
				this.disabled = this.answerData[e.detail.current].disabled
				this.checkCollect()
			},
			radioChange: function(e) {
				this.answerData[this.current].answer = e.target.value
				this.disabled = true
				this.answerData[this.current].disabled = true
				if (this.listData[this.current].answer == e.target.value) {
					this.DoTitle('r', parseInt(e.target.value) + 1)
					this.answerData[this.current].result = 1
					this.yes++
					uni.showModal({
						title: '温馨提示',
						content: '恭喜您答对了',
						showCancel: false,
						confirmText: '下一题',
						success: (res) => {
							if (res.confirm) {
								this.current++
								console.log('用户点击确定');
							}
						}
					});
				} else {
					this.DoTitle('w', parseInt(e.target.value) + 1)
					this.answerData[this.current].result = 2
					this.wrong++
					uni.showModal({
						title: '温馨提示',
						content: '很抱歉您答错了',
						showCancel: false,
						confirmText: '下一题',
						success: (res) => {
							if (res.confirm) {
								this.current++
								console.log('用户点击确定');
							}
						}
					});
				}
				this.handPaper()
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
				this.answerData[this.current].answer = str
			},
			judgeChange: function(e) {
				this.answerData[this.current].answer = e.target.value
				this.disabled = true
				this.answerData[this.current].disabled = true
				if (this.listData[this.current].answer == e.target.value) {
					this.yes++
					this.DoTitle('r', parseInt(e.target.value) + 1)
					this.answerData[this.current].result = 1
					uni.showModal({
						title: '温馨提示',
						content: '恭喜您答对了',
						showCancel: false,
						confirmText: '下一题',
						success: (res) => {
							if (res.confirm) {
								this.current++
								console.log('用户点击确定');
							}
						}
					});
				} else {
					this.DoTitle('w', parseInt(e.target.value) + 1)
					this.answerData[this.current].result = 2
					this.wrong++
					uni.showModal({
						title: '温馨提示',
						content: '很抱歉您答错了',
						showCancel: false,
						confirmText: '下一题',
						success: (res) => {
							if (res.confirm) {
								this.current++
								console.log('用户点击确定');
							}
						}
					});
				}
				this.handPaper()
			},
			tapAnswer: function(e) {
				this.open = !this.open
			},
			CloseAnswer: function(e) {
				this.open = !this.open
			},
			tapQuestionId: function(e) {
				this.current = e.currentTarget.dataset.idx
				this.open = !this.open
			},
			tapCheckbox: function(e) {
				let index = e.currentTarget.dataset.index
				this.disabled = true
				this.answerData[this.current].disabled = true
				if (this.listData[this.current].answer == this.answerData[index]) {
					this.yes++
					this.DoTitle('r', this.answerData[index])
					this.answerData[this.current].result = 1
					uni.showModal({
						title: '温馨提示',
						content: '恭喜您答对了',
						showCancel: false,
						confirmText: '下一题',
						success: (res) => {
							if (res.confirm) {
								this.current++
								console.log('用户点击确定');
							}
						}
					});
				} else {
					this.DoTitle('w', this.answerData[index])
					this.answerData[this.current].result = 2
					this.wrong++
					uni.showModal({
						title: '温馨提示',
						content: '很抱歉您答错了',
						showCancel: false,
						confirmText: '下一题',
						success: (res) => {
							if (res.confirm) {
								this.current++
								console.log('用户点击确定');
							}
						}
					});
				}
				this.handPaper()
			},
			handPaper: function(e) {
				if (this.subject == 'one' && this.wrong > 10 || this.subject == 'four' && this.wrong > 5) {
					uni.showModal({
						title: '温馨提示',
						content: '考试不通过',
						showCancel: false,
						confirmText: '交卷',
						success: (res) => {
							if (res.confirm) {
								clearInterval()
								uni.navigateBack()
							}
						}
					});
				}
			},
			CloseExam: function(e) {
				uni.showModal({
					title: '温馨提示',
					content: '确定提交试卷？',
					showCancel: true,
					cancelColor: '#3860ff',
					confirmColor: '#929292',
					success: function(res) {
						if (res.confirm) {
							clearInterval()
							uni.navigateBack()
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
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
		width: 25%;
		height: 120rpx;
		position: relative;
		color: #929292;
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

	.footer_box .btn_wrap {
		display: flex;
		width: 40%;
		height: 100%;
		align-items: center;
		padding: 0 32rpx;
		box-sizing: border-box;
	}

	.footer_box .btn_wrap .text {
		flex: 0 0 auto;
		width: 100%;
		height: 80rpx;
		background-color: #3860ff;
		border-radius: 40rpx;
		color: #f4f4f4;
		font-size: 34rpx;
		text-align: center;
		line-height: 80rpx;
	}

	.main_wrap .sub_title {
		display: block;
		width: 100%;
		padding: 12upx 32rpx;
		box-sizing: border-box;
		line-height: 50rpx;
		margin: 0 0 30upx;
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
		align-items: flex-start;
		justify-content: flex-start;
	}

	.main_wrap .radio_list .radio_icon {
		flex: 0 0 auto;
	}

	.main_wrap .radio_list .radio_text {
		flex: 1 1 auto;
		padding-top: 10rpx;
		line-height: 48rpx;
		font-size: 34rpx;
		margin-left: 10rpx;
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
		width: 16%;
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

	.Answer_card .opt_wrap_list .load {
		border-color: #3860ff;
		color: #3860ff;
	}

	.Answer_card .opt_wrap_list .off {
		background: rgba(255, 238, 237);
		color: #ff564e;
		border-color: rgba(255, 238, 237);
	}

	.Answer_card .btn_wrap {
		display: flex;
		width: 100%;
		height: 132rpx;
		align-items: center;
		padding: 0 20rpx;
	}

	.Answer_card .btn_wrap .text {
		flex: 0 0 auto;
		width: 100%;
		height: 40px;
		background-color: #3860ff;
		border-radius: 20px;
		color: #f4f4f4;
		font-size: 17px;
		text-align: center;
		line-height: 40px;
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
