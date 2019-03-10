import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
	public blah?: string = 'fuck my life';

	@Prop(String)
	private msg?: string;
}
