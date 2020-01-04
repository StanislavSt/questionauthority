<template>
	<div class="section-featured-collection">
		<div class="featured-collection">
			<nuxt-link class="section-right" to="/products">
				<span class="span-collection-name">Kiril Kiryakov x Question Authority</span>
			</nuxt-link>
			<nuxt-link class="section-left" to="/products">
				<span class="span-collection-name">Kiril Kiryakov x Question Authority</span>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.section-featured-collection {
	margin-top: 2.3rem;
	height: 40vw;
	width: 100%;
}
.featured-collection {
	height: 100%;
	width: 100%;
	display: flex;
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
	flex: 0.85;
}
.span-collection-name {
	position: absolute;
	bottom: 0;
	left: 0;
	color: white;
	background-color: black;
	margin-left: 5px;
}
@media screen and (max-width: 780px) {
	.section-featured-collection {
		margin-top: 0;
		height: 120vw;
	}
	.featured-collection {
		flex-direction: column;
	}
	.section-right,
	.section-left {
		flex: 1;
	}
	.span-collection-name {
		font-size: 2.5vw;
	}
}
</style>