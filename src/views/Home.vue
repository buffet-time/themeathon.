<template>
	<div>
		<AppComponent />
		<PlayerComponent />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppComponent from '../components/App.vue' // idk why it says its not a module
import PlayerComponent from '../components/Player.vue'

@Component({
	components: {
		AppComponent,
		PlayerComponent
	}
})
export default class Home extends Vue {}
</script>

<style>
body {
	margin: 0;
}
</style>
