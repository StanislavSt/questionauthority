<template>
	<div>
		<News :blok="collections" />
		<InstagramGallery />
		<InformationLogo />
	</div>
</template>

<script>
import InstagramGallery from "@/components/InstagramGallery.vue";
import News from "@/components/News.vue";
import InformationLogo from "@/components/InformationLogo.vue";
import { getPosts } from "@/api";
export default {
	components: {
		InstagramGallery,
		News,
		InformationLogo
	},
	async asyncData(context) {
		const posts = await getPosts(context);
		return { collections: posts };
	}
};
</script>

<style scoped>
</style>
