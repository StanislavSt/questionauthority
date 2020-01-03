<template>
	<div>
		<FeaturedCollection />
		<div class="text">Latest Collections</div>
		<CollectionPreview :blok="stories" />
		<CollectionPreview2 :blok="stories" />
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
import CollectionPreview from "@/components/CollectionPreview.vue";
import CollectionPreview2 from "@/components/CollectionPreview2.vue";
import { getPosts } from "@/api";
export default {
	components: {
		InstagramGallery,
		News,
		InformationLogo,
		ProductCarousel,
		FeaturedCollection,
		CollectionPreview,
		CollectionPreview2
	},
	asyncData(context) {
		// Check if we are in the editing mode
		let editMode = false;
		if (
			context.query._storyblok ||
			context.isDev ||
			(typeof window !== "undefined" &&
				window.localStorage.getItem("_storyblok_draft_mode"))
		) {
			if (typeof window !== "undefined") {
				window.localStorage.setItem("_storyblok_draft_mode", "1");
				if (window.location == window.parent.location) {
					window.localStorage.removeItem("_storyblok_draft_mode");
				}
			}
			editMode = true;
		}
		return context.app.$storyapi
			.get(`cdn/stories/`, {
				starts_with: "products/",
				version: editMode ? "draft" : "published",
				cv: context.store.state.cacheVersio
			})
			.then(res => {
				return res.data;
			})
			.catch(res => {
				if (!res.response) {
					console.error(res);
					errorCallback({
						statusCode: 404,
						message: "Failed to receive content from the api."
					});
				} else {
					console.error(res.response.data);
					errorCallback({
						statusCode: res.response.status,
						message: res.response.data
					});
				}
			});
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
