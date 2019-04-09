<template>
  <div id="app">
    <img src="@/assets/themeathon.png" alt style="width: 128px; height: 128px;">
    <div id="nav">
      <router-link to="/">HOME</router-link>|
      <router-link to="/about">ABOUT</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400');
#app {
	font-family: Roboto, Helvetica, Arial, sans-serif;
	font-weight: 300;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #fff;
	background-color: #333;
}
#nav {
	padding: 0 30px;
}

#nav a {
	font-weight: 300;
	color: #fc4646;
}

#nav a.router-link-exact-active {
	color: #fc4646;
}

#nav * {
	text-decoration: none;
}
</style>
