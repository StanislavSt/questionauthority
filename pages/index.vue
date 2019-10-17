<template>
	<div>
		<Header />
		<div class="container">
			<div class="embed-container">
				<iframe
					src="https://player.vimeo.com/video/367024729?color=ff9933&title=0&byline=0&portrait=0"
					frameborder="0"
					webkitAllowFullScreen
					mozallowfullscreen
					allowfullscreen
				></iframe>
			</div>
			<div class="image-container">
				<nuxt-link to="/Kiril">
					<img src="@/assets/Kiril_Art.jpg" alt />
				</nuxt-link>
				<div class="image-description">
					<div class="item">Question Authority</div>
					<div class="item">X</div>
					<div class="item">Kiril kiryakov</div>
				</div>
			</div>
			<div class="image-container">
				<nuxt-link to="/SavageRavage">
					<img src="@/assets/SavageRavage.jpg" alt />
				</nuxt-link>
				<div class="image-description">
					<div class="item">Question Authority</div>
					<div class="item">X</div>
					<div class="item">Savage Ravage</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
	data() {
		return {};
	},
	components: {
		Header,
		Footer
	}
};
</script>

<style scoped>
.container {
	padding-top: 5rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	max-width: 50%;
	margin-left: auto;
	margin-right: auto;
	grid-gap: 3rem;
}
.image-container {
	object-fit: cover;
	grid-column: auto / span 1;
	max-height: 100%;
	padding: 4rem 0 3rem 0;
	margin-left: auto;
	margin-right: auto;
	max-width: 100%;
	text-align: center;
}
.image-container img {
	width: 100%;
	transition: opacity 0.4s ease-out;
	-moz-transition: opacity 0.4s ease-out;
	-webkit-transition: opacity 0.4s ease-out;
	-o-transition: opacity 0.4s ease-out;
}
.image-container img:hover {
	opacity: 0.6;
	transition: opacity 0.5s ease-out;
	-moz-transition: opacity 0.5s ease-out;
	-webkit-transition: opacity 0.5s ease-out;
	-o-transition: opacity 0.5s ease-out;
}
.image-container .image-description {
	display: flex;
	justify-content: space-between;
	width: 450px;
	margin-left: auto;
	margin-right: auto;
	width: 29.5%;
	padding-top: 0.5rem;
}
.image-container .image-description .item {
	justify-content: space-between;
	text-transform: uppercase;
	font-size: 12px;
}

/* Vimeo embed settings */
.embed-container {
	position: relative;
	padding-bottom: 56.25%;
	height: 0;
	overflow: hidden;
	max-width: 100%;
	height: auto;
	grid-column: auto / span 2;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>
