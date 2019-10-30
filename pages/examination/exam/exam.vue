<template>
	<view>
		<view class="main_wrap">
			<swiper class="swiper_wrap" :current='current' @change='change'>
				<block v-for="(item,idx) in listData" :key='idx'>
					<swiper-item class="swiper_item">
						<scroll-view scroll-y="true" class="scroll_box">
							<block v-if="item.item3 != ''">
								<view class="sub_title">
									<text class="title_type">单选</text>
									<text class="title_text">{{item.question}}</text>
								</view>
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
								<radio-group @change="judgeChange">
									<label class="radio_list">
										<radio value="0" style="display: none;" />
										<view class="radio_icon" :class="judgeSelect == 0?'radio_icon_on':''">
											A
										</view>
										<view class="radio_text">{{item.item1}}</view>
									</label>
									<label class="radio_list">
										<radio value="1" style="display: none;" />
										<view class="radio_icon" :class="judgeSelect == 1?'radio_icon_on':''">
											B
										</view>
										<view class="radio_text">{{item.item2}}</view>
									</label>
								</radio-group>
							</block>
							<block v-if="item.subject == 2">
								<view class="sub_title">
									<text class="title_type">多选</text>
									<text class="title_text">{{item.question}}</text>
								</view>
								<checkbox-group @change="checkboxChange">
									<label class="radio_list">
										<checkbox value="0" checked="" style="display: none;" />
										<view class="radio_icon" :class="item.checked ?'radio_icon_on':''">
											A
										</view>
										<view class="radio_text">{{item.item1}}</view>
									</label>
									<label class="radio_list">
										<checkbox value="1" checked="" style="display: none;" />
										<view class="radio_icon" :class="item.checked ?'radio_icon_on':''">
											B
										</view>
										<view class="radio_text">{{item.item2}}</view>
									</label>
									<label class="radio_list">
										<checkbox value="2" checked="" style="display: none;" />
										<view class="radio_icon" :class="item.checked ?'radio_icon_on':''">
											C
										</view>
										<view class="radio_text">{{item.item3}}</view>
									</label>
									<label class="radio_list">
										<checkbox value="3" checked="" style="display: none;" />
										<view class="radio_icon" :class="item.checked ?'radio_icon_on':''">
											D
										</view>
										<view class="radio_text">{{item.item4}}</view>
									</label>
								</checkbox-group>
							</block>
						</scroll-view>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<view class="footer_box">
			<view class="item scantron" @click="tapAnswer">
				<text class="text">{{current+1}}/100</text>
			</view>
			<view class="item collect_off" :class="collect?'collect_on':''" @click="tapCollect">
				<text class="text">{{collect?'已收藏':'收藏'}}</text>
			</view>
			<view class="item answer">
				<text class="text">解析</text>
			</view>
			<view class="btn_wrap">
				<text class="text">交卷</text>
			</view>
		</view>

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
						<text class="text">{{current+1}}/100</text>
					</view>
					<view class="item collect_off" :class="collect?'collect_on':''" @click="tapCollect">
						<text class="text">{{collect?'已收藏':'收藏'}}</text>
					</view>
					<view class="btn_wrap">
						<text class="text">交卷</text>
					</view>
				</view>
				<scroll-view class="opt_wrap" scroll-y>
					<view class="opt_wrap_list">
						<block v-for="n in 100" :key='n'>
							<view class="item" :class="n==10?'on':''" @click="tapQuestionId" :data-idx='n'>
								{{n}}
							</view>
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
				type: 0,
				current: 0,
				listData: [],
				radioSelect: '5',
				judgeSelect: '2',
				maxTime: 2700,
				timer: '',
				open: false
			}
		},
		onLoad() {
			this.radioData = ['违章行为', '违法行为', '过失行为', '违规行为']
			this.checkboxData = [{
				value: '0',
				name: '违章行为'
			}, {
				value: '1',
				name: '违法行为'
			}, {
				value: '2',
				name: '过失行为'
			}, {
				value: '3',
				name: '违规行为'
			}]

			this.judgeData = ['正确', '错误']
			this.openCountDown()
			uni.request({
				url: this.$Url + '/api/exam/item/one',
				method: 'GET',
				data: {

				},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {

					uni.hideToast();
					if (res.data.code == 200) {
						console.log(res.data.msg)
						this.listData = res.data.msg
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
		onBackPress() {
			clearInterval(this.timer)
		},
		onNavigationBarButtonTap: function(e) {
			console.log(e);
		},
		methods: {
			tapCollect: function(e) {
				this.collect = !this.collect
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
				}
			},
			openCountDown: function() {
				this.timer = setInterval(() => {
					this.maxTime--
					this.CountDown()
				}, 1000)
			},
			change: function(e) {
				this.current = e.detail.current
				this.type = e.detail.current
			},
			radioChange: function(e) {
				this.radioSelect = e.target.value
				if (this.listData[0].answer -1 == e.target.value) {
					uni.showModal({
						title: '温馨提示',
						content: '恭喜您答对了',
						cancelText: '解析',
						confirmText: '下一题',
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				} else {
					uni.showModal({
						title: '温馨提示',
						content: '很抱歉您答错了',
						cancelText: '解析',
						confirmText: '下一题',
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
			},
			checkboxChange: function(e) {
				var items = this.checkboxData,
					values = e.detail.value;
				let arr = []
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.indexOf(item.value) >= 0) {
						arr.push(item.value)
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
				console.log(arr)
			},
			judgeChange: function(e) {
				this.judgeSelect = e.target.value
				if (this.listData[0].answer != e.target.value) {
					uni.showModal({
						title: '温馨提示',
						content: '恭喜您答对了',
						cancelText: '解析',
						confirmText: '下一题',
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				} else {
					uni.showModal({
						title: '温馨提示',
						content: '很抱歉您答错了',
						cancelText: '解析',
						confirmText: '下一题',
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
			},
			tapAnswer: function(e) {
				this.open = !this.open
			},
			CloseAnswer: function(e) {
				this.open = !this.open
			},
			tapQuestionId:function(e){
				this.current = e.currentTarget.dataset.idx -1
				this.open = !this.open
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
		width: 20%;
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
		align-items: center;
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

	.main_wrap .radio_list .radio_text {
		flex: 1 1 auto;
	}

	.baffle_wrap {
		display: none;
		width: 100%;
		height: calc(100% - 44px);
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
		margin: 16rpx 13rpx;
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
</style>
