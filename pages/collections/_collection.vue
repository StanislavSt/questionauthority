<template>
	<div>
		<div class="container">
			<div class="video-container animated fadeIn delay-0.5s" v-if="content.youtube">
				<div class="video-title">{{content.title}}</div>
				<iframe
					width="840"
					height="500"
					:src="content.youtube.url"
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
	</div>
</template>

<script>
import ProductsGrid from "@/components/ProductsGrid.vue";
export default {
	components: {
		ProductsGrid
	},
	async asyncData(context) {
		// load the content-entry at the current path - will be something like: '/posts/first-post'
		const content = await context.app.$storyapi.get(
			`cdn/stories${context.route.path}`,
			{ version: "draft", resolve_links: 1 }
		);
		const products = await context.app.$storyapi.get(`cdn/stories/`, {
			starts_with: "products/" + context.route.path.split(/[\\/]/).pop(),
			version: "draft",
			resolve_links: 1
		});
		return {
			content: content.data.story.content,
			products: products.data.stories
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
.products {
	display: flex;
	padding-top: 5rem;
	margin-left: auto;
	margin-right: auto;
	width: 53rem;
	justify-content: center;
}
.products .overview__item {
	flex: 1;
	height: 30rem;
}
.products .overview__item img {
	width: 100%; /* image box size as % of container, see step 1 */
	height: 100%;
	object-fit: contain;
}
.overview__item img:hover {
	filter: alpha(opacity=70);
	opacity: 0.7;
	-webkit-transition: opacity 0.2s ease-in-out;
	-moz-transition: opacity 0.2s ease-in-out;
	-ms-transition: opacity 0.2s ease-in-out;
	-o-transition: opacity 0.2s ease-in-out;
	transition: opacity 0.2s ease-in-out;
}
.small-products {
	padding-top: 5rem;
	display: grid;
	grid-row-gap: 2rem;
	justify-content: center;
	width: 50rem;
	margin-left: auto;
	margin-right: auto;
	grid-template-columns: 16rem 16rem 16rem;
	grid-template-rows: 19rem 19rem;
}
.small-products img {
	width: 100%; /* image box size as % of container, see step 1 */
	height: 100%;
	object-fit: contain;
}
.product-price {
	display: none;
	/*display: flex;*/
	justify-content: center;
	width: auto;
	padding-top: 0.5rem;
	font-size: 16px;
}
.product-price .item {
	color: white;
	background-color: black;
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
.video-container .video-title {
	font-size: 2rem;
	text-transform: uppercase;
	padding-bottom: 3rem;
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
