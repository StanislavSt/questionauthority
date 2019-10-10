<template>
	<div>
		<Header />
		<div class="product" v-editable="blok">
			<div class="left">
				<div class="product__description">
					<div class="product__description" v-html="blok.description"></div>
				</div>
			</div>
			<div class="mid">
				<div v-if="blok.images.length > 0" class="product__images">
					<div v-for="image in blok.images" :key="image.filename">
						<img :src="image.filename" :alt="image.name " />
					</div>
				</div>
			</div>
			<div class="right">
				<div class="product__information">
					<!--<h1 class="product__headline">{{ blok.name }}</h1>-->
					<div class="product__price">{{ blok.price }} EURO</div>
					<div class="product__shipping">Shipping is at the customer's expense</div>
					<div class="product__size">View Size Chart</div>
					<button
						class="snipcart-add-item"
						:data-item-id="blok._uid"
						:data-item-name="blok.name"
						:data-item-price="blok.price"
					>Consume</button>
				</div>

				<!--
				<a href="#" class="snipcart-checkout">Click here to checkout</a>
				<div>Lots of content</div>
				<div class="snipcart-summary">
					Number of items:
					<span class="snipcart-total-items"></span>
					Total price:
					<span class="snipcart-total-price"></span>
				</div>-->
			</div>
		</div>
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
	props: ["blok"],
	data() {
		return {
			selectedImage: {}
		};
	},
	components: {
		Header
	}
};
</script>


<style>
.product {
	padding-top: 5rem;
	margin: 0 auto;
	max-width: 1100px;
	display: flex;
}
.product .left {
	flex: 1;
	justify-content: flex-start;
	border: 1px dashed red;
}
.product .mid {
	flex: 2;
	border: 1px dashed red;
}
.product .mid div img {
	display: block;
	margin: auto;
}
.product .right {
	flex: 1;
	justify-content: flex-end;
	border: 1px dashed red;
}

.product__information {
	margin: 0 auto;
	border: 1px dashed green;
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 0 0.5rem;
	top: 55%;
	position: absolute;
	width: auto;
}
.product__information * {
	padding-bottom: 0.5rem;
}

.product__information .product__price {
	display: block;
	font-size: 1.1rem;
	font-weight: bold;
}
.product__information .product__size {
	font-size: 0.8rem;
}
.product__information .product__shipping {
	font-size: 0.8rem;
}

.product__description {
	display: block;
	top: 60%;
	position: absolute;
}

.product__description h2 {
	margin-top: 20px;
	margin-bottom: 10px;
}
.snipcart-add-item {
	text-transform: uppercase;
	appearance: none;
	display: block;
	cursor: pointer;
	font-size: 1rem;
	background: #000;
	color: #fff;
	height: 1.9rem;
	width: 16rem;
}
.snipcart-summary {
	display: block;
}
</style>
