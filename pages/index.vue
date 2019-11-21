<template>
	<div>
		<Header2 />
		<div class="container animated fadeIn">
			<!--<div class="embed-container">
				<iframe
					src="https://player.vimeo.com/video/367024729?color=ff9933&title=0&byline=0&portrait=0"
					frameborder="0"
					webkitAllowFullScreen
					mozallowfullscreen
					allowfullscreen
				></iframe>
			</div>-->
			<div class="image-container">
				<nuxt-link to="/absolute-comfort">
					<img src="@/assets/QA_Comfort.png" alt />
				</nuxt-link>
				<div class="image-description">
					<div class="item">Question Authority - Absolute Comfort</div>
				</div>
			</div>
			<div class="image-container">
				<nuxt-link to="/SavageRavage">
					<img src="@/assets/SavageRavage.png" alt />
				</nuxt-link>
				<div class="image-description">
					<div class="item">Question Authority &nbsp; &nbsp;X &nbsp; &nbsp;Savage Ravage</div>
				</div>
			</div>
			<div class="image-container">
				<nuxt-link to="/SavageRavage">
					<img src="@/assets/QA_WhiteTee.jpg" alt />
				</nuxt-link>
				<div class="image-description">
					<div class="item">Question Authority &nbsp; &nbsp;X &nbsp; &nbsp;Kiril Kiryakov</div>
				</div>
			</div>

			<div class="image-container">
				<nuxt-link to="/SavageRavage">
					<img src="@/assets/QAINSTA1.jpg" alt />
				</nuxt-link>
				<div class="image-description">
					<div class="item">Question Authority - Concept I</div>
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
		<div
			class="information-container"
		>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
		<div class="signature">
			<img src="@/assets/QA_Signature.png" alt />
		</div>
		<Footer />
	</div>
</template>

<script>
import Header2 from "@/components/Header2.vue";
import Footer from "@/components/Footer.vue";
export default {
	data() {
		return {};
	},
	components: {
		Header2,
		Footer
	}
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");
.container-gallery {
	padding: 9rem 1rem 1rem 1rem;
	width: 50rem;
	display: grid;
	justify-content: center;
	grid-template-columns: 8rem 8rem 8rem 8rem 8rem;
	grid-template-rows: repeat(2, 8rem);
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
	width: 50rem;
	padding: 1rem;
	margin-left: auto;
	margin-right: auto;
	grid-gap: 3rem;
}
.image-container {
	object-fit: cover;
	grid-column: auto / span 2;
	max-height: 100%;
	padding: 4rem 0 3rem 0;
	margin-left: auto;
	margin-right: auto;
	max-width: 100%;
	min-width: 35rem;
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
	justify-content: center;
	width: auto;
	padding-top: 0.5rem;
}
.image-container .image-description .item {
	white-space: pre;
	background: black;
	color: white;
	text-transform: uppercase;
	font-size: 12px;
}

.signature {
	padding-top: 5rem;
	width: 30rem;
	margin-left: auto;
	margin-right: auto;
}
.signature img {
	height: 100%;
	width: 100%;
}
.information-container {
	font-family: "Raleway", sans-serif;
	font-size: 16px;
	font-weight: bold;
	padding-top: 5rem;
	width: 40rem;
	margin: auto;
	text-align: center;
}
</style>
