<template>
	<div class="search">
		<div class="search-box-wrapper">
			<search-box ref="searchBox" @query="onQueryChange"></search-box>
		</div>
		<div ref="shortcutWrapper" v-show="!query" class="shortcutWrapper">
			<scroll class="shortcut" ref="shortcut">
				<div>
					<div class="hot-key">
						<h1 class="title">热门搜索</h1>
						<ul>
							<li class="item" v-for="(item, index) in hotKey" :key=index>
								<span>{{item.k}}</span>
							</li>
						</ul>
					</div>
					<div class="search-history" v-show="searchHistory.length">
						<h1 class="title">
							<span class="text">搜索历史</span>
							<span @click="showConfirm" class="clear">
								<i class="icon-clear"></i>
							</span>
						</h1>
						<search-list @delete="deleteSearchHistory" @select="addQuery" :searches="searchHistory">
						</search-list>
					</div>
				</div>
			</scroll>
		</div>
		<div class="search-result" v-show="query" ref="searchResult">
		</div>
		<router-view></router-view>
	</div>
</template>

<script type="text/ecmascript-6">
	import SearchBox from 'base/search-box/search-box';
	export default {
		components: {
			SearchBox
		}
	};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
@import "~common/stylus/mixin"

.search
	.search-box-wrapper
		margin: 20px
	.shortcut-wrapper
		position: fixed
		top: 178px
		bottom: 0
		width: 100%
		.shortcut
			height: 100%
			overflow: hidden
			.hot-key
				margin: 0 20px 20px 20px
				.title
					margin-bottom: 20px
					font-size: $font-size-medium
					color: $color-text-l
				.item
					display: inline-block
					padding: 5px 10px
					margin: 0 20px 10px 0
					border-radius: 6px
					background: $color-highlight-background
					font-size: $font-size-medium
					color: $color-text-d
			.search-history
				position: relative
				margin: 0 20px
				.title
					display: flex
					align-items: center
					height: 40px
					font-size: $font-size-medium
					color: $color-text-l
					.text
						flex: 1
					.clear
						extend-click()
						.icon-clear
							font-size: $font-size-medium
							color: $color-text-d
	.search-result
		position: fixed
		width: 100%
		top: 178px
		bottom: 0				
</style>