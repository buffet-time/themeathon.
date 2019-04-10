import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
	private items: object[] = [
		{ id: 'discord', href: 'https://discord.themeathon.com/' },
		{ id: 'twitch', href: 'https://www.twitch.tv/Themeathon' },
		{ id: 'twitter', href: 'https://www.twitter.com/Themeathon' },
		{ id: 'youtube', href: 'http://www.youtube.com/themeathon' }
	]
}
