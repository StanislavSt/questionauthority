<template>
	<div class="products" v-if="products.length>0">
		<div class="overview__item" v-for="product in products" :key="product.full_slug">
			<nuxt-link class="overview__item-inner" :to="'/' + product.full_slug">
				<img
					v-if="product.content.images.length > 0"
					:src="product.content.images[0].filename"
					:alt="product.content.images[0].name"
				/>
			</nuxt-link>
		</div>
	</div>
</template>
<script>
export default {
	props: ["products"]
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:900&display=swap");
.products {
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.products .overview__item img {
	width: 20rem;
	object-fit: contain;
}
.overview__item img:hover {
	filter: alpha(opacity=70);
	opacity: 0.7;
	-webkit-transition: opacity 0.2s ease-in-out;
	-moz-transition: opacity 0.2s ease-in-out;
	-ms-transition: opacity 0.2s ease-in-out;
	-o-transition: opacity 0.2s ease-in-out;
	transition: opacity 0.2s ease-in-out;
}
</style>
