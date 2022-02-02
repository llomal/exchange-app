<template>
	<div class="header">
		<div class="header--logo">Exchange app</div>
		<div class="header__menu">
			<div class="header__menu__li">
				<router-link to="/">Rates</router-link>
			</div>
			<div class="header__menu__li">
				<router-link to="/exchange">Exchange</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Header"
}
</script>

<style scoped lang="scss">
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 64px;

	&--logo {
		font-weight: bold;
	}

	&__menu {
		display: flex;

		&__li {
			margin: 0 15px;
			cursor: pointer;

			a {
				color: #2c3e50;
				text-decoration: none;
			}
		}
	}
}
</style>