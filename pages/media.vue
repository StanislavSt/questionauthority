<template>
	<div>
		<Header2 />
		<div class="video-container animated fadeIn delay-0.5s">
			<div class="video-title">concert i</div>
			<iframe
				width="900"
				height="500"
				src="https://www.youtube.com/embed/ogm-TD0vSZg"
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	</div>
</template>
<script>
import Header2 from "@/components/Header2.vue";
export default {
	components: {
		Header2
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
