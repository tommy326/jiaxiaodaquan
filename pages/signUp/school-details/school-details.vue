<template>
	<view>
		<scroll-view class="content_box" scroll-y="true">
			<!-- 驾校照片 -->
			<view class="photo_box">
				<image src="http://iph.href.lu/750x404?text=750x404&fg=666666&bg=cccccc" mode="" class="school_photo"></image>
				<view class="photo_num">1/80</view>
			</view>
			<!-- 驾校简介 -->
			<view class="school_box">
				<view class="school_name">
					五星五号驾校
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
					<image src="../../../static/images/icon/icon-stars-1.png" class="stars" mode=""></image>
					<image src="../../../static/images/icon/icon-stars-1.png" class="stars" mode=""></image>
					<image src="../../../static/images/icon/icon-stars-1.png" class="stars" mode=""></image>
					<image src="../../../static/images/icon/icon-stars-1.png" class="stars" mode=""></image>
					<image src="../../../static/images/icon/icon-stars-1.png" class="stars" mode=""></image>
					<view class="score">5.0分 <text class="b">(1023人评）</text></view>
					<view class="price">￥2100</view>
					<view class="class">C1班</view>
				</view>
				<navigator url="" class="address" hover-class="none">武昌区武汉大道东湖国贸中心内距您步...</navigator>
			</view>

			<!-- tabs选项卡 -->
			<view class="tabs_box">
				<view class="item" :class="tabs ==0 ?'active':''" @click="tapTabs" data-idx='0'>
					班型
				</view>
				<view class="item" :class="tabs ==1 ?'active':''" @click="tapTabs" data-idx='1'>
					教练
				</view>
				<view class="item" :class="tabs ==2 ?'active':''" @click="tapTabs" data-idx='2'>
					场地
				</view>
				<view class="item discuss" :class="tabs ==3 ?'active':''" @click="tapTabs" data-idx='3'>
					评价
					<text>2425</text>
				</view>
			</view>

			<!-- 选项卡内容 -->
			<view class="tabs_content">
				<!-- 班型 -->
				<view class="class_list" v-if="tabs == 0">
					<view class="item">
						<view class="level c">
							C1
						</view>
						<view class="class_info">
							<view class="class_name">
								特价班
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
					<view class="item">
						<view class="level a">
							A1
						</view>
						<view class="class_info">
							<view class="class_name">
								特价班
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
					<view class="item">
						<view class="level b">
							B1
						</view>
						<view class="class_info">
							<view class="class_name">
								特价班
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
				</view>
				<!-- 教练 -->
				<view class="coach_list" v-else-if="tabs == 1">
					<view class="item">
						<view class="rank">
							1
						</view>
						<image src="http://iph.href.lu/100x100?text=头像" class="head_sculpture" mode=""></image>
						<view class="coach_info">
							<view class="name">
								周卫
							</view>
							<view class="score_box">
								<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
								<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
								<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
								<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
								<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
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
							<img src="http://iph.href.lu/90x90?text=头像" class="img" alt="">
						</view>
					</view>
				</view>
				<!-- 场地 -->
				<view class="area_list" v-else-if="tabs == 2">
					<view class="item">
						<image src="http://iph.href.lu/181x112?text=181x112" class="img" mode=""></image>
						<view class="area_info">
							<view class="name">
								蓝星驾校宗关训练基地
							</view>
							<view class="address">
								岳家嘴柴林花园
							</view>
						</view>
						<view class="area_sort">
							<view class="sort_text">
								科二
							</view>
							<view class="gap">
								300m
							</view>
						</view>
					</view>
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
						<view class="item">
							<view class="top_box">
								<image src="http://iph.href.lu/64x64?text=64x64" class="user_photo" mode=""></image>
								<view class="user_box">
									<view class="name">
										遇于北
									</view>
									<view class="score_box">
										<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
										<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
										<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
										<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
										<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
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
						<view class="item">
							<view class="top_box">
								<image src="http://iph.href.lu/64x64?text=64x64" class="user_photo" mode=""></image>
								<view class="user_box">
									<view class="name">
										遇于北
									</view>
									<view class="score_box">
										<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
										<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
										<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
										<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
										<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
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
						<view class="item">
							<view class="top_box">
								<image src="http://iph.href.lu/64x64?text=64x64" class="user_photo" mode=""></image>
								<view class="user_box">
									<view class="name">
										遇于北
									</view>
									<view class="score_box">
										<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
										<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
										<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
										<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
										<image src="../../../static/images/icon/icon-stars-1.png" class="img" mode=""></image>
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
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="footer_box">
			<view class="collect_box" @click="tapCollect">
				<image :src="'../../../static/images/icon/icon-collect-'+collect+'.png'" class="img" mode=""></image>
				<text class="text">{{collect == true?'已收藏':'收藏'}}</text>
			</view>
			<view class="consult_btn">
				免费咨询
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs: 0,
				collect:true
			}
		},
		onLoad: function(options) {
			console.log(options.id);
			//驾校信息
			uni.request({
				url: this.$Url + '/api/school/details?id=' + options.id,
				method: 'GET',
				data: {},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						console.log(res.data)
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
			tapTabs:function(e){
				this.tabs = e.currentTarget.dataset.idx
			},
			tapCollect:function(e){
				this.collect = !this.collect
			}
		}
	}
</script>

<style>
	.content_box {
		display: block;
		width: 100%;
		padding-bottom: 120upx;
	}

	.footer_box {
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		width: 100%;
		height: 120upx;
		background-color: #ffffff;
		box-shadow: 0px -1upx 1upx 0px rgba(0, 0, 0, 0.08);
		justify-content: space-between;
		align-items: center;
	}

	.footer_box .collect_box {
		flex: 0 0 auto;
		width: 102upx;
		padding-top: 20upx;
		margin-left: 120upx;
	}

	.footer_box .collect_box .img {
		display: block;
		width: 50upx;
		height: 46upx;
		margin: 0 auto;
	}

	.footer_box .collect_box .text {
		display: block;
		color: #333333;
		font-size: 20upx;
		text-align: center;
		margin-top: 5upx;
	}

	.footer_box .consult_btn {
		flex: 0 0 auto;
		width: 300upx;
		height: 88upx;
		background-color: #3860ff;
		color: #f4f4f4;
		font-size: 34upx;
		line-height: 88upx;
		text-align: center;
		margin-right: 28upx;
		border-radius: 44upx;
	}

	.photo_box {
		display: block;
		width: 100%;
		height: 404upx;
		position: relative;
		overflow: hidden;
	}

	.photo_box .school_photo {
		display: block;
		width: 100%;
	}

	.photo_box .photo_num {
		position: absolute;
		right: 50upx;
		top: 300upx;
		z-index: 9;
		color: #ffffff;
		font-size: 30upx
	}

	.school_box {
		display: block;
		width: 100%;
		background-color: #ffffff;
		border-radius: 40upx 40upx 0 0;
		position: relative;
		margin-top: -40upx;
		padding: 40upx 30upx;
		box-sizing: border-box;
		border-bottom: 2upx solid rgba(0, 0, 0, 0.08);
	}

	.school_box .school_name {
		color: #3860ff;
		font-size: 40upx;
		font-weight: bold;
	}

	.school_box .label_list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 20upx;
	}

	.school_box .label_list .item {
		flex: 0 0 auto;
		height: 40upx;
		background-color: #e8f1fd;
		border-radius: 2upx;
		padding: 0 12upx;
		line-height: 40upx;
		color: #3860ff;
		font-size: 26upx;
		margin-right: 16upx;
	}

	.school_box .introduce {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 28upx;
		font-size: 26upx;
		line-height: 1;
	}

	.school_box .introduce .stars {
		flex: 0 0 auto;
		width: 23upx;
		height: 22upx;
		margin-right: 10upx;
	}

	.school_box .introduce .score {
		color: #333333;
		margin-left: 12upx;
	}

	.school_box .introduce .score b {
		color: #666666;
	}

	.school_box .introduce .price {
		color: #666666;
		margin-left: 72upx;
	}

	.school_box .introduce .class {
		color: #666666;
		margin-left: 18upx;
	}

	.school_box .address {
		display: block;
		width: 542upx;
		font-size: 28upx;
		color: #333333;
		padding-right: 30upx;
		background: url(../../../static/images/icon/icon-more.png) no-repeat right center;
		background-size: 11upx;
		margin-top: 28upx;
		line-height: 1;
	}

	.tabs_box {
		display: flex;
		width: 100%;
		height: 80upx;
		align-items: center;
		padding-left: 32upx;
		box-sizing: border-box;
		font-size: 34upx;
		margin-top: 20upx;
		color: #909090;
	}

	.tabs_box .item {
		flex: 0 0 auto;
		min-width: 136upx;
	}

	.tabs_box .active {
		position: relative;
		color: #3860ff;
	}

	.tabs_box .active:after {
		content: '';
		display: block;
		position: absolute;
		width: 40upx;
		height: 6upx;
		background-color: #3860ff;
		border-radius: 3upx;
		left: 14upx;
		bottom: -10upx;
	}

	.tabs_box .discuss {
		display: flex;
		align-items: flex-end;
	}

	.tabs_box .discuss text {
		flex: 0 0 auto;
		color: #929292;
		font-size: 18upx;
		margin-left: 10upx;
	}

	.class_list {
		margin-top: 20upx;
	}

	.class_list .item {
		display: flex;
		width: 100%;
		height: 128upx;
		padding: 0 32upx;
		box-sizing: border-box;
		align-items: center;
	}

	.class_list .item .level {
		flex: 0 0 auto;
		width: 80upx;
		height: 80upx;
		border-radius: 10upx;
		background: #007AFF;
		color: #ffffff;
		font-size: 44upx;
		line-height: 80upx;
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
		font-size: 36upx;
		margin: 0 20upx;
	}

	.class_list .item .call_btn {
		flex: 0 0 auto;
		width: 96upx;
	}

	.class_list .item .call_btn .img {
		display: block;
		width: 34upx;
		height: 34upx;
		margin: 0 auto;
	}

	.class_list .item .call_btn .text {
		display: block;
		font-size: 24upx;
		color: #909090;
		margin-top: 14upx;
	}

	.class_list .item .class_info .class_name {
		color: #202020;
	}

	.class_list .item .class_info .class_data {
		display: flex;
		font-size: 28upx;
		align-items: center;
		color: #808080;
	}

	.class_list .item .class_info .class_data .label {
		flex: 0 0 auto;
		font-size: 22upx;
		padding: 4upx 8upx;
		border-radius: 4upx;
		border: solid 2upx #3860ff;
		line-height: 1;
		color: #3860ff;
		margin-right: 10upx;
	}

	.coach_list {
		margin-top: 20upx;
	}

	.coach_list .item {
		display: flex;
		width: 100;
		height: 188upx;
		padding: 0 30upx;
		box-sizing: border-box;
		align-items: center;
	}

	.coach_list .item .rank {
		flex: 0 0 auto;
		color: #3860ff;
		font-size: 72upx;
	}

	.coach_list .item .head_sculpture {
		flex: 0 0 auto;
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		margin-left: 20upx;
	}

	.coach_list .item .coach_info {
		flex: 1 1 auto;
		margin: 0 20upx;
	}

	.coach_list .item .coach_info .name {
		color: #202020;
		font-size: 34upx;
	}

	.coach_list .item .coach_info .score_box {
		display: flex;
		align-items: center;
	}

	.coach_list .item .coach_info .score_box .img {
		flex: 0 0 auto;
		width: 23upx;
		height: 22upx;
		margin-right: 10upx;
	}

	.coach_list .item .coach_info .score_box .text {
		flex: 0 0 auto;
		color: #929292;
		font-size: 22upx;
	}

	.coach_list .item .coach_info .score_data {
		display: flex;
		font-size: 26upx;
		align-items: center;
	}

	.coach_list .item .coach_info .score_data .sort {
		flex: 0 0 auto;
		color: #909090;
		margin-right: 12upx;
	}

	.coach_list .item .coach_info .score_data .text {
		flex: 0 0 auto;
		color: #333333;
	}

	.coach_list .item .coach_info .score_data .line {
		flex: 0 0 auto;
		width: 2upx;
		height: 26upx;
		background-color: #d9d9d9;
		margin: 0 24upx;
	}

	.coach_list .item .atte {
		flex: 0 0 auto;
		width: 160upx;
		color: #929292;
		font-size: 24upx;
		text-align: right;
	}

	.coach_list .item .atte .img {
		display: inline-block;
		width: 90upx;
		height: 90upx;
	}

	.area_list {
		margin-top: 20upx;
	}

	.area_list .item {
		display: flex;
		width: 100%;
		height: 160upx;
		padding: 0 30upx;
		box-sizing: border-box;
		align-items: center;
	}

	.area_list .item .img {
		flex: 0 0 auto;
		width: 180upx;
		height: 112upx;
		border-radius: 12upx;
	}

	.area_list .item .area_info {
		flex: 1 1 auto;
		margin: 0 20upx;
	}

	.area_list .item .area_info .name {
		color: #202020;
		font-size: 34upx;
	}

	.area_list .item .area_info .address {
		color: #808080;
		font-size: 28upx;
	}

	.area_list .item .area_sort {
		flex: 0 0 auto;
		text-align: right;
	}

	.area_list .item .area_sort .sort_text {
		display: inline-block;
		width: 64upx;
		height: 32upx;
		background-color: #fff3e5;
		border-radius: 4px;
		line-height: 32upx;
		text-align: center;
		color: #fe8c00;
		font-size: 24upx
	}

	.area_list .item .area_sort .gap {
		display: block;
		text-align: right;
		color: #808080;
		font-size: 28upx
	}

	.assess_list {
		margin-top: 20upx;
	}

	.assess_list .menu_tabs {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24upx;
		color: #666666;
		padding: 0 30upx;
		margin-bottom: 60upx;
	}

	.assess_list .menu_tabs .item {
		flex: 0 0 auto;
		height: 54upx;
		border-radius: 27upx;
		border: solid 1px #dddddd;
		line-height: 54upx;
		text-align: center;
		padding: 0 20upx;
	}

	.assess_list .menu_tabs .active {
		border: solid 1px #3860ff;
		background-color: #f7f9ff;
	}

	.assess_list .assess_wrap .item {
		margin: 0 0 60upx;
	}

	.assess_list .assess_wrap .item .top_box {
		display: flex;
		width: 100%;
		padding: 0 30upx;
		box-sizing: border-box;
	}

	.assess_list .assess_wrap .item .top_box .user_photo {
		flex: 0 0 auto;
		width: 64upx;
		height: 64upx;
		background-color: #333333;
		border-radius: 50%;
	}

	.assess_list .assess_wrap .item .top_box .user_box {
		flex: 1 1 auto;
		margin: 0 20upx;
	}

	.assess_list .assess_wrap .item .top_box .user_box .name {
		color: #333333;
		font-size: 28upx;
	}

	.assess_list .assess_wrap .item .top_box .score_box {
		display: flex;
		align-items: center;
	}

	.assess_list .assess_wrap .item .top_box .score_box .img {
		flex: 0 0 auto;
		width: 23upx;
		height: 22upx;
		margin-right: 10upx;
	}

	.assess_list .assess_wrap .item .top_box .score_box .text {
		flex: 0 0 auto;
		font-size: 22upx;
		color: #929292;
	}

	.assess_list .assess_wrap .item .top_box .time {
		flex: 0 0 auto;
		color: #929292;
		font-size: 22upx;
	}

	.assess_list .assess_wrap .mid_box {
		display: block;
		width: 100%;
		padding-left: 117upx;
		box-sizing: border-box;
		color: #333333;
		font-size: 26upx;
		margin-top: 20upx;
		padding-right: 44upx;
		position: relative;
	}

	.assess_list .assess_wrap .mid_box:after {
		content: '';
		display: block;
		width: 634upx;
		height: 2upx;
		background-color: #ebebeb;
		position: absolute;
		right: 0;
		bottom: -24upx;
	}
</style>
