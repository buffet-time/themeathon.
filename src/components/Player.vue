<template>
	<div id="twitch-player">
		b l a h?
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import LoadScript from 'vue-plugin-load-script'
Vue.use(LoadScript)

declare const Twitch: any

export default class Player extends Vue {
	private loaded: boolean = false

	public async created() {
		console.log('2')
		await this.loadTwitch()
		// See if we already mounted.
		if (this.$el) {
			this.initTwitch()
		}
	}

	public mounted() {
		console.log('1')
		if (this.loaded) {
			this.initTwitch()
		}
	}

	private initTwitch() {
		const options = {
			width: 800,
			height: 450,
			channel: 'GamesDoneQuick'
		}
		const player = new Twitch.Player('twitch-player', options)

		player.setVolume(0.5)
	}

	private async loadTwitch() {
		if (this.loaded) {
			return
		}
		await LoadScript('https://player.twitch.tv/js/embed/v1.js')
		this.loaded = true
	}
}
</script>