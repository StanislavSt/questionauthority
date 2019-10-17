<template>
	<div>
		<div class="top">Scroll \/</div>
		<div class="sticky">
			<div class="logo-container">
				<nuxt-link to="/">
					<img src="@/assets/QA_Logo.png" alt />
				</nuxt-link>
			</div>
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

		<div class="bottom">Content</div>
	</div>
</template>
<script>
export default {
	data: function() {
		return {};
	},
	mounted() {
		var sticky = document.querySelector(".sticky");
		this.$nextTick(function() {
			if (sticky.style.position !== "sticky") {
				var stickyTop = sticky.offsetTop;

				document.addEventListener("scroll", function() {
					window.scrollY >= stickyTop
						? sticky.classList.add("fixed")
						: sticky.classList.remove("fixed");
				});
			}
		});
	}
};
</script>
<style scoped>
.sticky {
	position: sticky;
	z-index: 999;
	font-size: 32px;
	top: 0;
	width: 100%;
	height: auto;
	padding: 1em 0;
	color: white;
	text-align: center;
	transition: all 0.2s ease;
	padding-bottom: 0rem;
	background: white;
}

.sticky .logo-container {
	-webkit-transition: all 0.2s ease;
	-moz-transition: all 0.2s ease;
	-o-transition: all 0.2s ease;
	-ms-transition: all 0.2s ease;
}
.fixed .logo-container {
	margin: 0;
	padding: 0;
	transform: scale(0.85);
	-webkit-transition: all 0.2s ease;
	-moz-transition: all 0.2s ease;
	-o-transition: all 0.2s ease;
	-ms-transition: all 0.2s ease;
	transition: all 0.2s ease;
}

.fixed {
	margin: 0;
	padding: 0;
	font-size: 24px;
	position: fixed;
	height: 5rem;
	-webkit-transition: all 0.2s ease;
	-moz-transition: all 0.2s ease;
	-o-transition: all 0.2s ease;
	-ms-transition: all 0.2s ease;
	transition: all 0.3s ease-in-out;
}

.top {
	text-align: center;
	height: 1px;
	color: #fff;
}

.bottom {
	padding-top: 2rem;
	color: white;
	text-align: center;
}

body {
	margin: 0;
}

:root {
	height: 1000%;
	font-family: sans-serif;
}

/* Original */
/* Original */
/* Original */

.logo-container {
	display: flex;
	justify-content: center;
	align-items: center;
}
.logo-container img {
	padding: 0rem 0 0 0;
	margin-left: auto;
	margin-right: auto;
	max-width: 100%;
	height: auto;
	width: 10rem;
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
