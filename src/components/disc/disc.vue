<template>
	<transition name="slide">
		<music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
	</transition>
</template>

<script type="text/ecmascript-6">
import MusicList from 'components/music-list/music-list';
import {mapGetters} from 'vuex';
import {getSongList} from 'api/recommend';
import {ERR_OK} from 'api/config';
import {createSong} from 'common/js/song';

export default {
	computed: {
		title() {
			return this.disc.dissname;
		},
		bgImage() {
			return this.disc.imgUrl;
		},
		...mapGetters([
			'disc'
		])
	},
	data() {
		return {
			songs: []
		};
	},
	created() {
		this.getSongList();
	},
	methods: {
		_getSOngList() {
			if (!this.disc.dissid) {
				this.$router.push('/recommend');
				return;
			}
			getSongList(this.disc.dissid).then((res) => {
				if (res.code === ERR_OK) {
					console.log(res.cdlist[0].songlist);
					this.songs = this._normalize(res.cdlist[0].songlist);
				}
			});
		},
		_normalize(list) {
			let ret = [];
			list.forEach((musicData) => {
				if (musicData.songid && musicData.album) {
					ret.push(createSong(musicData));
				}
			});
			return ret;
		}
	},
	components: {
		MusicList
	}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.slide-enter-active,.slide-leave-active
	transition: all 0.3s;
.slide-enter, .slide-leave-to
	transform: translate3d(100%, 0, 0)
</style>
