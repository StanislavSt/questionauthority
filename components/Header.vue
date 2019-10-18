<template>
	<div>
		<div class="top">Scroll \/</div>
		<div class="sticky">
			<div class="logo-container">
				<nuxt-link to="/">
					<img src="@/assets/QA_Logo.png" alt />
				</nuxt-link>
			</div>
			<div class="navigation-container">
				<div class="topnav">
					<div class="item">
						<nuxt-link to="/media">Media</nuxt-link>
					</div>
					<div class="item">
						<nuxt-link to="/products">shop</nuxt-link>
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
@import url("https://fonts.googleapis.com/css?family=Barlow&display=swap");
.sticky {
	display: flex;
	justify-content: space-between;
	position: sticky;
	z-index: 999;
	font-size: 32px;
	top: 0;
	width: 100%;
	height: 1rem;
	padding: 1rem 0;
	color: white;
	text-align: center;
	transition: all 0.2s ease;
	padding-bottom: 0rem;
}

.sticky .logo-container {
	margin: 0rem 0 0 2rem;
	-webkit-transition: all 0.2s ease;
	-moz-transition: all 0.2s ease;
	-o-transition: all 0.2s ease;
	-ms-transition: all 0.2s ease;
}
.fixed .logo-container {
	margin: 0rem 0 0 1rem;
	transform: scale(0.85);
	-webkit-transition: all 0.2s ease;
	-moz-transition: all 0.2s ease;
	-o-transition: all 0.2s ease;
	-ms-transition: all 0.2s ease;
	transition: all 0.2s ease;
}

.fixed {
	margin-top: 0;
	padding: 0;
	font-size: 24px;
	position: fixed;
	top: 0;
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
.navigation-container {
	justify-content: flex-end;
}
.logo-container {
	display: flex;
}
.logo-container img {
	justify-content: flex-start;

	max-width: 100%;
	height: auto;
	width: 10rem;
}
.navigation-container .topnav {
	justify-content: flex-end;
	display: flex;

	height: 100%;
	width: 100%;
}
/* Style the links inside the navigation bar */
.topnav .item a {
	font-family: "Barlow", sans-serif;
	flex: 1;
	color: black;
	text-align: center;
	text-decoration: none;
	font-size: 13px;
	text-transform: uppercase;
	margin: 0 2rem 0.3% 2rem;
}
.topnav .item {
	padding: 0 1rem 0 1rem;
}

/* Change the color of links on hover */
.topnav a:hover {
	border-bottom: solid 1px;
	color: rgba(0, 0, 0, 0.425);
}
</style>
