<template>
	<div>
		<Header />
		<div class="wrapper">
			<News />
			<InstagramGallery />
			<div
				class="information-container"
			>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
			<div class="signature">
				<img src="@/assets/QA_Signature.png" alt />
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import InstagramGallery from "@/components/InstagramGallery.vue";
import News from "@/components/News.vue";
export default {
	data() {
		return {};
	},
	components: {
		Header,
		Footer,
		InstagramGallery,
		News
	}
};
</script>

<style scoped>
.wrapper {
}
.signature {
	padding-top: 5rem;
	width: 30rem;
	max-width: 100%;
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
	max-width: 100%;
	margin: auto;
	text-align: center;
}
</style>
