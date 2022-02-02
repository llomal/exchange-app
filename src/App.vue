<template>
	<div class="app">
		<Header/>
		<router-view/>
	</div>
</template>

<script>
import Header from "./components/Header";

export default {
	name: 'App',
	components: {Header},
}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	max-width: 1020px;
	margin: 0 auto;
}

select {
	background: #eee;
	height: 42px;
	border: none;
	font-size: 16px;
	border-radius: 4px;
	outline: none;
	padding: 0 5px;
	min-width: 98px;
	margin: 0 4px;
}

button {
	background-color: #FF3CAC;
	background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
	height: 42px;
	border: none;
	min-width: 120px;
	border-radius: 4px;
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
	color: #fff;

	&:active {
		background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 90%, #2B86C5 100%);
	}
}

input {
	background: #fff;
	border: 1px solid #ccc;
	border-radius: 4px;
	height: 39px;
	font-size: 16px;
	padding: 0 10px;
	outline: none;
}
</style>
