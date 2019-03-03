import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
	public blah?: string = 'fasdf'

	@Prop(String)
	private msg?: string
}
