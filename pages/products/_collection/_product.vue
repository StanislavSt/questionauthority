<template>
	<Product v-if="product" :blok="product" />
</template>

<script>
import Product from "@/components/Product.vue";
export default {
	components: {
		Product
	},
	data() {
		return {};
	},
	async asyncData(context) {
		// load the content-entry at the current path - will be something like: '/posts/first-post'
		const product = await context.app.$storyapi.get(
			`cdn/stories${context.route.path}`,
			{ version: "draft", resolve_links: 1 }
		);
		return {
			product: product.data.story.content
		};
	}
};
</script>

