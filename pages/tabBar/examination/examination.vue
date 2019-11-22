<template>
	<view>
		<!-- 科目分类 -->
		<view class="tabs_box">
			<view class="item" v-for="(item,idx) in tabsData" :key='idx' :class="tabs == idx ?'active':''" :data-idx='idx'
			 @click="tapTabs">{{item}}</view>
		</view>
		<!-- 广告位 -->
		<view class="banner_box"></view>
		<!-- 内容 -->
		<view class="main_wrap">
			<view class="side_box">
				<navigator url="" class="link_box" hover-class="none">
					<image src="../../../static/images/item/vipkc.png" class="img" mode=""></image>
					<view class="text">
						VIP课程
					</view>
				</navigator>
				<navigator url="../../my/My-mistake/My-mistake" class="link_box" hover-class="none">
					<image src="../../../static/images/item/dct.png" class="img" mode=""></image>
					<view class="text">
						错题本
					</view>
				</navigator>
				<navigator url="" class="link_box" hover-class="none">
					<image src="../../../static/images/item/tmsc.png" class="img" mode=""></image>
					<view class="text">
						收藏
					</view>
				</navigator>
			</view>

			<view class="mid_box">
				<view class="link_box" @click="RandomPractice" :data-idx="tabs==0?'1':'4'">
					<view class="info">
						顺序练习
					</view>
					<view class="text">
						1/1000
					</view>
				</view>
				<view class="link_box" @click="MockExam" :data-idx="tabs==0?'one':'four'">
					<view class="info">
						模拟考试
					</view>
					<view class="text">
						100%仿真
					</view>
				</view>
			</view>
			<view class="side_box">
				<navigator url="" class="link_box" hover-class="none">
					<image src="../../../static/images/item/lxt.png" class="img" mode=""></image>
					<view class="text">
						练习题
					</view>
				</navigator>
				<navigator url="" class="link_box" hover-class="none">
					<image src="../../../static/images/item/zxlx.png" class="img" mode=""></image>
					<view class="text">
						专项练习
					</view>
				</navigator>
				<navigator url="../../my/My-grades/My-grades" class="link_box" hover-class="none">
					<image src="../../../static/images/item/wdcj.png" class="img" mode=""></image>
					<view class="text">
						我的成绩
					</view>
				</navigator>
			</view>
		</view>
		<view class="line"></view>
		<!-- 社区 -->
		<view class="comment_box">
			<view class="top_box">
				<view class="info_title">
					{{tabsData[tabs]}}社区
				</view>
				<navigator :url="'../../examination/community-list/community-list?tabs='+tabs" class="link" hover-class="none">查看全部</navigator>
			</view>
			<view class="ask_list">
				<view class="item">
					<view class="info">
						上个月18号面签，到今天一个月了
					</view>
					<view class="text">
						12151个回答
					</view>
				</view>
				<view class="item">
					<view class="info">
						上个月18号面签，到今天一个月了什上个月18号面签，到今天一个月了什
					</view>
					<view class="text">
						262442个回答
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs: 0,
				tabsData: ['科一', '科四']
			}
		},
		methods: {
			tapTabs: function(e) {
				this.tabs = e.currentTarget.dataset.idx
			},
			RandomPractice: function(e) {
				if (uni.getStorageSync('logon_status') == 1) {
					uni.navigateTo({
						url: '../../examination/Random-practice/Random-practice?subject='+e.currentTarget.dataset.idx
					});
				} else {
					uni.navigateTo({
						url: '../../login/login?form=2'
					});
				}
			},
			MockExam: function(e) {
				if (uni.getStorageSync('logon_status') == 1) {
					uni.navigateTo({
						url: '../../examination/Mock-exam/Mock-exam?subject='+e.currentTarget.dataset.idx
					});
				} else {
					uni.navigateTo({
						url: '../../login/login?form=2'
					});
				}
			}
		}
	}
</script>

<style>
	.tabs_box {
		display: flex;
		width: 100%;
		height: 80rpx;
		padding: 0 32rpx;
		box-sizing: border-box;
		align-items: center;
	}

	.tabs_box .item {
		flex: 0 0 auto;
		width: 92rpx;
		height: 80rpx;
		color: #909090;
		font-size: 36rpx;
		margin-right: 60rpx;
		text-align: center;
		line-height: 80rpx;
	}

	.tabs_box .active {
		color: #3860ff;
		position: relative;
		font-weight: bold;
	}

	.tabs_box .active:after {
		content: '';
		display: block;
		width: 32rpx;
		height: 6rpx;
		background-color: #3860ff;
		border-radius: 3rpx;
		position: absolute;
		left: 50%;
		margin-left: -16rpx;
		bottom: 2rpx;
	}

	.banner_box {
		display: block;
		width: 686rpx;
		height: 194rpx;
		background-color: #101014;
		border-radius: 12rpx;
		margin: 32rpx auto 40rpx;
	}

	.main_wrap {
		display: flex;
		width: 100%;
		padding: 0 60rpx;
		justify-content: space-between;
		box-sizing: border-box;
	}

	.main_wrap .side_box {
		flex: 0 0 auto;
		width: 132rpx;
	}

	.main_wrap .mid_box {
		flex: 1 1 auto;
	}

	.main_wrap .side_box .link_box {
		display: flex;
		width: 136rpx;
		height: 136rpx;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-bottom: 60rpx;
	}

	.main_wrap .side_box .link_box:last-child {
		margin-bottom: 40rpx;
	}

	.main_wrap .side_box .link_box .img {
		flex: 0 0 auto;
		width: 80rpx;
		height: 80rpx;
	}

	.main_wrap .side_box .link_box .text {
		flex: 0 0 auto;
		color: #333333;
		font-size: 30rpx;
		margin-top: 15rpx;
		line-height: 1;
	}

	.main_wrap .mid_box .link_box {
		display: flex;
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
		background-color: #333333;
		color: #ffffff;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin: 0 auto;
	}

	.main_wrap .mid_box .link_box:first-child {
		margin-top: 7rpx;
	}

	.main_wrap .mid_box .link_box:last-child {
		margin-top: 120rpx;
	}

	.main_wrap .mid_box .link_box .info {
		flex: 0 0 auto;
		font-size: 32rpx;
		line-height: 1;
	}

	.main_wrap .mid_box .link_box .text {
		flex: 0 0 auto;
		font-size: 32rpx;
		color: #ffffff;
		opacity: 0.8;
		margin-top: 20rpx;
		line-height: 1;
		font-size: 26rpx
	}

	.line {
		display: block;
		width: 100%;
		height: 16rpx;
		background-color: #f8f8f8;
	}

	.comment_box {
		display: block;
		width: 100%;
		padding: 40rpx 0 20rpx;
	}

	.comment_box .top_box {
		display: flex;
		width: 100%;
		align-items: flex-end;
		justify-content: space-between;
		padding: 0 32rpx 36rpx;
		box-sizing: border-box;
	}

	.comment_box .top_box .info_title {
		flex: 0 0 auto;
		color: #333333;
		font-size: 36rpx;
		font-weight: bold;
		line-height: 1;
	}

	.comment_box .top_box .link {
		flex: 0 0 auto;
		color: #3860ff;
		font-size: 30rpx;
		line-height: 1;
		padding-right: 30rpx;
		background: url(../../../static/images/icon/icon-more-2.png) no-repeat right center;
		background-size: 13rpx 22rpx;
	}

	.ask_list {
		display: block;
		width: 100%;
		padding: 0 32rpx;
		box-sizing: border-box;
	}

	.ask_list .item {
		display: flex;
		width: 100%;
		height: 54rpx;
		align-items: center;
		justify-content: space-between;
		padding-left: 40rpx;
		font-size: 28rpx;
		box-sizing: border-box;
		background: url(../../../static/images/icon/icon-ask.png) no-repeat left center;
		background-size: 28rpx 28rpx;
	}

	.ask_list .item .info {
		flex: 1 1 auto;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-right: 10rpx;
	}

	.ask_list .item .text {
		flex: 0 0 auto;
		text-align: right;
		font-size: 26rpx;
		color: #929292;
	}
</style>
