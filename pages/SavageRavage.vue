<template>
	<div>
		<Header />
		<div class="video-container">
			<div class="video-title">Savage Ravage</div>
			<iframe
				width="900"
				height="500"
				src="https://www.youtube.com/embed/sBxC_viqxgc"
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
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
.video-container {
	padding-top: 5rem;
	text-align: center;
}
.video-container .video-title {
	font-size: 2rem;
	text-transform: uppercase;
	padding-bottom: 3rem;
}
</style>
