<template>
	<ProductCarousel :blok="images" />
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
					name: "",
					filename:
						"//a.storyblok.com/f/66978/1000x1500/4922597247/1.png"
				},
				{
					name: "",
					filename:
						"//a.storyblok.com/f/66978/1000x1500/2e56d4b955/2.png"
				},
				{
					name: "",
					filename:
						"//a.storyblok.com/f/66978/1500x1000/5ad2623264/6.png"
				},
				{
					name: "",
					filename:
						"//a.storyblok.com/f/66978/1500x1000/c357295604/4.png"
				},
				{
					name: "",
					filename:
						"//a.storyblok.com/f/66978/1500x1000/07a6783a42/5.png"
				},
				{
					name: "",
					filename:
						"//a.storyblok.com/f/66978/1500x1000/b7fc7e4203/3.png"
				}
			]
		};
	}
};
</script>
