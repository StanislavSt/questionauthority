<template>
	<div>
		<Header />
		<div class="video-container animated fadeIn delay-0.5s">
			<div class="video-title">Absolute comfort</div>
			<iframe
				width="840"
				height="500"
				src="https://www.youtube-nocookie.com/embed/cvcwKn2n0IM?controls=0"
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
		<div class="products animated fadeIn delay-0.2s">
			<div class="overview__item" v-for="product in stories.slice(0,2)" :key="product.full_slug">
				<nuxt-link class="overview__item-inner" :to="'/' + product.full_slug">
					<img
						v-if="product.content.images.length > 0"
						:src="product.content.images[0].filename"
						:alt="product.content.images[0].name"
					/>
					<div class="product-price">
						<div class="item">€{{product.content.price}}</div>
					</div>
				</nuxt-link>
			</div>
		</div>
		<div class="small-products animated fadeIn delay-0.2s">
			<div class="overview__item" v-for="product in stories.slice(0,4)" :key="product.full_slug">
				<nuxt-link class="overview__item-inner" :to="'/' + product.full_slug">
					<img
						v-if="product.content.images.length > 0"
						:src="product.content.images[0].filename"
						:alt="product.content.images[0].name"
					/>
					<div class="product-price">
						<div class="item">€{{product.content.price}}</div>
					</div>
				</nuxt-link>
			</div>
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
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
	components: {
		Header,
		Footer
	},
	data() {
		return { stories: [] };
	},
	asyncData(context) {
		// Check if we are in the editing mode
		let editMode = false;

		if (
			context.query._storyblok ||
			context.isDev ||
			(typeof window !== "undefined" &&
				window.localStorage.getItem("_storyblok_draft_mode"))
		) {
			if (typeof window !== "undefined") {
				window.localStorage.setItem("_storyblok_draft_mode", "1");
				if (window.location == window.parent.location) {
					window.localStorage.removeItem("_storyblok_draft_mode");
				}
			}
			editMode = true;
		}
		return context.app.$storyapi
			.get(`cdn/stories/`, {
				starts_with: "products/absolutecomfort/",
				version: editMode ? "draft" : "published",
				cv: context.store.state.cacheVersio
			})
			.then(res => {
				return res.data;
			})
			.catch(res => {
				if (!res.response) {
					console.error(res);
					errorCallback({
						statusCode: 404,
						message: "Failed to receive content from the api."
					});
				} else {
					console.error(res.response.data);
					errorCallback({
						statusCode: res.response.status,
						message: res.response.data
					});
				}
			});
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
