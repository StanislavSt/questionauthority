<template>
	<ProductCarousel :blok="this.images" />
</template>
<script>
import ProductCarousel from "@/components/ProductCarousel.vue";
export default {
	components: {
		ProductCarousel
	},
	data() {
		return {
			images: [
				{
					src:
						"http://a.storyblok.com/f/66978/1001x929/88b5761e59/qa_red.png",
					id: 1
				},
				{
					src:
						"http://a.storyblok.com/f/66978/1500x1000/dc1e65f1c9/2.png",
					id: 2
				},
				{
					src:
						"http://a.storyblok.com/f/66978/1500x1000/43f01b0d3e/3.png",
					id: 3
				}
			]
		};
	}
};
</script>
