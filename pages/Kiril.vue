<template>
	<div>
		<Header2 />
		<div class="gallery animated fadeIn">
			<img class="image" src="@/assets/Kiril1.jpg" alt />
			<img class="image" src="@/assets/Kiril2.jpg" alt />
			<img class="image" src="@/assets/Kiril7.jpg" alt />
		</div>
		<Footer />
	</div>
</template>
<script>
import Header2 from "@/components/Header2.vue";
import Footer from "@/components/Footer.vue";
export default {
	components: {
		Header2,
		Footer
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
