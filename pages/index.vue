<template>
	<div>
		<Header />
		<div class="container animated fadeIn delay-0.2s">
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
		<div class="container-gallery">
			<a
				href="https://www.facebook.com/questionauthoritysf/photos/a.494778897292773/1712915928812391/?type=3&theater"
			>
				<img class="image" src="@/assets/Pictures/Pic3.jpg" alt />
			</a>
			<a
				href="https://www.facebook.com/questionauthoritysf/photos/a.494778897292773/1712915928812391/?type=3&theater"
			>
				<img class="image" src="@/assets/Pictures/Pic4.jpg" alt />
			</a>
			<a
				href="https://www.facebook.com/questionauthoritysf/photos/a.494778897292773/1712915928812391/?type=3&theater"
			>
				<img class="image" src="@/assets/Pictures/Pic6.jpg" alt />
			</a>

			<a
				href="https://www.facebook.com/questionauthoritysf/photos/a.494778897292773/1712915928812391/?type=3&theater"
			>
				<img class="image" src="@/assets/Pictures/Pic2.jpg" alt />
			</a>
			<a
				href="https://www.facebook.com/questionauthoritysf/photos/a.494778897292773/1712915928812391/?type=3&theater"
			>
				<img class="image" src="@/assets/Pictures/Pic6.jpg" alt />
			</a>
			<a
				href="https://www.facebook.com/questionauthoritysf/photos/a.494778897292773/1712915928812391/?type=3&theater"
			>
				<img class="image" src="@/assets/Pictures/Pic4.jpg" alt />
			</a>
			<a
				href="https://www.facebook.com/questionauthoritysf/photos/a.494778897292773/1712915928812391/?type=3&theater"
			>
				<img class="image" src="@/assets/Pictures/Pic3.jpg" alt />
			</a>
			<a
				href="https://www.facebook.com/questionauthoritysf/photos/a.494778897292773/1712915928812391/?type=3&theater"
			>
				<img class="image" src="@/assets/Pictures/Pic4.jpg" alt />
			</a>
			<a
				href="https://www.facebook.com/questionauthoritysf/photos/a.494778897292773/1712915928812391/?type=3&theater"
			>
				<img class="image" src="@/assets/Pictures/Pic3.jpg" alt />
			</a>
			<a
				href="https://www.facebook.com/questionauthoritysf/photos/a.494778897292773/1712915928812391/?type=3&theater"
			>
				<img class="image" src="@/assets/Pictures/Pic6.jpg" alt />
			</a>
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
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");
.container-gallery {
	padding-top: 9rem;
	max-width: 50%;
	display: grid;
	justify-content: center;

	grid-template-columns: 8vw 8vw 8vw 8vw 8vw;
	grid-template-rows: repeat(2, 8vw);
	margin-left: auto;
	margin-right: auto;
}
.container-gallery img {
	-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
	filter: grayscale(100%);
	width: 100%;
	height: 100%;
	transition: filter 0.5s;
}
.container-gallery img:hover {
	-webkit-filter: grayscale(0); /* Safari 6.0 - 9.0 */
	filter: grayscale(0) saturate(150%);
	transition: filter 0.5s;
}
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
