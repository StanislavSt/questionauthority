<template>
	<div class="collection-container">
		<div class="image-container" @mouseenter="show=true" @mouseleave="show=false">
			<div class="image-text">
				<span>Absolute Comfort</span>
				<button v-if="show">view collection</button>
			</div>
		</div>
		<div class="products-container">
			<ProductsGrid2 :products="this.blok.slice(6,8)" />
		</div>
	</div>
</template>
<script>
import ProductsGrid2 from "@/components/ProductsGrid2.vue";
export default {
	props: ["blok"],
	data() {
		return {
			image:
				"http://a.storyblok.com/f/66978/1685x938/1ddbb6835d/qa_comfort.png",
			show: false
		};
	},
	components: {
		ProductsGrid2
	}
};
</script>
<style scoped>
.collection-container {
	width: 100%;
	max-width: 1400px;
	height: 600px;
	display: flex;
	margin: 5rem auto;
}
.image-container {
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	background-size: cover;
	background-position: center top;
	background-image: url("http://a.storyblok.com/f/66978/1685x938/1ddbb6835d/qa_comfort.png");
	transition: all 0.6s;
}
.image-container:hover {
	cursor: pointer;
	opacity: 0.8;
}
.image-text {
	top: 50%;
	left: 50%;

	display: flex;
	flex-direction: column;
}
.image-text span {
	line-height: 20px;
	font-size: 18px;
	text-transform: uppercase;
	background: black;
	color: white;
}
.image-text button {
	height: 45px;
	margin-top: 25px;
	border: 1px solid white;
	background: transparent;
	font-size: 16px;
	text-transform: uppercase;
	color: white;
	cursor: pointer;
}
.products-container {
	height: 100%;
	flex: 1.2;
}
</style>