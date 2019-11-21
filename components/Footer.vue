<template>
	<div class="footer-container">
		<div class="navigation-container">
			<div class="topnav">
				<div class="item">
					<nuxt-link to="/products">Copyright</nuxt-link>
				</div>
				<div class="item">
					<nuxt-link to="/media">Terms and Conditions</nuxt-link>
				</div>
				<div class="item">
					<a href="/about">Delivery</a>
				</div>
				<div class="item">
					<a href="/world">Contact</a>
				</div>
			</div>
		</div>
	</div>
</template>




<script>
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:900&display=swap");
.footer-container {
	border-top: 1px solid #cccccc;
	height: auto;
	margin-top: 10rem;
	background: black;
}

.navigation-container .topnav {
	display: flex;
	justify-content: center;
}
.navigation-container .topnav .item {
	margin: 0.2rem 0.7rem 0.2rem 0.7rem;
	color: white;
	font-family: "Raleway", sans-serif;
	font-size: 0.9rem;
	text-decoration: none;
}
a:visited {
	text-decoration: none;
	color: white;
}
a:link {
	text-decoration: none;
}
a:hover {
	opacity: 0.8;
}
</style>
