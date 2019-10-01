<template>
	<div>
		<Header />
		<div class="gallery">
			<img class="image" src="@/assets/QA3.jpg" alt />
			<img class="image" src="@/assets/QAINSTA1.jpg" alt />
			<img class="image" src="@/assets/QAFB3.jpg" alt />
			<img class="image" src="@/assets/QAINSTA2.jpg" alt />
			<img class="image" src="@/assets/QAINSTA3.jpg" alt />
		</div>
	</div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
	components: {
		Header
	}
};
</script>
<style scoped>
.gallery {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 1rem;
	margin: 5rem 10rem 5rem 10rem;
}
img {
	object-fit: cover;
	grid-column: auto / span 2;
	width: 100%;
	max-height: 100%;
}

@media (min-width: 920px) {
	img {
		grid-column: auto / span 1;
	}
	img:nth-child(3n + 3) {
		grid-column: auto / span 2;
	}
}
</style>
