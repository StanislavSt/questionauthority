<template>
	<div class="footer">
		<div class="nav">
			<div class="item">
				<nuxt-link to="/products">Copyright</nuxt-link>
			</div>
			<div class="item">
				<nuxt-link to="/media">Terms and Conditions</nuxt-link>
			</div>
			<div class="item">
				<nuxt-link to="/media">Delivery</nuxt-link>
			</div>
			<div class="item">
				<nuxt-link to="/media">Contact</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:900&display=swap");
* {
	font-family: "Raleway", sans-serif;
	font-size: 0.9rem;
	color: white;
	text-decoration: none;
}
.footer {
	width: 100%;
}
.nav {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10rem;
	background: black;
}
.nav .item {
	margin: 0.1rem 0.9rem;
}
a:hover {
	opacity: 0.8;
	filter: alpha(opacity=70); /* For IE8 and earlier */
}
@media screen and (max-width: 480px) {
	* {
		font-size: 0.6rem;
	}
	.nav .item {
		margin: 0 0.2rem;
	}
	.nav {
		justify-content: space-between;
	}
}
</style>
