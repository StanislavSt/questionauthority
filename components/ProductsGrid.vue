<template>
	<div v-if="products.length>0">
		<div class="products animated fadeIn delay-0.2s">
			<div class="overview__item" v-for="product in products.slice(0,2)" :key="product.full_slug">
				<nuxt-link class="overview__item-inner" :to="'/' + product.full_slug">
					<img
						v-if="product.content.images.length > 0"
						:src="product.content.images[0].filename"
						:alt="product.content.images[0].name"
					/>
					<div class="product-price">
						<div class="item">€{{product.content.price}}</div>
					</div>
				</nuxt-link>
			</div>
		</div>
		<div class="small-products animated fadeIn delay-0.2s">
			<div class="overview__item" v-for="product in products.slice(0,4)" :key="product.full_slug">
				<nuxt-link class="overview__item-inner" :to="'/' + product.full_slug">
					<img
						v-if="product.content.images.length > 0"
						:src="product.content.images[0].filename"
						:alt="product.content.images[0].name"
					/>
					<div class="product-price">
						<div class="item">€{{product.content.price}}</div>
					</div>
				</nuxt-link>
			</div>
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
	display: flex;
	padding-top: 5rem;
	margin-left: auto;
	margin-right: auto;
	width: 53rem;
	max-width: 100%;
	justify-content: center;
}
.products .overview__item {
	flex: 1;
	max-height: 30rem;
}
.products .overview__item img {
	width: 100%;
	height: 100%;
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
.small-products {
	padding-top: 5rem;
	display: grid;
	grid-row-gap: 2rem;
	justify-content: center;
	width: 50rem;
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;
	grid-template-columns: auto auto auto;
	grid-template-rows: auto auto;
}
.small-products img {
	width: 100%;
	height: 100%;
	object-fit: contain;
}
.product-price {
	display: none;
	/*display: flex;*/
	justify-content: center;
	width: auto;
	padding-top: 0.5rem;
	font-size: 16px;
}
.product-price .item {
	color: white;
	background-color: black;
}
</style>
