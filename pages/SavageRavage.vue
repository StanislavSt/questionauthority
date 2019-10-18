<template>
	<div>
		<Header />
		<div class="video-container animated fadeIn delay-0.5s">
			<div class="video-title">Savage Ravage</div>
			<iframe
				src="https://player.vimeo.com/video/367024729?color=ff9933&title=0&byline=0&portrait=0"
				width="940"
				height="529"
				frameborder="0"
				allow="autoplay; fullscreen"
				allowfullscreen
			></iframe>
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
* {
	background: black;
}
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
