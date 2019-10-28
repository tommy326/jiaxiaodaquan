<template>
	<view>
		<view class="main_wrap">
			<swiper class="swiper_wrap" :current='current' @change='change'>
				<swiper-item class="swiper_item">
					<scroll-view scroll-y="true" class="scroll_box">
						<block v-if="type == 0">
							<view class="sub_title">
								<text class="title_type">单选</text>
								<text class="title_text">驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？</text>
							</view>
							<radio-group @change="radioChange">
								<label class="radio_list" v-for="(item, index) in radioData" :key="index">
									<radio :value="item" style="display: none;" />
									<view class="radio_icon" :class="radioSelect == index?'radio_icon_on':''">
										{{index == 0?'A':''}}{{index == 1?'B':''}}{{index == 2?'C':''}}{{index == 3?'D':''}}
									</view>
									<view class="radio_text">{{item}}</view>
								</label>
							</radio-group>
						</block>
						<block v-if="type == 1">
							<view class="sub_title">
								<text class="title_type">多选</text>
								<text class="title_text">驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？</text>
							</view>
							<checkbox-group @change="checkboxChange">
								<label class="radio_list" v-for="(item,index) in checkboxData" :key="item.value">
									<checkbox :value="item.value" :checked="item.checked" style="display: none;" />
									<view class="radio_icon" :class="item.checked ?'radio_icon_on':''">
										{{index == 0?'A':''}}{{index == 1?'B':''}}{{index == 2?'C':''}}{{index == 3?'D':''}}
									</view>
									<view class="radio_text">{{item.name}}</view>
								</label>
							</checkbox-group>
						</block>
						<block v-if="type == 2">
							<view class="sub_title">
								<text class="title_type">判断</text>
								<text class="title_text">驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？</text>
							</view>
							<radio-group @change="judgeChange">
								<label class="radio_list" v-for="(item, index) in judgeData" :key="index">
									<radio :value="item" style="display: none;" />
									<view class="radio_icon" :class="judgeSelect == index?'radio_icon_on':''">
										{{index == 0?'A':''}}{{index == 1?'B':''}}
									</view>
									<view class="radio_text">{{item}}</view>
								</label>
							</radio-group>
						</block>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper_item">
					<scroll-view scroll-y="true" class="scroll_box">
						<block v-if="type == 0">
							<view class="sub_title">
								<text class="title_type">单选</text>
								<text class="title_text">驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？</text>
							</view>
							<radio-group @change="radioChange">
								<label class="radio_list" v-for="(item, index) in radioData" :key="index">
									<radio :value="item" style="display: none;" />
									<view class="radio_icon" :class="radioSelect == index?'radio_icon_on':''">
										{{index == 0?'A':''}}{{index == 1?'B':''}}{{index == 2?'C':''}}{{index == 3?'D':''}}
									</view>
									<view class="radio_text">{{item}}</view>
								</label>
							</radio-group>
						</block>
						<block v-if="type == 1">
							<view class="sub_title">
								<text class="title_type">多选</text>
								<text class="title_text">驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？</text>
							</view>
							<checkbox-group @change="checkboxChange">
								<label class="radio_list" v-for="(item,index) in checkboxData" :key="item.value">
									<checkbox :value="item.value" :checked="item.checked" style="display: none;" />
									<view class="radio_icon" :class="item.checked ?'radio_icon_on':''">
										{{index == 0?'A':''}}{{index == 1?'B':''}}{{index == 2?'C':''}}{{index == 3?'D':''}}
									</view>
									<view class="radio_text">{{item.name}}</view>
								</label>
							</checkbox-group>
						</block>
						<block v-if="type == 2">
							<view class="sub_title">
								<text class="title_type">判断</text>
								<text class="title_text">驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？</text>
							</view>
							<radio-group @change="judgeChange">
								<label class="radio_list" v-for="(item, index) in judgeData" :key="index">
									<radio :value="item" style="display: none;" />
									<view class="radio_icon" :class="judgeSelect == index?'radio_icon_on':''">
										{{index == 0?'A':''}}{{index == 1?'B':''}}
									</view>
									<view class="radio_text">{{item}}</view>
								</label>
							</radio-group>
						</block>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper_item">
					<scroll-view scroll-y="true" class="scroll_box">
						<block v-if="type == 0">
							<view class="sub_title">
								<text class="title_type">单选</text>
								<text class="title_text">驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？</text>
							</view>
							<radio-group @change="radioChange">
								<label class="radio_list" v-for="(item, index) in radioData" :key="index">
									<radio :value="item" style="display: none;" />
									<view class="radio_icon" :class="radioSelect == index?'radio_icon_on':''">
										{{index == 0?'A':''}}{{index == 1?'B':''}}{{index == 2?'C':''}}{{index == 3?'D':''}}
									</view>
									<view class="radio_text">{{item}}</view>
								</label>
							</radio-group>
						</block>
						<block v-if="type == 1">
							<view class="sub_title">
								<text class="title_type">多选</text>
								<text class="title_text">驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？</text>
							</view>
							<checkbox-group @change="checkboxChange">
								<label class="radio_list" v-for="(item,index) in checkboxData" :key="item.value">
									<checkbox :value="item.value" :checked="item.checked" style="display: none;" />
									<view class="radio_icon" :class="item.checked ?'radio_icon_on':''">
										{{index == 0?'A':''}}{{index == 1?'B':''}}{{index == 2?'C':''}}{{index == 3?'D':''}}
									</view>
									<view class="radio_text">{{item.name}}</view>
								</label>
							</checkbox-group>
						</block>
						<block v-if="type == 2">
							<view class="sub_title">
								<text class="title_type">判断</text>
								<text class="title_text">驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？</text>
							</view>
							<radio-group @change="judgeChange">
								<label class="radio_list" v-for="(item, index) in judgeData" :key="index">
									<radio :value="item" style="display: none;" />
									<view class="radio_icon" :class="judgeSelect == index?'radio_icon_on':''">
										{{index == 0?'A':''}}{{index == 1?'B':''}}
									</view>
									<view class="radio_text">{{item}}</view>
								</label>
							</radio-group>
						</block>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<view class="footer_box">
			<view class="item scantron">
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
		<!-- <view class="make">
			
		</view> -->
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
				radioData: [],
				checkboxData: [],
				judgeData: [],
				radioSelect: '5',
				judgeSelect: '2',
				maxTime: 2700,
				timer: ''
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
				for (let i = 0; i < this.radioData.length; i++) {
					if (this.radioData[i] === e.target.value) {
						this.radioSelect = i
						console.log(i)
						break;
					}
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
				for (let i = 0; i < this.judgeData.length; i++) {
					if (this.judgeData[i] === e.target.value) {
						this.judgeSelect = i
						console.log(i)
						break;
					}
				}
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

	.sub_title {
		display: block;
		width: 100%;
		padding: 0 32rpx;
		box-sizing: border-box;
		line-height: 50rpx;
		margin: 12upx 0 30upx;
	}

	.sub_title .title_type {
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

	.sub_title .title_text {
		font-size: 34rpx;
		color: #333333;
	}

	.radio_list {
		display: flex;
		padding: 22rpx 32rpx;
		box-sizing: border-box;
		color: #333333;
		font-size: 34rpx;
		align-items: center;
		justify-content: center;
	}

	.radio_list .radio_icon {
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

	.radio_list .radio_icon_on {
		background-color: #3860ff;
		color: #ffffff;
	}

	.radio_list .radio_text {
		flex: 1 1 auto;
	}
	
	.make{
		display: block;
		width: 100%;
		height: 100vh;
		background: rgba(0,0,0,.5);
		position: fixed;
		top: 0;
		left: 0;
	}
</style>
