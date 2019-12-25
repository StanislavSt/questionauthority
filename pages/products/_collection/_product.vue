<template>
	<Product v-if="product" :blok="product" />
</template>

<script>
import Product from "@/components/Product.vue";
import { getProduct } from "@/api";
export default {
	components: {
		Product
	},
	async asyncData(context) {
		const product = await getProduct(context);
		return { product: product.story.content };
	}
};
</script>

