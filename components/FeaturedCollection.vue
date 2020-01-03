<template>
	<div class="section-featured-collection">
		<div class="featured-collection">
			<nuxt-link class="section-right" to="/products">
				<span class="span-shop">Kiril Kiryakov x Question Authority</span>
				<!--<button class="btn-shop">Shop</button>-->
			</nuxt-link>
			<nuxt-link class="section-left" to="/products">
				<span class="span-shop">Kiril Kiryakov x Question Authority</span>
				<!--<button class="btn-shop">Shop</button>-->
			</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-shop {
	background: transparent;
	color: white;
	height: 40px;
	width: 120px;
	border: 2px solid black;
	cursor: pointer;
}
.span-shop {
	position: absolute;
	bottom: 0;
	left: 0;
	color: white;
	background-color: black;
	margin-left: 5px;
}
.section-featured-collection {
	margin-top: 2.3rem;
	height: 40vw;
	width: 100%;
}
.featured-collection {
	height: 100%;
	width: 100%;
	display: flex;
	border: 2px solid black;
}
.section-right,
.section-left {
	position: relative;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center top;
	transition: all 0.4s ease;
	cursor: pointer;
}
.section-right {
	flex: 1;
	order: 2;
	background-image: url("../assets/Kiril/Urb/Negative0-12-11.jpg");
	border-left: 2px solid black;
}
.section-left {
	flex: 2;
	order: 1;
	background-image: url("../assets/Kiril/Urb/Negative0-21-20.jpg");
}
.section-right:hover ~ .section-left {
	flex: 1;
}
</style>