<template>
	<div>
		<div class="logo-container">
			<nuxt-link to="/">
				<img src="@/assets/QA_Logo.png" alt />
			</nuxt-link>
		</div>
		<div class="navigation-container">
			<div class="topnav">
				<div class="item">
					<nuxt-link to="/products">Store</nuxt-link>
				</div>
				<div class="item">
					<nuxt-link to="/media">Media</nuxt-link>
				</div>
				<div class="item">
					<a href="/about">About</a>
				</div>
				<div class="item">
					<a href="/world">World</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo-container img {
	padding: 4rem 0 0 0;
	display: block;
	margin-left: auto;
	margin-right: auto;
	max-width: 100%;
	height: auto;
	width: 15rem;
}
.navigation-container .topnav {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
}
/* Style the links inside the navigation bar */
.topnav .item a {
	flex: 1;
	color: black;
	text-align: center;
	text-decoration: none;
	font-size: 13px;
	text-transform: uppercase;
	padding: 0 1% 0.3% 1%;
}
.topnav .item {
	padding: 0 3% 0 3%;
}
.topnav .item:nth-child(2) {
	padding-right: 8%;
}

/* Change the color of links on hover */
.topnav a:hover {
	border-bottom: solid 1px;
	color: rgba(0, 0, 0, 0.425);
}
</style>
