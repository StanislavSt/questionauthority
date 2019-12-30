<template>
	<div class="sticky">
		<div class="logo-container">
			<nuxt-link tag="img" :src="require('@/assets/QA_Logo.png')" to="/"></nuxt-link>
			<nuxt-link class="news-text" to="/">Question</nuxt-link>
		</div>
		<div class="consume-container">
			<nuxt-link class="news-text2" to="/">Authority</nuxt-link>
			<div class="wrapper">
				<nuxt-link class="products" to="/products">shop</nuxt-link>
				<a class="snipcart-checkout">bag</a>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data: function() {
		return {};
	}
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:600,900&display=swap");
* {
	font-family: "Raleway", sans-serif;
	font-size: 18px;
	font-weight: bold;
	color: white;
}
.sticky {
	position: fixed;
	top: 0;
	display: flex;
	width: 100%;
	height: 2.3rem;
	z-index: 999;
	background: black;
}
.consume-container,
.logo-container {
	flex: 1;
	display: flex;
	align-items: center;
}
.consume-container {
	justify-content: space-between;
	margin-right: 1rem;
}
.wrapper > a:hover {
	opacity: 0.8;
	cursor: pointer;
}
.wrapper > a {
	font-size: 16px;
	font-weight: 100;
}
.products {
	text-decoration: none;
}
.logo-container {
	justify-content: space-between;
	background: white;
}
.logo-container img {
	height: 100%;
	width: auto;
	cursor: pointer;
	margin-left: 1rem;
	object-fit: contain;
}
.logo-container img:hover {
	opacity: 0.7;
	filter: alpha(opacity=70); /* For IE8 and earlier */
}
.news-text,
.news-text2 {
	text-transform: uppercase;
	text-decoration: none;
}
.news-text {
	color: black;
}

@media screen and (max-width: 600px) {
	* {
		font-size: 14px;
	}
	.date-container {
		display: none;
	}
	.news-text,
	.news-text2 {
		display: none;
	}
	.consume-container {
		justify-content: flex-end;
	}
	.logo-container {
		max-width: 50%;
	}
	.sticky {
		position: static;
		top: 0;
	}
}
</style>
