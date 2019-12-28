<template>
	<div class="container">
		<div class="video-container animated fadeIn delay-0.5s" v-if="post.youtube">
			<div class="video-title">{{post.title}}</div>
			<div class="iframe-container">
				<iframe
					:src="post.youtube.url"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		</div>
		<ProductsGrid v-if="products" :products="products" />
		<InformationLogo />
	</div>
</template>

<script>
import ProductsGrid from "@/components/ProductsGrid.vue";
import InformationLogo from "@/components/InformationLogo.vue";
import { getPost, getProducts } from "@/api";
export default {
	components: {
		ProductsGrid,
		InformationLogo
	},
	async asyncData(context) {
		const post = await getPost(context);
		const products = await getProducts(context);

		return {
			post: post.story.content,
			products: products.stories
		};
	}
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:900&display=swap");

.iframe-container {
	position: relative;
	padding: 0 2rem;
	max-width: 840px;
	min-height: 500px;
	margin-left: auto;
	margin-right: auto;
	height: 0;
}
.iframe-container iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.container {
	width: 100%;
}
.video-container {
	padding-top: 10rem;
	text-align: center;
}
.video-container .video-title {
	font-size: 2rem;
	text-transform: uppercase;
	padding-bottom: 3rem;
}
@media screen and (max-width: 860px) {
	.iframe-container {
		margin: 0 1rem;
		min-height: 56vw;
	}
	.video-container {
		padding-top: 4rem;
	}
	.video-container .video-title {
		font-size: 22px;
	}
}
@media screen and (max-width: 670px) {
	.video-container .video-title {
		font-size: 16px;
	}
}
@media screen and (max-width: 400px) {
	.video-container .video-title {
		font-size: 14px;
	}
}
</style>
