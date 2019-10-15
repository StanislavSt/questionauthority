<template>
	<div class="footer-container">
		<div class="navigation-container">
			<div class="topnav">
				<div class="item">
					<nuxt-link to="/products">Terms of Use</nuxt-link>
				</div>
				<div class="item">
					<nuxt-link to="/media">Legal</nuxt-link>
				</div>
				<div class="item">
					<a href="/about">Privacy Policy</a>
				</div>
				<div class="item">
					<a href="/world">Contact</a>
				</div>
				<div class="item">
					<a href="/world">Social</a>
				</div>
			</div>
		</div>
		<div class="copyright">QUESTIONAUTHORITY</div>
	</div>
</template>




<script>
</script>

<style scoped>
.footer-container {
	border-top: 1px solid #cccccc;
	height: 200px;
	margin-top: 15rem;
}

.navigation-container .topnav {
	display: flex;
	margin: 0 25rem 0 25rem;
}
/* Style the links inside the navigation bar */
.topnav .item a {
	color: #cccccc;
	text-decoration: none;
	font-size: 13px;
	text-transform: uppercase;
}
.topnav .item {
	padding: 3rem 3rem 0 3rem;
}
.topnav .item:last-of-type {
	margin-left: auto;
}
/* Change the color of links on hover */
.topnav a:hover {
	color: rgba(0, 0, 0, 0.425);
}
.copyright {
	color: #cccccc;
	font-size: 11px;
	letter-spacing: 0.025em;
	text-align: center;
	padding: 50px 0 25px 0;
}
</style>
