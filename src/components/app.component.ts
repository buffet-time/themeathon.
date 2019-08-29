import { Component, Prop, Vue } from 'vue-property-decorator'
// import Twitch from 'twitch-js'

@Component
export default class HelloWorld extends Vue {
	private items: object[] = [
		{ id: 'discord', href: 'https://discord.themeathon.com/' },
		{ id: 'twitch', href: 'https://www.twitch.tv/Themeathon' },
		{ id: 'twitter', href: 'https://www.twitter.com/Themeathon' },
		{ id: 'youtube', href: 'http://www.youtube.com/themeathon' }
	]

	// public mounted() {
	// 	const options = {
	// 		width: 800,
	// 		height: 450,
	// 		channel: 'themeathon'
	// 	}
	// 	const player = new Twitch.Player('twitch-player', options)
	// 	player.setVolume(0.5)
	// }
}
