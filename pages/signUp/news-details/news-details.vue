<template>
	<view>
		<view class="news_title">
			{{title}}
		</view>
		<view class="news_time">
			<text class="author">原创：{{author}}</text><text class="time">{{time}}</text>
		</view>
		<view class="news_content">
			<rich-text :nodes="content"></rich-text>
		</view>
		<!-- #ifdef APP-PLUS -->
		<share ref="share" :contentHeight="580" :shareList="shareList" :shareImageUrl='shareImageUrl' :shareHref='shareHref'
		 :shareTitle='shareTitle' :shareSummary='shareSummary'></share>
		<!-- #endif -->
	</view>
</template>

<script>
	import share from '@/components/share/share.vue';
	export default {
		components: {
			share
		},
		data() {
			return {
				shareList: [],
				shareTitle: '',
				shareSummary: '',
				shareHref: 'http://m.baiche.com.cn/h5/',
				shareImageUrl: '../../static/logo.png',
				imgs: '../../static/images/1.png',
				title: '',
				time: '',
				author: '',
				content: '',
			}
		},
		onLoad: function(options) {
			console.log('新闻id:' + options.id);
			uni.request({
				url: this.$Url + '/api/school/information',
				method: 'GET',
				data: {
					id: options.id
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: (res) => {
					if (res.data.code == 200) {
						this.title = res.data.msg.title
						this.author = res.data.msg.author
						this.time = res.data.msg.time
						this.content = res.data.msg.content.replace(/\<img/gi,
							'<img style="max-width:100%!important;height:auto!important;"')
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
		onNavigationBarButtonTap(e) {
			switch (e.type) {
				case "menu": //点击分享按钮
					this.$refs.share.toggleMask();
					break;
			}
		},
		methods: {

		}
	}
</script>

<style>
	.news_title {
		display: block;
		width: 100%;
		height: auto;
		font-size: 48upx;
		letter-spacing: 1px;
		color: #1f1f1f;
		padding: 40upx 32upx 30upx;
		line-height: 64upx;
		box-sizing: border-box;
		font-weight: bold;
	}

	.news_time {
		display: flex;
		width: 100%;
		font-size: 26upx;
		color: #949494;
		padding: 0 32upx;
		box-sizing: border-box;
		align-items: center;
	}

	.news_time .time {
		margin-left: 46rpx;
	}

	.news_content {
		display: block;
		width: 100%;
		font-size: 32upx;
		color: #949494;
		padding: 32rpx;
		box-sizing: border-box;
		letter-spacing: 1px;
		color: #131c21;
		line-height: 48upx;
		text-align: justify;
		overflow-x: hidden;
	}
</style>
