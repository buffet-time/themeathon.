<template>
  <AppComponent msg="Welcome to Your Vue.js + TypeScript App"/>
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
