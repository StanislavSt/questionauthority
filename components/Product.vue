<template>
	<div>
		<Header />
		<div class="product" v-editable="blok">
			<!--<div class="left">
				<div class="product__information">
					<div class="product__price">Description</div>
					<div
						class="product__shipping"
					>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</div>
					<div class="product__sizechart">End</div>
				</div>
			</div>-->
			<div class="mid animated slideInUp delay-0.1s">
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
					<ProductInfo />
					<div class="product__sizechart">View Size Chart</div>
					<div class="product__size">
						<ul>
							<li
								v-for="(name,i) in sizes"
								v-bind:key="name.id"
								@click="current = i"
								:class="{current:i == current}"
							>{{name}}</li>
						</ul>
					</div>
					<button
						class="snipcart-add-item"
						:data-item-id="blok._uid"
						:data-item-name="blok.name"
						:data-item-price="blok.price"
					>Consume</button>

					<!--<h1 class="product__headline">{{ blok.name }}</h1>-->
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
		<Footer />
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ProductInfo from "@/components/ProductInfo.vue";
export default {
	props: ["blok"],
	data() {
		return {
			zoomerOptions: {
				zoomFactor: 3,
				pane: "pane",
				hoverDelay: 300,
				namespace: "zoomer-top",
				move_by_click: false,
				scroll_items: 7,
				choosed_thumb_border_color: "#dd2c00",
				scroller_position: "top",
				zoomer_pane_position: "left"
			},
			images: {
				normal_size: [
					this.blok.images.map(a => ({
						id: a.name,
						url: a.filename
					}))
				]
			},
			sizes: ["S", "M", "L", "XL"],
			current: 1
		};
	},
	components: {
		Header,
		Footer,
		ProductInfo
	},
	computed: {
		allImages() {
			normal_size: {
				return this.blok.images.map(a => ({
					id: a.name,
					url: a.filename
				}));
			}
		}
	}
};
</script>


<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");
@import url("https://fonts.googleapis.com/css?family=Barlow&display=swap");

.current {
	background: #222;
	color: white;
}

.product {
	padding: 10rem 0 2rem 0;
	margin: 0 auto;
	width: 75%;
	display: flex;
}
.product .mid {
	flex: 4;
}
.product .mid div img {
	display: block;
	margin: auto;
}
.product .left {
	flex: 1;
	justify-content: flex-start;
}

.product .right {
	flex: 1;
}
.product__information {
	margin: 0 auto;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	margin: 0 0.5rem 5rem;
	top: 25%;
	padding-top: 3rem;
	min-height: 20rem;
	position: -webkit-sticky;
	position: sticky;
}
.product__information * {
	padding-bottom: 0.5rem;
}

.product__price {
	display: block;
	font-size: 1.1rem;
	font-weight: bold;
}
.product__sizechart {
	font-size: 0.8rem;
}
.product__size {
	padding-top: 1rem;
	width: 100%;
}
.product__size ul {
	display: flex;
	justify-content: space-between;
	padding: 0;
}
.product__size ul li {
	list-style-type: none;
	border-top: solid 1px black;
	width: 3.5rem;
	text-align: center;
	padding: 1rem;
	cursor: pointer;
	font-size: 0.8rem;
}
.product__size ul li:hover {
	background: #222;
	color: white;
}
.active {
	background: black;
	color: white;
}
.product__shipping {
	font-size: 0.8rem;
}

.product__description {
	display: block;
	padding-top: 5rem;
}

.product__description h2 {
	margin-top: 20px;
	margin-bottom: 10px;
}
.product__images img {
	padding-bottom: 5rem;
	width: 45rem;
	max-width: 100%;
}
.snipcart-add-item {
	text-transform: uppercase;
	text-align: center;
	display: inline-flex;
	align-items: center;
	justify-content: space-around;
	cursor: pointer;
	font-size: 1rem;
	background: #000;
	color: #fff;
	height: 1.9rem;
	width: 100%;
	max-width: 100%;
	padding: 0;
}
.snipcart-add-item:hover {
	opacity: 0.7;
}
.snipcart-summary {
	display: block;
}
</style>
