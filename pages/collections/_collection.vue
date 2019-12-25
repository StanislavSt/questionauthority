<template>
	<div>
		<div class="video-container animated fadeIn delay-0.5s" v-if="post.youtube">
			<div class="video-title">{{post.title}}</div>
			<iframe
				width="840"
				height="500"
				:src="post.youtube.url"
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
		<ProductsGrid v-if="products" :products="products" />
		<div
			class="information-container"
		>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
		<div class="signature">
			<img src="@/assets/QA_Signature.png" alt />
		</div>
	</div>
</template>

<script>
import ProductsGrid from "@/components/ProductsGrid.vue";
import { getPost, getProducts } from "@/api";
export default {
	components: {
		ProductsGrid
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
.video-container {
	padding-top: 10rem;
	text-align: center;
}
.video-container .video-title {
	font-size: 2rem;
	text-transform: uppercase;
	padding-bottom: 3rem;
}
.information-container {
	font-family: "Raleway", sans-serif;
	font-size: 16px;
	font-weight: bold;
	padding-top: 5rem;
	width: 40rem;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
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
</style>
