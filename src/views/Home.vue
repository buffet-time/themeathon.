<template>
  <AppComponent/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppComponent from '@/components/app.component.vue' // @ is an alias to /src

@Component({
	components: {
		AppComponent
	}
})
export default class Home extends Vue {}
</script>

<style>
body {
	margin: 0;
}
</style>
