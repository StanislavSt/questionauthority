<template>
	<div>
		<Header />
		<div class="gallery animated fadeIn fast">
			<img class="image" src="@/assets/QA3.jpg" alt />
			<img class="image" src="@/assets/QAINSTA1.jpg" alt />
			<img class="image" src="@/assets/QAFB3.jpg" alt />
			<img class="image" src="@/assets/QAINSTA2.jpg" alt />
			<img class="image" src="@/assets/QAINSTA3.jpg" alt />
		</div>
		<Footer />
	</div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
	components: {
		Header,
		Footer
	}
};
</script>
<style scoped>
.animated {
	animation-fill-mode: forwards;
}
.gallery {
	animation-fill-mode: both;
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
