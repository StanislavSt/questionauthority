<template>
	<div>
		<div class="product" v-editable="blok">
			<div class="mid">
				<div v-if="blok.images.length > 0" class="product__images animated slideInUp delay-0.1s">
					<div v-for="image in blok.images" :key="image.filename">
						<img :src="image.filename" :alt="image.name " />
					</div>
				</div>
				<ProductCarousel :blok="blok.images" />
			</div>
			<div class="right">
				<div class="product__information">
					<div class="product__price">{{ blok.price }} EURO</div>
					<div class="product__shipping">Shipping is at the customer's expense</div>
					<ProductInfo :blok="productInfo" />
					<div class="product__sizechart">View Size Chart</div>
					<div class="product__size">
						<ul>
							<li
								v-for="(stock,size) in allSizes"
								v-bind:key="size.id"
								@click="stock > 0 ? current = size : current "
								v-bind:class="getInStockClass(size,stock,current)"
								@mouseover="hover = true"
								@mouseleave="hover = false"
							>{{size}}</li>
						</ul>
					</div>
					<button
						v-bind:class="getSoldOutClass()"
						data-item-stackable="true"
						:data-item-id="blok._uid"
						:data-item-name="blok.name"
						:data-item-price="blok.price"
						:data-item-url="$nuxt.$route.path"
						:data-item-image="allImages[0].url"
						data-item-custom1-name="SIZE"
						:data-item-custom1-options="currentSizeOptions"
						:data-item-custom1-value="current"
						:data-item-max-quantity="allSizes[current]"
						data-item-autopop="false"
					>{{consumeBtnText}}</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ProductInfo from "@/components/ProductInfo.vue";
import ProductCarousel from "@/components/ProductCarousel.vue";
export default {
	props: ["blok"],
	data() {
		return {
			current: "",
			hover: false
		};
	},
	components: {
		ProductInfo,
		ProductCarousel
	},
	methods: {
		getInStockClass(size, stock, current) {
			return {
				"no-stock": stock < 1,
				current: size == current && stock > 0,
				size_hover: this.hover && stock > 0
			};
		},
		getSoldOutClass() {
			if (this.sizeInStock.length == 0) return "sold-out";
			else return "snipcart-add-item";
		}
	},
	computed: {
		allImages() {
			normal_size: {
				return this.blok.images.map(a => ({
					id: a.name,
					url: a.filename
				}));
			}
		},
		allSizes() {
			return {
				S: this.blok.SQuantity,
				M: this.blok.MQuantity,
				L: this.blok.LQuantity,
				XL: this.blok.XLQuantity
			};
		},
		sizeInStock() {
			const arr = [];
			for (const [k, v] of Object.entries(this.allSizes)) {
				if (v > 0) arr.push(k);
			}
			return arr;
		},
		currentSizeOptions() {
			return this.sizeInStock.join("|");
		},
		productInfo() {
			return {
				dimensions: this.blok.dimensions,
				material: this.blok.material,
				product_care: this.blok.product_care,
				weight: this.blok.weight
			};
		},
		consumeBtnText() {
			if (this.sizeInStock.length == 0) return "sold out";
			else return "consume";
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
.product > div {
	margin: 10px;
}
.product .mid {
	flex: 4;
}
.product .mid div img {
	display: block;
	margin: auto;
}
.product .right {
	flex: 1;
}
.product__information {
	margin: 0 auto;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
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

	font-size: 0.8rem;
}
.no-stock {
	text-decoration: line-through;
	cursor: default;
}
.size_hover:hover {
	background: #222;
	color: white;
	cursor: pointer;
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
.sold-out,
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
.sold-out {
	background: rgb(54, 52, 52);
	pointer-events: none;
}
.snipcart-add-item:hover {
	opacity: 0.7;
}
.snipcart-summary {
	display: block;
}

@media screen and (max-width: 1000px) {
	.product {
		flex-direction: column;
		width: 90%;
		padding-top: 2rem;
	}
	.product__information {
		max-width: 85%;
		padding-top: 0;
		margin-bottom: 0;
	}
	.product .right {
		display: flex;
		justify-content: center;
	}
	.product__images {
		display: none;
	}
}
</style>
