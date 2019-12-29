<template>
	<ProductCarousel :blok="this.images" />
</template>
<script>
import ProductCarousel from "@/components/ProductCarousel.vue";
export default {
	components: {
		ProductCarousel
	}
};
</script>
