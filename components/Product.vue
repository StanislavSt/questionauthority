<template>
	<div>
		<Header />
		<div class="product" v-editable="blok">
			<div class="left">
				<div class="product__information">
					<!--<h1 class="product__headline">{{ blok.name }}</h1>-->
					<div class="product__price">Description</div>
					<div
						class="product__shipping"
					>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</div>
					<div
						class="product__size"
					>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, mak</div>
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
		<Header />
		<Header />
		<Header />
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
}
.product .mid {
	flex: 2;
}
.product .mid div img {
	display: block;
	margin: auto;
}
.product .right {
	flex: 1;
	justify-content: flex-end;
}

.product__information {
	margin: 0 auto;
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 0 0.5rem 5rem;
	top: 40%;
	min-height: 20rem;
	position: -webkit-sticky;
	position: sticky;
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
	position: -webkit-sticky;
	position: sticky;
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
