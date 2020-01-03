<template>
	<CollectionPreview :blok="stories" />
</template>
<script>
import CollectionPreview from "@/components/CollectionPreview.vue";
export default {
	components: {
		CollectionPreview
	},
	data() {
		return {};
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
