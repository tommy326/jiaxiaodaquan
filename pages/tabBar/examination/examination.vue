<template>
	<view>
		<view class="tabs_box">
			<view class="item" v-for="(item,idx) in tabsData" :key='idx' :class="tabs == idx ?'active':''" :data-idx='idx' @click="tapTabs">{{item}}</view>
		</view>
		<view class="banner_box"></view>
		<view class="main_wrap">
			<view class="side_box">
				<navigator url="" class="link_box" hover-class="none">
					<image src="../../../static/images/item/vipkc.png" class="img" mode=""></image>
					<view class="text">
						VIP课程
					</view>
				</navigator>
				<navigator url="" class="link_box" hover-class="none">
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
				<navigator url="" class="link_box" hover-class="none">
					<view class="info">
						顺序练习
					</view>
					<view class="text">
						1/1000
					</view>
				</navigator>
				<navigator url="" class="link_box" hover-class="none">
					<view class="info">
						模拟考试
					</view>
					<view class="text">
						100%仿真
					</view>
				</navigator>
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
				<navigator url="" class="link_box" hover-class="none">
					<image src="../../../static/images/item/wdcj.png" class="img" mode=""></image>
					<view class="text">
						我的成绩
					</view>
				</navigator>
			</view>
		</view>
		<view class="line"></view>
		<view class="comment_box">
			<view class="top_box">
				<view class="info_title">
					{{tabsData[tabs]}}社区
				</view>
				<navigator url="" class="link" hover-class="none">查看全部</navigator>
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
				tabsData:['科一','科二','科三','科四']
			}
		},
		methods: {
			tapTabs: function(e) {
				this.tabs = e.currentTarget.dataset.idx
			}
		}
	}
</script>

<style>
	.tabs_box {
		display: flex;
		width: 100%;
		height: 80upx;
		padding: 0 32upx;
		align-items: center;
	}

	.tabs_box .item {
		flex: 0 0 auto;
		width: 92upx;
		height: 80upx;
		color: #909090;
		font-size: 36upx;
		margin-right: 60upx;
		text-align: center;
		line-height: 80upx;
	}

	.tabs_box .active {
		color: #3860ff;
		position: relative;
		font-weight: bold;
	}

	.tabs_box .active:after {
		content: '';
		display: block;
		width: 32upx;
		height: 6upx;
		background-color: #3860ff;
		border-radius: 3upx;
		position: absolute;
		left: 50%;
		margin-left: -16upx;
		bottom: 2upx;
	}

	.banner_box {
		display: block;
		width: 686upx;
		height: 194upx;
		background-color: #101014;
		border-radius: 12upx;
		margin: 32upx auto 40upx;
	}

	.main_wrap {
		display: flex;
		width: 100%;
		padding: 0 60upx;
		justify-content: space-between;
		box-sizing: border-box;
	}

	.main_wrap .side_box {
		flex: 0 0 auto;
		width: 132upx;
	}

	.main_wrap .mid_box {
		flex: 1 1 auto;
	}

	.main_wrap .side_box .link_box {
		display: flex;
		width: 136upx;
		height: 136upx;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-bottom: 60upx;
	}

	.main_wrap .side_box .link_box:last-child {
		margin-bottom: 40upx;
	}

	.main_wrap .side_box .link_box .img {
		flex: 0 0 auto;
		width: 80upx;
		height: 80upx;
	}

	.main_wrap .side_box .link_box .text {
		flex: 0 0 auto;
		color: #333333;
		font-size: 30upx;
		margin-top: 15upx;
		line-height: 1;
	}

	.main_wrap .mid_box .link_box {
		display: flex;
		width: 200upx;
		height: 200upx;
		border-radius: 50%;
		background-color: #333333;
		color: #ffffff;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin: 0 auto;
	}

	.main_wrap .mid_box .link_box:first-child {
		margin-top: 7upx;
	}

	.main_wrap .mid_box .link_box:last-child {
		margin-top: 120upx;
	}

	.main_wrap .mid_box .link_box .info {
		flex: 0 0 auto;
		font-size: 32upx;
		line-height: 1;
	}

	.main_wrap .mid_box .link_box .text {
		flex: 0 0 auto;
		font-size: 32upx;
		color: #ffffff;
		opacity: 0.8;
		margin-top: 20upx;
		line-height: 1;
		font-size: 26upx
	}

	.line {
		display: block;
		width: 100%;
		height: 16upx;
		background-color: #f8f8f8;
	}

	.comment_box {
		display: block;
		width: 100%;
		padding: 40upx 0 20upx;
	}

	.comment_box .top_box {
		display: flex;
		width: 100%;
		align-items: flex-end;
		justify-content: space-between;
		padding: 0 32upx 36upx;
		box-sizing: border-box;
	}

	.comment_box .top_box .info_title {
		flex: 0 0 auto;
		color: #333333;
		font-size: 36upx;
		font-weight: bold;
		line-height: 1;
	}

	.comment_box .top_box .link {
		flex: 0 0 auto;
		color: #3860ff;
		font-size: 30upx;
		line-height: 1;
		padding-right: 30upx;
		background: url(../../../static/images/icon/icon-more-2.png) no-repeat right center;
		background-size: 13upx 22upx;
	}

	.ask_list {
		display: block;
		width: 100%;
		padding: 0 32upx;
		box-sizing: border-box;
	}

	.ask_list .item {
		display: flex;
		width: 100%;
		height: 54upx;
		align-items: center;
		justify-content: space-between;
		padding-left: 40upx;
		font-size: 28upx;
		box-sizing: border-box;
		background: url(../../../static/images/icon/icon-ask.png) no-repeat left center;
		background-size: 28upx 28upx;
	}

	.ask_list .item .info {
		flex: 1 1 auto;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-right: 10upx;
	}

	.ask_list .item .text {
		flex: 0 0 auto;
		text-align: right;
		font-size: 26upx;
		color: #929292;
	}
</style>
