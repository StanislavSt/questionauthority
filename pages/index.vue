<template>
	<div>
		<FeaturedCollection />
		<div class="text">Collections</div>
		<News :blok="collections" />
		<InstagramGallery />
		<InformationLogo />
	</div>
</template>

<script>
import InstagramGallery from "@/components/InstagramGallery.vue";
import News from "@/components/News.vue";
import InformationLogo from "@/components/InformationLogo.vue";
import ProductCarousel from "@/components/ProductCarousel.vue";
import FeaturedCollection from "@/components/FeaturedCollection.vue";
import { getPosts } from "@/api";
export default {
	components: {
		InstagramGallery,
		News,
		InformationLogo,
		ProductCarousel,
		FeaturedCollection
	},
	async asyncData(context) {
		const posts = await getPosts(context);
		return { collections: posts };
	}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:600,900&display=swap");
.text {
	font-family: "Raleway", sans-serif;
	margin-top: 5rem;
	text-align: center;
	font-size: 32px;
	text-transform: uppercase;
}
</style>
